import { createBdd } from "playwright-bdd"
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {Given, Then , When } = createBdd(test)

Then('the user clicks on the sunglasses category', async ({sunglasspage}) => {
  //  await sunglasspage.getwaitsungalss();
 await sunglasspage.sunglassess();
  });
  
  Then('Sort the sunglasses into price as high to low', async ({sunglasspage}) => {
   await sunglasspage.dropdown_sort_high_low()
  });

    
  Then('the products are listed properly as high to low', async ({sunglasspage}) => {
    await sunglasspage.order_of_price();
   });