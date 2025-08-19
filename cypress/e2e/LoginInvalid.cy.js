describe('Invalid Login', () => {

    it('should visit the login page and display an error message for invalid credentials', () => {

        const randomString = Math.random().toString(36).substring(2);
        const email = `${randomString}`;

        cy.visit('/');
        cy.get('.shop-menu > .navbar-nav > li:nth-child(4) > a').click();
        cy.get('input[data-qa=login-email]').type(email);
        cy.get('input[data-qa=login-password]').type(randomString);
        cy.get('.login-form > form > button').click()
        cy.get('input[data-qa=login-email]').then(($email) => {
            expect($email[0].validationMessage).to.include('@')                //Find the email input field, then grab the raw DOM element, get the browser’s built-in validation error text, and check that it contains the @ symbol.
        })                                                                     // Raw DOM is needed when you want browser-native features like .validationMessage.
                                                                               // Cypress always returns a jQuery object, so you need [0] to unwrap it to raw DOM.
    })                      
    });