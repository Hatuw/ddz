/**
 * 关于微信的请求
 */

import fetch from 'utils/fetch';

// 获取jssdk请求
const getJssdk = function(val) {
  return fetch({
    url: '/wx/get_ticket',
    method: 'post',
    data: val
  });
};

// 发起微信支付请求
const wechatPay = function(val) {
  const data = new FormData();
  data.append('option', val.option);
  data.append('openid', val.openid);
  data.append('body', val.body);
  data.append('orderid', val.orderid);
  return fetch({
    url: '/api/wxpay',
    method: 'post',
    data
  })
};

// 发送微信code
const sendCode = function(code) {
  const data = new FormData();
  data.append('code', code);
  return fetch({
    url: '/api/get_user_info',
    method: 'post',
    data
  })
};

export { sendCode, wechatPay, getJssdk }
