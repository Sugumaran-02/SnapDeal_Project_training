
Feature: Verify that the user is able to search for a product

Scenario Outline: User enters men's fashion and search the formal shoes

Given the user is on the Snapdeal homepage
When  the homepage is loaded properly
And  the user clicks on the Men's Fashion category
Then the user clicks on the Formal Shoes category
And  only formal shoes are listed properly
 

