import fetch from 'utils/fetch';

// 获取js-sdk
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
}
