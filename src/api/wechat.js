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