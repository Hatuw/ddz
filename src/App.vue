<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  mounted() {
  	// 当页面被创建时，插入腾讯地图外链文件
    let js = document.createElement('script');
    js.src = 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js';
    js.type = 'text/javascript';
    document.getElementById('app').append(js);
  }
}

</script>
<style>
@import './assets/css/base.css';
@import './assets/css/font-awesome-4.7.0.min.css';
</style>
