const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    public: 'http://192.168.18.128:8080',
    disableHostCheck: true,
  },
});

