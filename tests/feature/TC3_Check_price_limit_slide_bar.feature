Feature: Verify that the user is able to use the price slidebar and check the price

Scenario Outline: User able to silde the price and verify the product shown within limit

Given the user is on the Snapdeal homepage
When  the homepage is loaded properly
And  the user clicks on the Men's Fashion category
Then the user clicks on the Formal Shoes category
And  the user slide the price up and down
Then the products are listed within the mentioned price limit

