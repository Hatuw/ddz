/**
 * 用户信息api
 */

import fetch from 'utils/fetch';

/**
 * [getUser 获取用户状态]
 * @param  {[type]} openid [微信用户openid]
 */
const getUser = function(openid) {
  console.log('获取用户状态:getUser');
  console.log(openid);
  return fetch({
    url: `/api/user?openid=${openid}`,
    method: 'get'
  })
};

/**
 * [getUserOrder 获取用户订单]
 * @param  {[type]} phone [用户电话号码]
 */
const getUserOrder = function(phone) {
  console.log('获取用户订单:getUserOrder');
  console.log(phone);
  return fetch({
    url: `/api/order?type=order&user=${phone}`,
    method: 'get'
  })
}

export { getUser, getUserOrder };
