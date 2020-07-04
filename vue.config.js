module.exports = {
  devServer: {
    proxy: {
      '/avatar': {
        target: 'http://192.168.101.13:3000',
        secure: false, // 如果是https接口，需要配置这个参数,http false,https true
        changeOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
      }
    }
  }
}
