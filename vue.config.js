const path = require('path');
const resolve=(dir)=> {return path.join(__dirname, dir)}
module.exports = {
  lintOnSave: false,
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://service.inswindows.com",
        ws: true,
        changeOrigin: true
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
