Feature: Add Employee functionality for vhrm

Scenario: Add Employee Scenario

Given I visit vhrm login page
When I enter "bacspw" in the user name field
And I enter "Sudhakar@123#" in the password field
And I press the login button
Then I should see the dashboard page
When I click on PIM link
Then I should see the PIM page
When I click on Add Employee link
Then I should see the Add Employee page
When I fill in the employee details with unique empid
And I click on save button
Then I should see the successful message