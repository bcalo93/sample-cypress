import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

let stub;

When('I type a username {word}', (username) => {
  cy.get('#text').type(username);
});

When('I type a password {word}', (password) => {
  cy.get('#password').type(password);
});

When('I click on the Login button', () => {
  stub = cy.stub();
  cy.on('window:alert', stub);
  cy.get('#login-button').click();
});

Then('I should be presented with an alert box which contains text {string}', (alertMessage) => {
  expect(stub).to.have.been.calledWith(alertMessage);
});
