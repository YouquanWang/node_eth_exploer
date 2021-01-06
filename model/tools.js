const md5 = require('md5');
let tools = {
  md5(str) {
    return md5(str)
  },
  getSign(json) {
    let keys = Object.keys(json).sort();
    let str = 'yangwu999';
    for (let item of keys) {
      str += item + json[item]
    }
    return md5(str)
  }
}

module.exports = tools;