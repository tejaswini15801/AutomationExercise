
describe('Address Verification in checkout page', () => {
    it('should verify the user address after registration', () => {
        cy.register();
        cy.login();
        cy.addProductByName('Blue Top');
        //cy.get("button[type='submit']").click();

    });
});