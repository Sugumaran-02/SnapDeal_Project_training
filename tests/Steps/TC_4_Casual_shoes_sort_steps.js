import { createBdd } from "playwright-bdd"
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {Given, Then , When } = createBdd(test)

Then('the user clicks on the sunglasses category', async ({sunglasspage}) => {
  //  await sunglasspage.getwaitsungalss();

try {
  await sunglasspage.sunglassess();
} catch (error) {
  console.error('Step failed', error.message)
  await sunglasspage.page.screenshot({path:'Error_Screenshots/sunglassess.png', fullPage: true})
}

 
  });
  
  Then('Sort the sunglasses into price as high to low', async ({sunglasspage}) => {
   
try {
  await sunglasspage.dropdown_sort_high_low()
} catch (error) {
  console.error('Step failed', error.message)
  await sunglasspage.page.screenshot({path:'Error_Screenshots/dropdown_sort_high_low.png', fullPage: true})
}

  });

    
  Then('the products are listed properly as high to low', async ({sunglasspage}) => {
  
try {
  await sunglasspage.order_of_price(); 
} catch (error) {
  console.error('Step failed', error.message)
  await sunglasspage.page.screenshot({path:'Error_Screenshots/order_of_price.png', fullPage: true})
}

   });