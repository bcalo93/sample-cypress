import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';
import Login_PO from '../page-objects/Login_PO';

let stub;

const page = new Login_PO();

Given('I navigate to the WebdriverUniversity login page', () => {
  page.navigate();
});

When('I type a username {word}', (username) => {
  page.type_Username(username);
});

When('I type a password {word}', (password) => {
  page.type_Password(password);
});

When('I click on the Login button', () => {
  stub = cy.stub();
  cy.on('window:alert', stub);
  page.clickOn_Login_Button();
});

Then('I should be presented with an alert box which contains text {string}', (alertMessage) => {
  expect(stub).to.have.been.calledWith(alertMessage);
});
