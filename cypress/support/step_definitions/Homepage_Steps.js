import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page-objects/Homepage_PO";

const page = new Homepage_PO();

Given('I navigate to the WebdriverUniversity homepage', () => {
  page.navigate();
});

When('I click on the contact us button', () => {
  page.clickOn_ContactUs_Button();
});

When('I click the Login Portal button', () => {
  page.clickOn_Login_Button();
});
