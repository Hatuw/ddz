/**
 * 用户注册api
 */

import fetch from 'utils/fetch';

/**
 * [getCode 发送验证码请求]
 * @param  {[type]} val [验证码]
 */
const getCode = function(val) {
  const data = new FormData();
  data.append('phone', val);
  data.append('type', 'send');
  return fetch({
    url: '/api/vcode',
    method: 'post',
    data
  })
}

/**
 * [checkCode 检查手机验证码请求]
 * @param  {[type]} vcode [手机验证码]
 * @param  {[type]} phone [用户电话号码]
 */
const checkCode = function(vcode, phone) {
  const data = new FormData();
  data.append('vcode', vcode);
  data.append('type', 'verification');
  data.append('phone', phone);
  return fetch({
    url: '/api/vcode',
    method: 'post',
    data
  })
}

/**
 * [createUser 创建用户]
 * @param  {[type]} obj   [用户信息]
 * @param  {[type]} phone [用户电话号码]
 */
const createUser = function(obj, phone) {
  const data = new FormData();
  data.append('type', 'register');
  data.append('user', phone);
  data.append('name', obj.nickname);
  data.append('city', obj.city);
  data.append('image', obj.headimgurl);
  data.append('openid', obj.openid);
  return fetch({
    url: '/api/user',
    method: 'post',
    data
  })
}

export { getCode, checkCode, createUser };
