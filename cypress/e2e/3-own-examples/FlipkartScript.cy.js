/* Script: open browser login to the application, 
search one product add the product to the cart check whether it is added are not */

describe('flipkart', () => {
    it('add product to cart', () => {
        cy.visit("https://www.flipkart.com/")
        cy.get('._3704LK').type('mobile').should('have.value', 'mobile').type('{enter}');
        cy.wait(3000);
        cy.get('a[href*="apple-iphone-14-starlight-128-gb"]').invoke('removeAttr','target').first().click();
        cy.get('.B_NuCI').should('have.text','APPLE iPhone 14 (Starlight, 128 GB)')
        cy.get('.row > :nth-child(1) > ._2KpZ6l').click();
        cy.get('#pincodeInputId').type('584101{enter}',{force:true});
        cy.get('.row > :nth-child(1) > ._2KpZ6l',{force:true}).click()
    })
})