describe('Logout', () => {

  beforeEach(() => {
    cy.login(); // Reuse login logic before every test
  });

it('should search for a product and verify results', () => {

        cy.get('.fa.fa-lock').click(); // Click on the logout button

  });

})
