/**
 * 首页用到的api
 */

import fetch from 'utils/fetch';

// 获取用户状态
export function get_user(openid) {
  return fetch({
    url: `/api/user?openid=${openid}`,
    method: 'get'
  })
}

// 获取所有机器投放的学校
export function getPlace() {
  return fetch({
    url: '/api/order?type=place',
    method: 'get'
  })
};

// 获取当前学校的运动类型的剩余数量
export function getSportNum(typeCode, placeCode) {
  return fetch({
    url: `/api/order?type=sport&place=${placeCode}&sType=${typeCode}`,
    method: 'get'
  })
}

// 创建机器验证码
export function create_order(phone, serial) {
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
export function check_code(code, phone) {
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