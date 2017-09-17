<template>
  <div id="wechat_code"></div>
</template>
<script>
import { sendCode } from 'api/wechat';
import { getUser } from 'api/user';
export default {
  name: 'wechat_code',
  data() {
    return {

    };
  },
  methods: {
    getWechatInfo(code) {
      sendCode(code)
        .then((res) => {
          let userinfo = JSON.parse(res.data);
          this.$store.commit('SET_WECHATINFO', userinfo);
          getUser(userinfo.openid)
            .then((respone) => {
              let data = respone.data;
              if (data.status == 0) {
                this.$router.push('/register')
              } else {
                this.$store.commit('SET_USER', data.data);
                this.$router.replace('/');
              }
            })
            .catch((error) => {
              throw error;
            })
        })
        .catch((err) => {
          throw err;
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    // 如果路由上有code,即表明是获取用户信息
    const code = location.href.slice(location.href.indexOf('code') + 5, location.href.indexOf('#/'));
    next((self) => {
      self.getWechatInfo(code);
    });
  }
};

</script>
<style lang="scss" scoped>


</style>
