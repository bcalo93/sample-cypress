import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  constructor() {
    super();
    this.pageUrl = 'http://www.webdriveruniversity.com/Login-Portal/index.html';
  }

  typeUsername(username: string) {
    this.typeInField('#text', username);
    return this;
  }

  typePassword(password: string) {
    this.typeInField('#password', password);
    return this;
  }

  submitForm() {
    return cy.get('#login-button').click();
  }
}
