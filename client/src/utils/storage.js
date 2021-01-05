
import Vue from 'vue'
const isLogin = extend('isLogin', sessionStorage)
const userInfo = {
  get (nocache) {
    let data = sessionStorage.getItem('userInfo')
    if (!data || nocache) {
      return requestUserInfo().then(function (res) {
        setData('userInfo', JSON.stringify(res.data), sessionStorage)
        return res.data
      })
    } else {
      return Promise.resolve(JSON.parse(data))
    }
  },
  set (key, value) {
    let data = sessionStorage.getItem('userInfo')
    if (!data) {
      return
    }
    let info = JSON.parse(data)
    info[key] = value
    setData('userInfo', JSON.stringify(info), sessionStorage)
  },
  update () {
    sessionStorage.removeItem('userInfo')
    requestUserInfo().then(function (res) {
      setData('userInfo', JSON.stringify(res.data), sessionStorage)
    })
  },
  remove () {
    sessionStorage.removeItem('userInfo')
  }
}
function extend (key, storage = localStorage) {
  return {
    get () {
      return storage.getItem(key)
    },
    set (value) {
      setData(key, value, storage)
    },
    remove () {
      storage.removeItem(key)
    }
  }
}
function requestUserInfo () {
  return Vue.prototype.axios.post('/admin/userInfo')
}
function setData (key, value, storage = localStorage) {
  try {
    storage.setItem(key, value)
  } catch (e) {
  }
}
function clearUser () {
  isLogin.remove()
}
export {
  isLogin,
  clearUser,
  userInfo
}
