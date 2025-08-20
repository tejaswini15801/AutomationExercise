
describe('Address Verification in checkout page', () => {

    beforeEach(() => {
    // Block ad/analytics requests so they don’t clutter Cypress logs
    // This stubs those requests (so they don’t really go to the ad server anymore). That means they won’t affect your test outcome.
    cy.intercept('GET', '**adtrafficquality.google/**', {
      statusCode: 204,
      body: {}
    }).as('blockedAds');
  });

    it('should verify the user address after registration', () => {
        cy.register();
        cy.login();
        cy.addProductByName('Blue Top');
        //cy.get("button[type='submit']").click();

    });
});