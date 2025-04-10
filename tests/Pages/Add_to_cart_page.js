import { expect } from "@playwright/test";
import { help_page } from "./Help_page";

export class addtocart_Page{

constructor(page){
this.page=page;
this.verify_message=page.locator("//span[@class='mess-text']")
this.viewCart_option=page.locator('//*[@id="cartProductContainer"]/div/div[2]/div[2]/div/div[2]/div')
this.check1=page.locator('//*[@id="sdFooter"]/div[1]/div/a[3]/div')
this.frame1= page.locator('//*[@id="cartProductContainer"]/div/div[2]')
this.frame2=page.locator("//div[@class='mess-container']")

}

 async check01(){

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'), // Wait for new tab
        this.check1.click() // Click action that opens a new window
    ]);
    
    await newPage.waitForLoadState(); // Ensure the new page is fully loaded
   return new help_page(newPage); // Return an instance of the product page
  
 }



}