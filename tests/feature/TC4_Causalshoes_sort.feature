Feature: Verify that the user is able to sort the product

Scenario Outline: User enters men's fashion and sort the sunglasses into price as high to low

Given the user is on the Snapdeal homepage
When  the homepage is loaded properly
And  the user clicks on the Men's Fashion category
Then the user clicks on the sunglasses category
And  Sort the sunglasses into price as high to low
Then the products are listed properly as high to low
 