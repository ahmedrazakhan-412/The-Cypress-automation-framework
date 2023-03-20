/* Script: open browser login to the application, 
search one product add the product to the cart check whether it is added are not */

describe('Flipkart shopping', () => {

    it('Search and add product to cart', () => {
        
      // Visit the Flipkart website
      cy.visit('https://www.flipkart.com/')
  
      // Wait for the login popup to appear and close it
      // cy.get('._2KpZ6l._2doB4z').click()
  
    // Login to the application with your credentials
    //   cy.get('input[name="username"]').type('your_username')
    //   cy.get('input[name="password"]').type('your_password')
    //   cy.get('button[type="submit"]').click()
  
      // Search for a mobile product
      cy.get('input[type="text"]').type('Samsung Galaxy S20{enter}');

      // Wait for the product page to load
      cy.wait(3000);

      // Click on the first product in the search results
      cy.get('[data-id="MOBFWAVTQNMETGGG"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').first().click()
  
      // Add the product to the cart
      cy.get('#pincodeInputId').type('584101{enter}',{force:true});
      cy.get('button._2KpZ6l._2U9uOA._3v1-ww').click()
  
      // Check if the product is added to the cart
      cy.get('.pMSy0p.XU9vZa').should('contain.text', '1 item')
    })
  })
  