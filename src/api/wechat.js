/**
 * 关于微信的请求
 */

// 获取jssdk请求
export get_jssdk(val) {
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

//微信网页授权
