import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';
import ContactUs_PO from '../page-objects/ContactUs_PO';

const page = new ContactUs_PO();

Given('I navigate to the WebdriverUniversity contact us page', () => {
  page.navigate();
})

When('I type a first name', () => {
  page.type_FirstName('Joe');
});

When('I type a last name', () => {
  page.type_LastName('Blogs');
});

When('I type an email address', () => {
  page.type_EmailAddress('joe_blogs1234@mail.com');
});

When('I type a comment', () => {
  page.type_Comment('Hello world');
});

When('I click on the submit button', () => {
  page.clickOn_SubmitButton();
});

Then('I should be presented with a successful contact us submission message', () => {
  page.validate_Submission_Header('Thank You for your Message!');
});


Then('I should be presented with an unsuccessful contact us submission message', () => {
  page.validate_Submission_Header('Error: Invalid email address');

});

When('I type a specific first name {string}', (firstName) => {
  page.type_FirstName(firstName);
});

When('I type a specific last name {string}', (lastName) => {
  page.type_LastName(lastName);
});

When('I type a specific email address {string}', (email) => {
  page.type_EmailAddress(email);
});

When('I type a specific word {word} and number {int} within the comment input field', (word, number) => {
  page.type_Comment(`${word} ${number}`);

});

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
  page.type_FirstName(firstName);
  page.type_LastName(lastName);
});

When('I type an email {string} and a comment {string}', (emailAddress, comment) => {
  page.type_EmailAddress(emailAddress);
  page.type_Comment(comment);
});

Then('I should be presented with header text {string}', (message) => {
  page.validate_Submission_Header(message);
});
