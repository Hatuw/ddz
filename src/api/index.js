import fetch from 'utils/fetch';

// 获取所有机器投放的学校
export function getPlace() {
  return fetch({
    url: '/api/order?type=place',
    method: 'get'
  })
};

// 获取当前学校的运动类型的剩余数量
export function getSportNum(typeCode,placeCode) {
	return fetch({
		url: `/api/order?type=sport&place=${placeCode}&sType=${typeCode}`,
		method: 'get'
	})
}