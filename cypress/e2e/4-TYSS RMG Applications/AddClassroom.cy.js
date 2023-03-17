/* Student Management System

Login as admin and Navigate to application click on classroom. 
and create classroom and check wheather classroom is created or not */

import 'cypress-xpath'


describe('My Login application', () => {

    let allclassroom_table
    let classroomwithran

    beforeEach(() => {
        cy.wait(2000);
      });

    it('should login as admin with valid credentials',  () => {
        cy.visit('http://testingserver/domain/Student_Management_System/view/login.php')
        cy.title().should('eq', 'Student Management System');
        cy.get('#email').clear();
        cy.get('#email').should('have.value', '');
        const email = "admin@gmail.com";
        for (let index = 0; index < email.length; index++) {
            const element = email[index];
            cy.get('#email').type(element);
        }
        cy.get('#email').should('have.value', 'admin@gmail.com');
        const password = "12345";
        for (let index = 0; index < password.length; index++) {
            const element = password[index];
            cy.get('#password').type(element);
        }
        cy.get('#password').should('have.value', '12345');
        cy.wait(2000);
        cy.get('#btnSubmit').click();
        cy.title().should('eq', 'Student Management System');
        cy.wait(2000);
    })

    it('should click on classroom and create classroom', () => {
        // Generate a random number between 0 and 100
        // const randomNumber = Math.floor(Math.random() * 100);
        cy.xpath("//span[normalize-space()='Classroom']").click();
        cy.title().should('eq', 'Student Management System');
        // classroomwithran = "JavaScript"+randomNumber;
        cy.get("#name").type("classroomwithran");
        cy.get("#student_count").type("randomNumber");
        cy.get("#btnSubmit").click();
        cy.wait(2000);
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // return false to prevent Cypress from failing the test
        return false;
      });
      
    // it('should check wheather classroom is created or not', async () => {
    //     await browser.$("//span[normalize-space()='Classroom']").click();
    //     expect(await browser.getTitle()).to.equal('Student Management System');
    //     await browser.scroll(0,500);
    //     await browser.pause(3000);
    //     allclassroom_table = await browser.$$("//tr[@role='row']/td[2]");
    //     allclassroom_table.forEach(async element => {
    //     let classroom = await element.getText();
    //     console.log("classrooms----->"+classroom);
    //     if (classroom == classroomwithran) {
    //     expect(classroom).to.equal(classroomwithran);
    //     console.log("The Classroom has been Verfied : "+classroom);
    //     }
    //     });
    //     expect(await browser.getTitle()).to.equal('Student Management System');
    //     await browser.pause(3000);
    // })

    // it('should signout from an application as admin', async () => {
    //     await browser.$('//span[@class="hidden-xs"]').click();
    //     await browser.pause(3000);
    //     await browser.$('//a[normalize-space()="Sign out"]').click();
    //     await browser.pause(3000);
    // })

})