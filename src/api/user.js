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
};

const getUserOrder = function(phone) {
  return fetch({
    url: `/api/order?type=order&user=${phone}`,
    method: 'get'
  })
}

export { getUser, getUserOrder };
