import axios from 'axios';
import qs from "qs"
export default function ajax(url, data={}, type='GET') {
  const HTTP = axios.create({
      baseURL: "/miaov",
      withCredentials: true,
      transformRequest:(data)=>{
          return qs.stringify(data)
      }
  });

  return new Promise((resolve, reject) => {
    let promise
    // 1. 执行异步ajax请求
    if(type==='GET') { // 发GET请求
      promise = HTTP.get(url, { // 配置对象
        params: data // 指定请求参数
      })
    } else { // 发POST请求
      promise = HTTP.post(url, data)
    }
    // 2. 如果成功了, 调用resolve(value)
    promise.then(response => {
      // resolve(response.data)
      resolve(response)
    // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
    }).catch(error => {
      reject(error)
      // message.error('请求出错了: ' + error.message)

    })
  })


}



