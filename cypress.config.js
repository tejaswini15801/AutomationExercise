const { defineConfig } = require("cypress");
const fs = require('fs');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { 
     specPattern: "cypress/e2e/C:/Users/hb/ecommerce-ui-cypress/cypress/e2e/*.cy.js"
    },
    baseUrl: "https://automationexercise.com",

    setupNodeEvents(on, config) {
      on('task', {
        fileExists(filePath) {
          return fs.existsSync(filePath);
        }
      });
    }
  },
});
