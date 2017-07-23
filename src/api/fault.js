import fetch from 'utils/fetch';

// 获取js-sdk
export function get_jssdk(data) {
	return fetch({
		url: '/api/getTicket',
		method: 'post',
		data
	}) 
}