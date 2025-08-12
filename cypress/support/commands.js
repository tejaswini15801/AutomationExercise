Cypress.Commands.add('login', () => {
  cy.visit('https://automationexercise.com/login');
  cy.get('[data-qa="login-email"]').type('Tejaswini123@yopmail.com');
  cy.get('[data-qa="login-password"]').type('Test@123');
  cy.get('[data-qa="login-button"]').click();

  // Confirm login worked
  cy.contains('Logged in as Tejaswini').should('be.visible');
});
