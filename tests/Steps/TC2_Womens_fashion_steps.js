import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {When, Then, Given} = createBdd (test)


When("the user clicks on the Womeen's Fashion category", async ({homepage}) => {

try {
  await homepage.womens_fashion_tab();
} catch (error) {
  console.error('Step failed:', error.message)
  await homepage.page.screenshot({path:'Error_Screenshots/Error_womens_fashion_tab.png', fullPage: true})
  
}

 
  });
  
Then('the user clicks on the kurtas&kurti category', async ({homepage}) => {
try {
  await homepage.kurat_kurti_tab();
} catch (error) {
  console.error('Step failed', error.message)
  await homepage.page.screenshot({path:'Error_Screenshots/kurat_kurti_tab.png', fullPage: true})
}

    
  });
  
Then('only kurtis are listed properly', async ({womensfashionpage}) => {
try {
  await womensfashionpage.product_kuri_verify();
} catch (error) {
  console.error('steps failed', error.message)
  await womensfashionpage.page.screenshot({path:'Error_Screenshots/product_kuri_verify.png', fullPage: true})
}


  });
  