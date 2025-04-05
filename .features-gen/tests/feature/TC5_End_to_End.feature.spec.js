// Generated from: tests\feature\TC5_End_to_End.feature
import { test } from "../../../tests/Fixtures/fixture.js";

test.describe.only('Verify that the user is able to add the product into cart', () => {

  test.only('User add the product into add to cart page', { tag: ['@only'] }, async ({ Given, homepage, When, And, Then, walletpage, product_pages, addtocartpage, helppage }) => { 
    await Given('the user is on the Snapdeal homepage', null, { homepage }); 
    await When('the homepage is loaded properly', null, { homepage }); 
    await And('the user enter the product detail in search box', null, { homepage }); 
    await Then('the user clicks on the search button', null, { homepage }); 
    await And('the user select the one wallet', null, { walletpage }); 
    await Then('the user add the wallet into Add to cart'); 
    await And('the product added to cart properly', null, { product_pages, addtocartpage, helppage }); 
    await Then('the viewcart page', null, { product_pages, addtocartpage, helppage }); 
  });

});

// == technical section ==

test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\TC5_End_to_End.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ homepage }, use) => use({ homepage }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is on the Snapdeal homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the homepage is loaded properly","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user enter the product detail in search box","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user clicks on the search button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And the user select the one wallet","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the user add the wallet into Add to cart","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the product added to cart properly","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the viewcart page","stepMatchArguments":[]}]},
]; // bdd-data-end