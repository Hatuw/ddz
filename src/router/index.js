/**
 * 路由文件
 * 使用了组件懒加载，把组件按组分块
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = r => require.ensure([],() => r(require('@/views/index/index')),'index');
const register = r => require.ensure([], () => r(require('@/views/register/register')), 'register');
const time = r => require.ensure([],() => r(require('@/views/time/time')),'time');
const cash = r => require.ensure([],() => r(require('@/views/cash/cash')),'cash');
const fault = r => require.ensure([],() => r(require('@/views/fault/fault')),'fault');

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
    },
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/cash',
      name: 'cash',
      component: cash
    },
    {
      path: '/fault',
      name: 'fault',
      component: fault
    }
  ]
});
