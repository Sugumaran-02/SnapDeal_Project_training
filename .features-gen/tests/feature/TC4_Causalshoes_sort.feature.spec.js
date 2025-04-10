// Generated from: tests\feature\TC4_Causalshoes_sort.feature
import { test } from "../../../tests/Fixtures/fixture.js";

test.describe('Verify that the user is able to sort the product', () => {

  test('User enters men\'s fashion and sort the sunglasses into price as high to low', { tag: ['@smoke'] }, async ({ Given, homepage, When, And, Then, sunglasspage }) => { 
    await Given('the user is on the Snapdeal homepage', null, { homepage }); 
    await When('the homepage is loaded properly', null, { homepage }); 
    await And('the user clicks on the Men\'s Fashion category', null, { homepage }); 
    await Then('the user clicks on the sunglasses category', null, { sunglasspage }); 
    await And('Sort the sunglasses into price as high to low', null, { sunglasspage }); 
    await Then('the products are listed properly as high to low', null, { sunglasspage }); 
  });

});

// == technical section ==

test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\feature\\TC4_Causalshoes_sort.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ homepage }, use) => use({ homepage }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is on the Snapdeal homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the homepage is loaded properly","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user clicks on the Men's Fashion category","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user clicks on the sunglasses category","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And Sort the sunglasses into price as high to low","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the products are listed properly as high to low","stepMatchArguments":[]}]},
]; // bdd-data-end