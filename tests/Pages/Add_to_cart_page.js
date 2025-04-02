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

async verify_product_add(){
    const text_verify= await this.verify_message.innerText();
    expect(text_verify).toContain('added to your cart')
}

async viewCart_click(){
 
    const element2= this.frame1.locator('//*[@id="cartProductContainer"]/div/div[2]/div[2]/div/div[2]/div').click();

    await expect(element2).toBeEnabled()
//   await this.viewCart_option.waitFor({state : 'hidden'})
//   await this.viewCart_option.locator('//*[@id="cartProductContainer"]/div/div[2]/div[2]/div/div[2]/div').click({ force: true })
 }

 async check01(){

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'), // Wait for new tab
        this.check1.click() // Click action that opens a new window
    ]);
    
    await newPage.waitForLoadState(); // Ensure the new page is fully loaded
   return new help_page(newPage); // Return an instance of the product page
  
 }


async viewCart_click(){
   await this.viewCart_option.click()
}

}