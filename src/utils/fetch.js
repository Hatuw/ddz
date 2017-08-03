import Axios from 'axios';

// 创建axios实例
const service = Axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000,                  // 请求超时时间
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
});

export default service;