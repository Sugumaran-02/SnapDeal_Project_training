import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {When, Then, Given} =createBdd(test)
let productPage;
let help_page;

When('the user enter the product detail in search box', async ({homepage}) => {


try {
  await homepage.Search_product();
} catch (error) {
  console.error('Step failed', error.message)
  await sunglasspage.page.screenshot({path:'Error_Screenshots/Search_product.png', fullPage: true})
}

  });
  
  Then('the user clicks on the search button', async ({homepage}) => {
try {
  await homepage.Search_button_click();
} catch (error) {
  console.error('Step failed', error.message)
  await sunglasspage.page.screenshot({path:'Error_Screenshots/Search_button.png', fullPage: true})
}


  });

  Then('the user select the one wallet', async ({walletpage}) => {
   

    try {
      productPage = await walletpage.select_wallet();
    } catch (error) {
      console.error('Step failed', error.message)
  await sunglasspage.page.screenshot({path:'Error_Screenshots/wallet.png', fullPage: true})
    }
      
      });

 Then('the user add the wallet into Add to cart', async(product_pages) => {
try {
  await productPage.checkpincode();
    await productPage.verify_availability();
    await productPage.AddtoCart();
} catch (error) {
  console.error('Step failed', error.message)
  await sunglasspage.page.screenshot({path:'Error_Screenshots/checkpincode.png', fullPage: true})
}

    
  }) ;   

  Then ('the product added to cart properly', async ({product_pages, addtocartpage, helppage})=>{
 
  

    try {
      await productPage.verify_product_add();
      await productPage.view_cart_click();
    } catch (error) {
      console.error('Step failed', error.message)
      await sunglasspage.page.screenshot({path:'Error_Screenshots/product_add.png', fullPage: true})
    }
  
 //HELP PAGE

// help_page=await addtocartpage.check01();

// await help_page.verify_text();

  })


 
