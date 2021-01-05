import JsEncrypt from 'jsencrypt'
function RSAencrypt (pas) {
  let publicKey = '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCpjjKwzQxDIGqVQhzPtISt+jj1\nlQs8OJUbT7cTkqG1fQuYecvkRkhG0cKGbx157ZdfYrk8ATLvT12jQLBPlhb5KUkc\ntCtD3ErENKfoZ6m7ph78+ngMZ1y1tY2QYv9xxO8XGVg0GR5NN4z1ZLNpTHbLtjxu\nU1VLQKHKtk4RFA0/iwIDAQAB\n-----END PUBLIC KEY-----\n'
  if (!publicKey || !pas) {
    return pas
  }
  // 实例化jsEncrypt对象
  let jse = new JsEncrypt()
  // 设置公钥
  jse.setPublicKey(publicKey)
  return jse.encrypt(pas)
}
export { RSAencrypt }
