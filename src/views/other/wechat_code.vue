<template>
  <div id="wechat_code">
    正在登录...
  </div>
</template>
<script>
import { sendCode } from 'api/wechat';
import { getUser, getUserOrder } from 'api/user';
export default {
  name: 'wechat_code',
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    getWechatInfo(code) {
      sendCode(code)
        .then((res) => {
          try {
            let userinfo = JSON.parse(res.data);
            this.$store.commit('SET_WECHATINFO', userinfo);
            getUser(userinfo.openid)
              .then((respone) => {
                try {
                  let data = respone.data;
                  if (data.status == 0) {
                    this.$router.push('/register');
                  } else {
                    this.$store.commit('SET_USER', data.data);
                    getUserOrder(this.user.user_id)
                      .then((res) => {
                        try {
                          console.log('-------------------------------getUserOrder');
                          console.log(res);
                          const status = res.data.status;
                          if (status === 1) {
                            this.$router.replace('/time');
                          } else this.$router.replace('/');
                        } catch (e) {
                          throw new Error('获取用户订单失败');
                        }
                      })
                      .catch((err) => {
                        throw err;
                      })
                  }
                } catch (e) {
                  alert('获取用户信息失败,请重新打开网页');
                }
              })
              .catch((error) => {
                throw error;
              })
          } catch (e) {
            alert('获取用户信息失败,请重新打开网页');
          }
        })
        .catch((err) => {
          throw err;
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    // 如果路由上有code,即表明是获取用户信息
    try {
      const code = location.href.slice(location.href.indexOf('code') + 5, location.href.indexOf('#/'));
      next((self) => {
        self.getWechatInfo(code);
      });
    } catch (e) {
      alert('用户信息获取失败,请重新打开网页');
    }
  }
};

</script>
