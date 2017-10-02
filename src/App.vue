<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk';
import { getJssdk } from 'api/wechat';
export default {
  name: 'app',
  methods: {
    initData() {
      // 调用jssdk
      const data = {
        url: window.location.href.split('#')[0],
        jsApiList: ['checkJsApi', 'chooseWXPay','chooseImage']
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
