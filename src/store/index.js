/**
 * 仓库入口文件
 */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

Vue.use(Vuex);

const state = {
  pos: {  // 定位
    province: '',
    city: '',
    district: '',
    addr: ''
  },
  sport: {}
};

const mutations = {
  // 设置仓库的地址位置
  SET_ADDR(state, posObj) {
    // 获取地址成功后的回调函数,参数是地址的详细信息
    state.pos.province = posObj.province;
    state.pos.city = posObj.city;
    state.pos.district = posObj.district;
    state.pos.addr = posObj.addr;
  },
  // 设置当前运动类型
  SET_SPORT(state,sport) {
    state.sport = sport;
  }
};

const actions = {
  GET_ADDR({ commit, state }) {
  	// 成功时触发commit
  	let success = function(posObj) {
  		commit('SET_ADDR',posObj);
  	}
    // 失败的回调函数
    let error = function(err) {
    	throw err;
    }
    // 配置参数
    let options = { timeout: 100000 };
    // 调用腾讯前端定位组件,异步执行
    setTimeout(()=> {
	    let geolocation = new qq.maps.Geolocation("PP5BZ-E6AWP-44ODH-VKN5I-JUVK6-2BFPK", "ddz");
	    geolocation.getLocation(success, error, options);
    },0)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
