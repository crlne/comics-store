const { defineConfig } = require('@vue/cli-service');
module.exports = {
  devServer: {
    host: '0.0.0.0', // ou 'localhost'
    port: 8080,
    public: 'http://192.168.18.128:8080', // ajuste isso conforme necessário
    disableHostCheck: true, // use isso se você estiver em um ambiente de rede local
  }
};

