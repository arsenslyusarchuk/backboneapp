@javascript
Feature: new object creates
	In order to start learning RSpec and Cucumber
	As a reader of The RSpec Book
	I want to see how new object creates
Scenario: new post creates
	Given site entered
	Then I should see "Listing posts"
	When I click button "New Post" 
	And fill in all the inputs 
	When I click "Create Post"
	Then I should see post created
	When I click button "Edit"
	And change post title 
	Then I should see title updated
