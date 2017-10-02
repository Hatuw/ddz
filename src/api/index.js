/**
 * 首页用到的api
 */

import fetch from 'utils/fetch';

/**
 * [getPlace 获取所有机器投放的学校]
 */
const getPlace = function() {
  console.log('获取所有机器投放的学校:getPlace');
  return fetch({
    url: '/api/order?type=place',
    method: 'get'
  })
};

/**
 * [getSportNum 获取当前学校的运动类型的剩余数量]
 * @param  {[type]} placeCode [机器代码]
 * @param  {[type]} typeCode  [运动类型]
 */
const getSportNum = function(placeCode, typeCode) {
  console.log('获取当前学校的运动类型的剩余数量:getSportNum');
  console.log(placeCode, typeCode);
  return fetch({
    url: `/api/order?type=sport&place=${placeCode}&sType=${typeCode}`,
    method: 'get'
  })
}

/**
 * [createOrderCode 创建机器验证码]
 * @param  {[type]} phone  [用户电话号码]
 * @param  {[type]} serial [机器id]
 */
const createOrderCode = function(phone, serial) {
  console.log('创建机器验证码:createOrderCode');
  console.log(phone, serial);
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

/**
 * [check_code 验证订单验证码]
 * @param  {[type]} code  [验证码]
 * @param  {[type]} phone [用户号码]
 */
const check_code = function(code, phone) {
  console.log('验证订单验证码:check_code');
  console.log(code, phone);
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

/**
 * [createOrder 创建订单]
 * @param  {[type]} phone     [用户电话号码]
 * @param  {[type]} serial    [机器id]
 * @param  {[type]} sportCode [运动类型]
 */
const createOrder = function(phone, serial, sportCode) {
  console.log('创建订单:createOrder');
  console.log(phone, serial, sportCode);
  const data = new FormData();
  data.append('type', 'post_now');
  data.append('user', phone);
  data.append('serial', serial);
  data.append('sportCode', sportCode);
  return fetch({
    url: '/api/order',
    method: 'post',
    data
  })
}

export { createOrder, check_code, createOrderCode, getSportNum, getPlace };
