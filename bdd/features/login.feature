Feature: Login functionality for vhrm

Scenario: Login Scenario

Given I visit vhrm login page
When I enter "bacspw" in the user name field
And I enter "Sudhakar@123#" in the password field
And I press the login button
Then I should see the dashboard page