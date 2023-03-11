import LoginPage from "../page-objects/loginPage";

describe('Login', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('logins successfuly', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    loginPage
      .navigate()
      .typeUsername('webdriver')
      .typePassword('webdriver123')
      .submitForm();

    expect(true).to.equal(false);
    expect(stub).to.have.been.calledWith('validation succeeded');
  });
});
