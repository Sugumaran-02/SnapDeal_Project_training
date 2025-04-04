// Generated from: tests\feature\TC1_Mens_FormalShoes.feature
import { test } from "../../../tests/Fixtures/fixture.js";

test.describe('Verify that the user is able to search for a product', () => {

  test('User enters men\'s fashion and search the formal shoes', async ({ Given, homepage, When, And, Then }) => { 
    await Given('the user is on the Snapdeal homepage', null, { homepage }); 
    await When('the homepage is loaded properly', null, { homepage }); 
    await And('the user clicks on the Men\'s Fashion category', null, { homepage }); 
    await Then('the user clicks on the Formal Shoes category', null, { homepage }); 
    await And('only formal shoes are listed properly', null, { homepage }); 
  });

});

// == technical section ==

test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\TC1_Mens_FormalShoes.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ homepage }, use) => use({ homepage }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is on the Snapdeal homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the homepage is loaded properly","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user clicks on the Men's Fashion category","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user clicks on the Formal Shoes category","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And only formal shoes are listed properly","stepMatchArguments":[]}]},
]; // bdd-data-end