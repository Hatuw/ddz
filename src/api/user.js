/**
 * 用户信息api
 */

import fetch from 'utils/fetch';

// 获取用户状态
const getUser = function(openid) {
  return fetch({
    url: `/api/user?openid=${openid}`,
    method: 'get'
  })
}

export { getUser };
