import LoginPage from "../page-objects/loginPage";

describe('Login', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('logins successfuly', () => {
    loginPage.navigate()
  });
});
