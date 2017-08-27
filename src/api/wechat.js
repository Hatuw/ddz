/**
 * 关于微信的请求
 */

import fetch from 'utils/fetch';

// 获取jssdk请求
export function get_jssdk(val) {
  return fetch({
    url: '/wx/get_ticket',
    method: 'post',
    data: val
  });
};

// 发起微信支付请求
export function wechatPay(val) {
	const data = new FormData();
	data.append('option',val.option);
	data.append('openid',val.openid);
	data.append('openid',val.body);
	data.append('openid',val.orderid);
	return fetch({
		url: '/api/wxpay',
		method: 'post',
		data
	})
}

// 发送微信code
export function send_code(code) {
	const data = new FormData();
	data.append('code',code);
	return fetch({
		url: '/api/get_user_info',
		method: 'post',
		data
	})
};  