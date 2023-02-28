import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const URL = "http://www.webdriveruniversity.com/";

Given('I navigate to the WebdriverUniversity homepage', () => {
  cy.visit(URL);
});

When('I click on the contact us button', () => {
  cy.get('#contact-us').invoke('removeAttr', 'target').click();
});
