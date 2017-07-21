import fetch from 'utils/fetch';

// 获取验证码请求
export function getCode (val) {
	const data = {
		phone: val
	}
	return fetch({
		url: '/api/get_code',
		method: 'post',
		data
	})
}

// 检查验证码请求
export function checkCode(val) {
	const data = {
		code: val
	}
	return fetch({
		url: '/api/check_code',
		method: 'post',
		data
	})
}