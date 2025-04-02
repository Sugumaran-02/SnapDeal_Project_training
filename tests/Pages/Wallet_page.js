import { expect } from "@playwright/test";
import { productpage } from "./Product_page"; 

export class wallet_Page{

constructor(page){
    this.page=page;
    this.wallet=page.locator('(//p[@class="product-title"])[1]')
}

async select_wallet(){
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'), // Wait for new tab
        this.wallet.click() // Click action that opens a new window
    ]);
    
    await newPage.waitForLoadState(); // Ensure the new page is fully loaded
    return new productpage(newPage); // Return an instance of the product page
}


async clickNewWindowLink() {
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'), // Wait for new tab
        this.wallet.click() // Click action that opens a new window
    ]);
    
    await newPage.waitForLoadState(); // Ensure the new page is fully loaded
    return new productpage(newPage); // Return an instance of the product page
}

}

