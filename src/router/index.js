/**
 * 路由文件
 * 使用了组件懒加载，把组件按组分块
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = r => require.ensure([],() => r(require('@/components/Index/index')),'Index');
const register = r => require.ensure([], () => r(require('@/components/Register/Register')), 'Register');
const time = r => require.ensure([],() => r(require('@/components/Time/Time')),'Time');

export default new Router({
	mode: 'history',
  scrollBehavior: () => {
    y: 0
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
     	component: register
    },{
      path: '/time',
      name: 'time',
      component: time
    }
  ]
});
