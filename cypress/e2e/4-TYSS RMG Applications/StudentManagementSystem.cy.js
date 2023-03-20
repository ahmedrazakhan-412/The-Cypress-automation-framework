/* Student Management System

Login as admin and Navigate to application click on classroom. 
and create classroom and check wheather classroom is created or not */


describe('Student Management System Login application', () => {
  
    beforeEach(() => {
      cy.visit('http://testingserver/domain/Student_Management_System/view/login.php')
    });
  
    it('should login with valid credentials as Admin', () => {
     const email = "admin@gmail.com";
     cy.get('#email').type(email,{force:true});
     cy.get('#email').should('have.value', 'admin@gmail.com');
     cy.get('#email').clear();
     cy.get('#email').should('have.value', '');
    });

});