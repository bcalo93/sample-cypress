import { When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.log("Executes before each Scenrio/Test");
  cy.clearLocalStorage();
});

After(() => {
  cy.log("Executes after each Scenrio/Test");
});

When("I wait for {int} seconds", (seconds) => {
  cy.wait(seconds * 1000);
});
