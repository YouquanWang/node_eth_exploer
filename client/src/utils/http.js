import axios from "axios";
import qs from "qs";
import { ElMessage } from 'element-plus'

const http = axios.create()
http.defaults.withCredentials = true;
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
http.interceptors.request.use(config => {
  if (config.method === "post") {
    if (config.data && config.data.constructor === FormData) {
      return config;
    }
    if (!config.data) {
      config.data = {};
    }
    config.data = qs.stringify(config.data);
  }
  return config;
},
  error => {
    return Promise.reject(error);
  })

http.interceptors.response.use(response => {
  let data = response.data;
  if (typeof data === "object" && data.status !== 1) {
    ElMessage.error(data.msg);
    return Promise.reject(response.data);
  }
  return response.data;
 },
  error => {
    return Promise.reject(error);
  })
export default http;
