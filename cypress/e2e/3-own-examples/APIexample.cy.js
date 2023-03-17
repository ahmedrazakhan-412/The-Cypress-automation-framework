// Here is an example of making an API request in Cypress:

describe("API Testing", () => {

    it("should return a list of users", () => {

      cy.request("GET", "https://jsonplaceholder.typicode.com/users").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.lengthOf(10);
      });
    });

    it("should return a list of users data along with details", () => {
    cy.request('https://jsonplaceholder.typicode.com/users').then((responseBody) => {
    const jsonObj = responseBody;
      // Use cy.log() to print the JSON object
      cy.log(JSON.stringify(jsonObj, null, 4))

       });
    });

  });