const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    //specPattern serve para o Cypress saber quais arquivos são considerados testes
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 800,
    env: {
      apiUrl: 'https://serverest.dev',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
  video: true
});
