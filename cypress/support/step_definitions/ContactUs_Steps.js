import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I type a first name', () => {
  cy.get('[name="first_name"]').type('Joe');
});

When('I type a last name', () => {
  cy.get('[name="last_name"]').type('Blogs');

});

When('I type an email address', () => {
  cy.get('[name="email"]').type('joe_blogs1234@mail.com');
});

When('I type a comment', () => {
  cy.get('[name="message"]').type('Hello world');

});

When('I click on the submit button', () => {
  cy.get('[type="submit"]').click();

});

Then('I should be presented with a successful contact us submission message', () => {
  cy.get('h1').should('have.text', 'Thank You for your Message!')
});


Then('I should be presented with an unsuccessful contact us submission message', () => {
  cy.get('body').contains('Error: Invalid email address');
});

When('I type a specific first name {string}', (firstName) => {
  cy.get('[name="first_name"]').type(firstName);
});

When('I type a specific last name {string}', (lastName) => {
  cy.get('[name="last_name"]').type(lastName);
});

When('I type a specific email address {string}', (email) => {
  cy.get('[name="email"]').type(email);
});

When('I type a specific word {word} and number {int} within the comment input field', (word, number) => {
  cy.get('[name="message"]').type(`${word} ${number}`);
});

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
  cy.get('[name="first_name"]').type(firstName);
  cy.get('[name="last_name"]').type(lastName);
});

When('I type an email {string} and a comment {string}', (emailAddress, comment) => {
  cy.get('[name="email"]').type(emailAddress);
  cy.get('[name="message"]').type(comment);
});

Then('I should be presented with header text {string}', (message) => {
  cy.get('h1, body').contains(message);
});
