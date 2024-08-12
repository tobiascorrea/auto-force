const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://testes.autoforce.com.br/dealer-bmw-desafio",
    setupNodeEvents(on, config) {
  }
  }
});
