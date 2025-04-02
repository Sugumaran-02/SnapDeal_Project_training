import { createBdd } from "playwright-bdd"
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {Given, Then , When } = createBdd(test)


When('the user slide the price up and down', async ({formalshoepage}) => {
await formalshoepage.waitgetprice();


   await formalshoepage.moveSlider(formalshoepage.priceUpHandle, 50)
   await formalshoepage.moveSlider(formalshoepage.priceDownHandle, -50)
  });
  
  Then('the products are listed within the mentioned price limit', async ({formalshoepage}) => {
await formalshoepage.verify_product_limitprice();
  });
  