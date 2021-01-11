module.exports = {
  lintOnSave: false,
  outputDir: '../views',
  lintOnSave: true,
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { }
      }
    }
  }
}  