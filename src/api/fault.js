/**
 * 故障报修api
 */

import fetch from 'utils/fetch';

/**
 * [sendRepair 提交故障信息]
 * @param  {[type]} tp [报修类型]
 * @param  {[type]} phone  [用户电话号码]
 * @param  {[type]} oId    [订单id]
 * @param  {[type]} issue  [保障内容]
 * @param  {[type]} serial [机器id]
 */
const sendRepair = function(tp, phone, oId, issue, serial = null) {
  console.log('提交故障信息:sendRepair');
  const data = new FormData();
  data.append('type', tp);
  data.append('user_id', phone);
  data.append('order_id', oId);
  data.append('issue', issue);
  serial === null ? false : data.append('serial', serial);
  return new fetch({
    url: '/api/repair',
    method: 'post',
    data
  })
}

export { sendRepair };
