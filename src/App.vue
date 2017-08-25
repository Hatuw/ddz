<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk';
import { get_jssdk } from 'api/wechat';
export default {
  name: 'app',
  mounted() {

    // // 当页面被创建时，插入腾讯地图外链文件
    let js = document.createElement('script');
    js.src = 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js';
    js.type = 'text/javascript';
    document.getElementById('app').appendChild(js);

    // 调用jssdk
    const data = {
      url: window.location.href.split('#')[0],
      jsApiList: ['checkJsApi', 'chooseWXPay']
    }

    get_jssdk(data)
      .then((res) => {

        console.log('---------------这是一道华丽丽的分割线----------------');
        console.log(res.data);
        console.log('---------------这是一道华丽丽的分割线----------------');

        wx.config({
          debug: true,
          appId: res.data.appId,
          timestamp: res.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.noncestr, // 必填，生成签名的随机串
          signature: res.data.signature, // 必填，签名，见附录1
          jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.ready((res) => {
          wx.checkJsApi({
            jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function(res) {
              console.log(res);
            }
          });
        });
        wx.error((error) => {
          console.log(error);
        })
      })
      .catch((error) => {
        throw new Error(error);
      })
  }
}

</script>
<style>
@import './assets/css/base.css';
@import './assets/css/font-awesome-4.7.0.min.css';
</style>
