module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/<comics-store>/' : '/',
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}