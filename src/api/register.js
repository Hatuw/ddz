import fetch from 'utils/fetch';

// 获取验证码请求
export function getCode(val) {
  const data = new FormData();
  data.append('phone', val);
  data.append('type', 'send');
  return fetch({
    url: '/api/get_code',
    method: 'post',
    data
  })
}

// 检查验证码请求
export function checkCode(vcode, phone) {
  const data = new FormData();
  data.append('vcode', vcode);
  data.append('type', 'verification');
  data.append('phone', phone);
  return fetch({
    url: '/api/check_code',
    method: 'post',
    data
  })
}
