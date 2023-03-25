import Base_PO from "./Base_PO";

export default class Login_PO extends Base_PO {
  navigate() {
    super.navigate('/Login-Portal/index.html');
  }

  type_Username(username) {
    cy.get('#text').type(username);
  }

  type_Password(password) {
    cy.get('#password').type(password);
  }

  clickOn_Login_Button() {
    cy.get('#login-button').click();
  }
}
