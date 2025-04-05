
Feature: Verify that the user is able to add the product into cart

Scenario Outline: User add the product into add to cart page

Given the user is on the Snapdeal homepage
When  the homepage is loaded properly
And  the user enter the product detail in search box
Then the user clicks on the search button
And  the user select the one wallet
Then the user add the wallet into Add to cart
And  the product added to cart properly

