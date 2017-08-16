/**
 * 路由文件
 * 使用了组件懒加载，把组件按组分块
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = r => require.ensure([], () => r(require('@/views/index/index')), 'index');
const register = r => require.ensure([], () => r(require('@/views/register/register')), 'register');
const time = r => require.ensure([], () => r(require('@/views/time/time')), 'time');
const cash = r => require.ensure([], () => r(require('@/views/cash/cash')), 'cash');
const myCash = r => require.ensure([], () => r(require('@/views/cash/myCash')), 'cash');
const reCash = r => require.ensure([], () => r(require('@/views/cash/reCash')), 'cash');
const fault = r => require.ensure([], () => r(require('@/views/fault/fault')), 'fault');
const myFault = r => require.ensure([], () => r(require('@/views/fault/childrens/myFault')), 'fault');
const machine = r => require.ensure([], () => r(require('@/views/fault/childrens/machine')), 'fault');
const equipment = r => require.ensure([], () => r(require('@/views/fault/childrens/equipment')), 'fault');
const otherFault = r => require.ensure([], () => r(require('@/views/fault/childrens/otherFault')), 'fault');
const personal = r => require.ensure([], () => r(require('@/views/personal/personal')), 'personal');
const about = r => require.ensure([], () => r(require('@/views/personal/childrens/about')), 'personal');
const opinion = r => require.ensure([], () => r(require('@/views/personal/childrens/opinion')), 'personal');
const pay = r => require.ensure([], () => r(require('@/views/pay/pay')), 'pay');
const introduce = r => require.ensure([], () => r(require('@/views/introduce/introduce')), 'introduce');

const router = new Router({
  mode: 'history',
  scrollBehavior: () => {
    y: 0
  },
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/time',
      name: 'time',
      component: time,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/cash',
      name: 'cash',
      component: cash,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/reCash',
      name: 'reCash',
      component: reCash,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/myCash',
      name: 'myCash',
      component: myCash,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/fault',
      name: 'fault',
      component: fault,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/myFault',
      name: 'myFault',
      component: myFault,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/machine',
      name: 'machine',
      component: machine,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: equipment,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/otherFault',
      name: 'otherFault',
      component: otherFault,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/opinion',
      name: 'opinion',
      component: opinion,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce,
      meta: {
        requireAuth: true
      }
    }
  ]
});

// 当进行路由跳转前，先判断本地是否保存token
// 如果没有就发起获取token请求
// router.beforeEach((to, from, next) => {
//   if(to.meta.requireAuth) {
//     let token = document.cookie.split('=')[1];
//     // 如果token不存在的情况
//     if(!token) {

//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
