const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { 
     specPattern: "cypress/e2e/C:/Users/hb/ecommerce-ui-cypress/cypress/e2e/Cart.cy.js"
    },
    baseUrl: "https://automationexercise.com",
  },
});
