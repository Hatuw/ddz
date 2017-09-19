/**
 * 首页用到的api
 */

import fetch from 'utils/fetch';

// 获取所有机器投放的学校
const getPlace = function() {
  return fetch({
    url: '/api/order?type=place',
    method: 'get'
  })
};

// 获取当前学校的运动类型的剩余数量
const getSportNum = function(typeCode, placeCode) {
  return fetch({
    url: `/api/order?type=sport&place=${placeCode}&sType=${typeCode}`,
    method: 'get'
  })
}

// 创建机器验证码
const createOrderCode = function(phone, serial) {
  const data = new FormData();
  data.append('type', 'vcode');
  data.append('user', phone);
  data.append('serial', serial);
  return fetch({
    url: '/api/order',
    method: 'post',
    data
  })
}

// 验证订单验证码
const check_code = function(code, phone) {
  const data = new FormData();
  data.append('type', 'vcode');
  data.append('user', phone);
  data.append('code', code);
  return fetch({
    url: '/api/order',
    method: 'post',
    data
  })
}

const createOrder = function(phone, serial) {
  const data = new FormData();
  data.append('type', 'post_now');
  data.append('user', phone);
  data.append('serial', serial);
  return fetch({
    url: '/api/order',
    method: 'post',
    data
  })
}

export { createOrder, check_code, createOrderCode, getSportNum, getPlace };
