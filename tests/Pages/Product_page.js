import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


export class productpage{
constructor(page){
this.page=page;
this.Addtocart_button= page.locator('//span[text()="add to cart"]')
this.pincode= page.locator('//input[@id="pincode-check"]')
this.pincode_check_button=page.locator('//div[@id="pincode-check-bttn"]')
this.checkavailability=page.locator('//div[@class="pin-checked"]//following::p[@class="itm-avail"]')
this.view_cart= page.locator('//*[@id="cartProductContainer"]/div/div[2]/div[2]/div/div[2]/div')
this.verify_message=page.locator("//span[@class='mess-text']")

}

async checkpincode(){
    
 await   this.pincode.fill("624204")
await   this.pincode_check_button.click();
  }

async getNewWindowText(selector) {
    return await this.page.textContent(selector);
}

async verify_availability(){


  const availability_status1=await  this.checkavailability.innerText();
   console.log("The Availablity status is"+ availability_status1);
   expect(availability_status1).toContain("Item is available at")

   // expect(this.checkavailability).toBeVisible()
   
}

async AddtoCart(){

 await   this.Addtocart_button.click();
}


async verify_product_add(){
  const text_verify= await this.verify_message.innerText();
  console.log("The product status is " + text_verify)
  expect(text_verify).toContain('added to your cart')
}

async view_cart_click(){
await this. page.waitForTimeout(4000)
 await this.view_cart.click()
 
}





}