@login @regression
Feature: WebdriverUniversity - Login Page
  Background: Pre conditions
    When I wait for 0 seconds
    Given I navigate to the WebdriverUniversity login page

  Scenario: Successful Login
    And I type a username webdriver
    And I type a password webdriver123
    And I click on the Login button
    Then I should be presented with an alert box which contains text 'validation succeeded'

  Scenario: Failed Login
    And I type a username webdriver
    And I type a password wrongPassword
    And I click on the Login button
    Then I should be presented with an alert box which contains text 'validation failed'
