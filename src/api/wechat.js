/**
 * 关于微信的请求
 */

import fetch from 'utils/fetch';

// 获取jssdk请求
export function get_jssdk(val) {
  const data = new FormData();
  data.append('noncestr', val.noncestr);
  data.append('timestamp', val.timestamp);
  data.append('url', val.url);
  return fetch({
    url: '/api/get_ticket/',
    method: 'post',
    data
  })
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
}