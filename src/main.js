import Vue from 'vue';
import App from './App';
import router from './router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// 使用swiper轮播组件
Vue.component('swiper', swiper);
Vue.component('swiperSlide', swiperSlide);

// 在创建实例的时候默认配置项
Axios.create({
	baseUrl: 'localhost:3000'
});
Vue.use(VueAxios,Axios);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
