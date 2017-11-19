<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk';
import { getJssdk } from 'api/wechat';
import { getUserOrder } from 'api/user';
import { wechatPay } from 'api/wechat';
export default {
  name: 'app',
  methods: {
    initData() {
      // 调用jssdk
      const data = {
        url: window.location.href.split('#')[0],
        jsApiList: ['checkJsApi', 'chooseWXPay', 'chooseImage', 'uploadImage']
      }
      // 获取js-sdk
      getJssdk(data)
        .then((res) => {
          wx.config({
            debug: true,
            appId: res.data.appId,
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.noncestr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名，见附录1
            jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
          wx.error((error) => {
            throw error;
          });
        })
        .catch((error) => {
          throw error;
        });

      // 当页面被创建时，插入腾讯地图外链文件
      let js = document.createElement('script');
      js.src = 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js';
      js.type = 'text/javascript';
      document.getElementById('app').appendChild(js);
    },
    // 轮询订单
    checkOrder() {
      let timer = setInterval(() => {
        getUserOrder(this.user.user_id)
          .then((res) => {
            try {
              console.log('-------------------------------getUserOrder');
              console.log(res);
              const status = res.data.status;
              if (status === 1) {
                this.$store.commit('SET_USERORDER', res.data.data[0]);
                if (res.data.data[0].status == 2) clearInterval(timer);
              }
            } catch (e) {
              throw new Error('获取用户订单失败');
            }
          })
          .catch((err) => {
            throw err;
          })
      }, 5000);
    }
  },
  watch: {
    userOrder(nVal, oVal) {
      if (nVal.status == 2 || oVal == 2) {
        const _self = this;
        // 微信支付配置参数
        const opt = {
          option: 'unifiedorder',
          openid: this.user.openid,
          body: 'rent',
          orderid: _self.userOrder.order_id
        }
        wechatPay(opt)
          .then((res) => {
            let resData = res.data;
            // 微信支付,还可以有一个参数是回调函数
            // 支付成功后更新一下用户数据
            wx.chooseWXPay({
              timestamp: resData.timestamp,
              nonceStr: resData.nonceStr,
              package: resData.package,
              signType: resData.signType,
              paySign: resData.paySign,
              success: function(res) {
                getUser(_self.user.openid)
                  .then((respone) => {
                    _self.$store.commit('SET_USER', respone.data.data);
                    _self.$router.replace('/');
                  })
                  .catch((error) => {
                    throw error;
                  })
              }
            });
          })
          .catch((err) => {
            throw err;
          });
      }
    },
    hasOrder(nVal, oVal) {
      if (nVal) this.checkOrder();
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userOrder() {
      return this.$store.state.userOrder
    },
    hasOrder() {
      return this.$store.state.hasOrder;
    }
  },
  mounted() {
    this.initData();
  }
}

</script>
<style>
@import './assets/css/base.css';
@import './assets/css/font-awesome-4.7.0.min.css';

</style>
