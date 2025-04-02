import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


export class productpage{
constructor(page){
this.page=page;
this.Addtocart_button= page.locator('//span[text()="add to cart"]')
this.pincode= page.locator('//input[@id="pincode-check"]')
this.pincode_check_button=page.locator('//div[@id="pincode-check-bttn"]')
this.checkavailability=page.locator('//div[@class="pin-checked"]//following::p[@class="itm-avail"]')

}

async checkpincode(){
    this.page.pause();
 await   this.pincode.fill("624204")
await   this.pincode_check_button.click();
  }

async getNewWindowText(selector) {
    return await this.page.textContent(selector);
}

async verify_availability(){


//   const availability_status=  this.checkavailability.innerText();
//    console.log("The Availablity status is"+ availability_status);
//    expect(availability_status).toContain("Item is available at")

    expect(this.checkavailability).toBeVisible()
   
}

async AddtoCart(){

 await   this.Addtocart_button.click();
}

}