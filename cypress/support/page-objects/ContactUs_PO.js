import Base_PO from "./Base_PO";

export default class ContactUs_PO extends Base_PO {
  navigate() {
    super.navigate('/Contact-Us/contactus.html');
  }

  type_FirstName(firstName) {
    cy.get('[name="first_name"]').type(firstName);
  }

  type_LastName(lastName) {
    cy.get('[name="last_name"]').type(lastName);
  }

  type_EmailAddress(email) {
    cy.get('[name="email"]').type(email);
  }

  type_Comment(message) {
    cy.get('[name="message"]').type(message);
  }

  clickOn_SubmitButton() {
    cy.get('[type="submit"]').click();
  }

  validate_Submission_Header(expectedText) {
    // Both do the same thing, it verifies the text matches.
    cy.get('h1, body').contains(expectedText);
    cy.get('h1, body').invoke('text').should('include', expectedText);

  }
}
