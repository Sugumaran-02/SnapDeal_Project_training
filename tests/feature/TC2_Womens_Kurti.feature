@smoke
Feature:  Verify that the user is able to search for a Kurti product
@smoke 
Scenario Outline: User enters women's fashion and search the Kurti

Given the user is on the Snapdeal homepage
When  the homepage is loaded properly
And  the user clicks on the Womeen's Fashion category
Then the user clicks on the kurtas&kurti category
And  only kurtis are listed properly 