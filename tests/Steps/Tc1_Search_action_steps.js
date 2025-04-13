import { createBdd } from "playwright-bdd"
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {Given, Then , When } = createBdd(test)


Given('the user is on the Snapdeal homepage', async ({homepage}) => {

//await homepage.goto_page();
console.log("I am snapdeal page")


  });
  
  When('the homepage is loaded properly', async ({homepage}) => {
try {
  await homepage.popupinteraction();
await homepage.Account_Tab_verify();
} catch (error) {
  console.error('Step failed:', error.message)
 await homepage.page.screenshot({ path: 'Error_Screenshots/screenshot4.png', fullPage: true });
}

  });
  
  When("the user clicks on the Men's Fashion category", async ({homepage}) => {
try {
  await homepage.mens_fashion_option();
} catch (error) {
  console.error('Step failed:', error.message)
 await homepage.page.Screenshot({path:'Error_Screenshots/screenshot2.png', fullPage: true})
}
  
  });
  
  Then('the user clicks on the Formal Shoes category', async ({homepage}) => {
    
      
    try {
      await homepage.formal_shoe_option();
      console.log("This in formal shoes ");
      
    } catch (error) {
      console.error('Step failed:', error.message)
    await  homepage.page.screenshot({path:'Error_Screenshots/screenshot3.png', fullPage: true})
    }
   
  });
  
  Then('only formal shoes are listed properly', async ({homepage}) => {
  
try {
  await homepage.product_verify();
} catch (error) {
  console.error('Step failed:', error.message)
  await homepage.page.screenshot({ path: 'Error_Screenshots/screenshot4.png', fullPage: true });
}

    
    //await homepage.close();
  
  });