import fetch from 'utils/fetch';

// 获取验证码请求
export function getCode (val) {
	const data = {
		phone: val,
		type: 'send'
	}
	return fetch({
		url: '/api/get_code',
		method: 'post',
		data
	})
}

// 检查验证码请求
export function checkCode(vcode,phone) {
	const data = {
		vcode,
		type:'verification',
		phone
	}
	return fetch({
		url: '/api/check_code',
		method: 'post',
		data
	})
}