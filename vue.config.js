const path = require('path');
const resolve=(dir)=> {return path.join(__dirname, dir)}
module.exports = {
  lintOnSave: false,
  publicPath: "/",
  devServer: {
    proxy: {
      "/testapi": {
        target: "https://m.toutiao.com",
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/testapi':'/'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
