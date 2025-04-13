import { createBdd } from "playwright-bdd"
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {Given, Then , When } = createBdd(test)


When('the user slide the price up and down', async ({formalshoepage}) => {

try {
  await formalshoepage.waitgetprice();
   await formalshoepage.moveSlider(formalshoepage.priceUpHandle, 50)
   await formalshoepage.moveSlider(formalshoepage.priceDownHandle, -50)
} catch (error) {
  console.error('Step failed', error.message)
  await formalshoepage.page.screenshot({path:'Error_Screenshots/Slider.png', fullPage:true})
  
}


  });
  
  Then('the products are listed within the mentioned price limit', async ({formalshoepage}) => {

try {
  await formalshoepage.verify_product_limitprice();
} catch (error) {
  console.error('Step failed', error.message)
  await formalshoepage.page.screenshot({path:'Error_Screenshots/Slider.png', fullPage:true})
}

  });
  