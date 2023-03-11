import LoginPage from "../page-objects/loginPage";

describe('Login', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('login successfuly', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    loginPage
      .navigate()
      .typeUsername('webdriver')
      .typePassword('webdriver123')
      .submitForm()
      .then(() => expect(stub).to.be.calledWith('validation succeeded'));
  });

  it('logins failed', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    loginPage
      .navigate()
      .typeUsername('webdriver')
      .typePassword('webdriver')
      .submitForm()
      .then(() => expect(stub).to.be.calledWith('validation failed'));
  });
});
