/**
 * 仓库入口文件
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import {
  merge
} from '@/utils/merge.js';

Vue.use(Vuex);

const state = {
  curAddr: '', // 当前用户的位置
  sport: {}, // 用户选择的运动类型
  schoolList: [], // 所有被投放的学校
  user: { // 当前用户
    openid: '',
    nickname: '',
    headimgurl: ''
  }
};

const mutations = {
  // 设置当前用户的位置位置
  SET_ADDR(state, addrObj) {
    if (typeof addrObj == 'string') {
      merge(state, addrObj, 'curAddr');
    } else {
      let addr = `${filter(addrObj.province)}${filter(addrObj.city)}${filter(addrObj.district)}${filter(addrObj.addr)}`
      merge(state, addr, 'curAddr');
    }
  },
  // 设置当前运动类型
  SET_SPORT(state, sport) {
    merge(state.sport, sport);
  },
  // 设置所有被投放的学校
  SET_SCHOOLLIST(state, schoolList) {
    merge(state.schoolList, schoolList);
  },
  // 设置当前用户信息
  SET_USER(state, userinfo) {
    merge(state.user, userinfo.openid, 'openid');
    merge(state.user, userinfo.nickname, 'nickname');
    merge(state.user, userinfo.headimgurl, 'headimgurl');
  }
};

const actions = {
  SET_ADDR({
    commit,
    state
  }) {
    // 成功时触发commit
    let success = function(addr) {
      commit('SET_ADDR', addr);
    }
    // 失败的回调函数
    let error = function(err) {
      throw new Error(err);
    }
    // 配置参数
    let options = {
      timeout: 100000
    };
    // 调用腾讯前端定位组件,异步执行
    setTimeout(() => {
      let geolocation = new qq.maps.Geolocation("PP5BZ-E6AWP-44ODH-VKN5I-JUVK6-2BFPK", "ddz");
      geolocation.getLocation(success, error, options);
    }, 0)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})

// 过滤不是字符串的参数
function filter(str) {
  if (str && typeof str == 'string') return str;
  return '';
}
