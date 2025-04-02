// Generated from: tests\feature\TC2_Womens_Kurti.feature
import { test } from "../../../tests/Fixtures/fixture.js";

test.describe('Verify that the user is able to search for a Kurti product', () => {

  test('User enters women\'s fashion and search the Kurti', async ({ Given, homepage, When, And, Then, womensfashionpage }) => { 
    await Given('the user is on the Snapdeal homepage', null, { homepage }); 
    await When('the homepage is loaded properly', null, { homepage }); 
    await And('the user clicks on the Womeen\'s Fashion category', null, { homepage }); 
    await Then('the user clicks on the kurtas&kurti category', null, { homepage }); 
    await And('only kurtis are listed properly', null, { womensfashionpage }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\TC2_Womens_Kurti.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ homepage }, use) => use({ homepage }),
  $afterEachFixtures: ({ homepage }, use) => use({ homepage }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Snapdeal homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the homepage is loaded properly","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user clicks on the Womeen's Fashion category","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user clicks on the kurtas&kurti category","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And only kurtis are listed properly","stepMatchArguments":[]}]},
]; // bdd-data-end