/* This website http://the-internet.herokuapp.com/ is a great place to practice various Selenium actions 
like clicking, entering text, selecting options, and verifying content. 
It offers a variety of web pages and features that can be used to test and practice automation scripts, */


describe('to practice various Selenium actions like clicking, entering text', () => {
  
    beforeEach(() => {
      cy.visit('https://demoqa.com/text-box')
    });
  
    it('should entering text in text field', () => {
      cy.get('#userName').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
    });

});