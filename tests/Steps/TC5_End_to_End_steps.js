import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {When, Then, Given} =createBdd(test)
let productPage;
let help_page;

When('the user enter the product detail in search box', async ({homepage}) => {
await homepage.Search_product();

  });
  
  Then('the user clicks on the search button', async ({homepage}) => {
await homepage.Search_button_click();
  });

  Then('the user select the one wallet', async ({walletpage}) => {
    productPage = await walletpage.select_wallet();
      
      });

 Then('the user add the wallet into Add to cart', async(product_pages) => {
    await productPage.checkpincode();
    await productPage.verify_availability();
    await productPage.AddtoCart();
  }) ;   

  When ('the product added to cart properly', async ({product_pages, addtocartpage, helppage})=>{
  // // await product_pages.verify_product_add();

  //  await product_pages. viewCart_click();
   
 // await addtocartpage.check01();
help_page=await addtocartpage.check01();

await help_page.verify_text();

  })