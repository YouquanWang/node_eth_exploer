import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import router from '../router'
import { clearUser } from './storage'

const http = axios.create()
http.defaults.withCredentials = true
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
http.interceptors.request.use(config => {
  if (config.method === 'post') {
    if (config.data && config.data.constructor === FormData) {
      return config
    }
    if (!config.data) {
      config.data = {}
    }
    config.headers.guid = ''
    config.data.device = 'pc'
    config.data.n_id = ''
    config.data.ip = ''
    config.data = qs.stringify(config.data)
  }
  return config
},
error => {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  let data = response.data
  if (data.code === -1) {
    clearUser()
    router.replace({ name: 'Login' })
    return
  } else {
    if (typeof data === 'object' && data.status !== 1) {
      Vue.prototype.$message(data.message, 'error')
      if (data.jumpurl && data.jumpurl === '/user/edit') {
        router.replace({ name: 'UserInfoEdit' })
      }
      return Promise.reject(response.data)
    }
  }
  return response.data
},
error => {
  return Promise.reject(error)
})
export default http
