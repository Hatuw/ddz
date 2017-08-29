/**
 * 用户注册api
 */

import fetch from 'utils/fetch';

// 发送验证码请求
export function getCode(val) {
  const data = new FormData();
  data.append('phone', val);
  data.append('type', 'send');
  return fetch({
    url: '/api/vcode',
    method: 'post',
    data
  })
}

// 检查手机验证码请求
export function checkCode(vcode, phone) {
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
