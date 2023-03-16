describe('Amazon', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com')
    })
  
    it('should search for a product', () => {
      cy.get('#twotabsearchtextbox').type('iPhone 13 Pro Max')
      cy.get('.nav-search-submit').click()
      cy.contains('Apple iPhone 13 Pro Max').should('be.visible')
    })
  
    it('should add a product to the cart', () => {
      cy.get('#twotabsearchtextbox').type('iPhone 13 Pro Max')
      cy.get('.nav-search-submit').click()
      cy.contains('Apple iPhone 13 Pro Max').click()
      cy.get('#add-to-cart-button').click()
      cy.get('#hlb-view-cart-announce').click()
      cy.contains('Apple iPhone 13 Pro Max').should('be.visible')

    // Search for product and add to cart
    cy.get('#twotabsearchtextbox').type(product + '{enter}');
    cy.get('.s-result-item').first().find('.a-link-normal').click();
    cy.get('#add-to-cart-button').click();

    // Proceed to checkout
    cy.get('#hlb-ptc-btn-native').click();
    cy.get('#address-book-entry-0').click();
    cy.get('#enterAddressFullName').type('John Doe');
    cy.get('#enterAddressPhoneNumber').type('1234567890');
    cy.get('#enterAddressPostalCode').type('12345');
    cy.get('#enterAddressAddressLine1').type('123 Main St');
    cy.get('#enterAddressCity').type('Anytown');
    cy.get('#enterAddressStateOrRegion').type('NY');
    cy.get('#address-ui-widgets-form-submit-button').click();
    cy.get('#order-summary-container').should('contain', product);
    cy.get('#continue-top').click();
    cy.get('#placeYourOrder').click();

    // Check order confirmation
    cy.get('#thank-you-message').should('contain', 'Thank you');
  });
  it('can log in and purchase a product', () => {
    // Log in
    cy.visit('https://www.amazon.com');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('ahmedrazakhan412@gmail.com');
    cy.get('#continue').click();
    cy.get('#ap_password').type('madina@786');
    cy.get('#signInSubmit').click();
    })
  })
  