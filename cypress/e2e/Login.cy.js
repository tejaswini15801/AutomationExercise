describe('Login', () => {

    it('should visit the login page', () => {
        cy.visit('/');
        cy.get('.shop-menu > .navbar-nav > li:nth-child(4) > a').click();
        cy.get('input[data-qa=login-email]').type('Tejaswini123@yopmail.com');
        cy.get('input[data-qa=login-password]').type('Test@123');
        cy.get('.login-form > form > button').click();
    })

});