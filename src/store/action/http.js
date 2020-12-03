import axios from "axios";
import qs from "qs";
// axios.create 可以使用自定义配置一个axios
const http = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  baseURL: "/miaov",
  withCredentials: true,
  transformRequest: (data) => {

    // 对 data 进行转换处理
    return qs.stringify(data);
  },
});

export default http;
