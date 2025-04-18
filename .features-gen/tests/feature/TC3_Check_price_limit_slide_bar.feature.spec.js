// Generated from: tests\feature\TC3_Check_price_limit_slide_bar.feature
import { test } from "../../../tests/Fixtures/fixture.js";

test.describe('Verify that the user is able to use the price slidebar and check the price', () => {

  test('User able to silde the price and verify the product shown within limit', async ({ Given, homepage, When, And, Then, formalshoepage }) => { 
    await Given('the user is on the Snapdeal homepage', null, { homepage }); 
    await When('the homepage is loaded properly', null, { homepage }); 
    await And('the user clicks on the Men\'s Fashion category', null, { homepage }); 
    await Then('the user clicks on the Formal Shoes category', null, { homepage }); 
    await And('the user slide the price up and down', null, { formalshoepage }); 
    await Then('the products are listed within the mentioned price limit', null, { formalshoepage }); 
  });

});

// == technical section ==

test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\TC3_Check_price_limit_slide_bar.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ homepage }, use) => use({ homepage }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Snapdeal homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the homepage is loaded properly","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user clicks on the Men's Fashion category","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user clicks on the Formal Shoes category","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And the user slide the price up and down","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the products are listed within the mentioned price limit","stepMatchArguments":[]}]},
]; // bdd-data-end