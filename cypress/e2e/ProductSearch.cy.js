describe('Product Search', () => {

  beforeEach(() => {
    cy.login(); // Reuse login logic before every test
  });

it('should search for a product and verify results', () => {

        cy.visit('/');
        cy.get('.material-icons.card_travel').click();
        cy.get('.form-control.input-lg').click().type('Summer white top');
        cy.get('.fa.fa-search').click();
        cy.get('.features_items').should('contain', 'Summer White Top');

  });

})
