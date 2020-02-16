describe("UI Tests", function() {
  it("should navigate to Success Page after submitting.", function() {
    // first visit the site
    cy.visit("http://localhost:3000");
    // get elements we will be
    // interacting with and alias them
    cy.get('input[name="firstName"]').as("firstNameText");
    cy.get('input[name="lastName"]').as("lastNameText");
    cy.get('select[name="gender"]').as("genderSelect");
    cy.get('input[name="areYouAwesome"]').as("areYouAwesomeCheck");
    cy.get("a").as("submitButton");
    // interact with the elements
    cy.get("@firstNameText").type("Randal");
    cy.get("@lastNameText").type("Cunanan");
    cy.get("@genderSelect").select("Male");
    cy.get("@areYouAwesomeCheck").check();
    cy.get("@submitButton").click();
    // wait for the Success! message
    cy.get(".message").as("message");
    // Assert that we are in the next page
    cy.url().should("include", "page2");
    cy.get("@message").should("have.text", "Success!");
  });
});
