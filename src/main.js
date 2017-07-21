import Vue from 'vue';
import App from './App';
import router from './router';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// 使用swiper轮播组件
Vue.component('swiper', swiper);
Vue.component('swiperSlide', swiperSlide);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
