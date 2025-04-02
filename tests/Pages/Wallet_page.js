import { expect } from "@playwright/test";

export class wallet_Page{

constructor(page){
    this.page=page;
    this.wallet=page.locator('(//p[@class="product-title"])[1]')
}

async select_wallet(){
    await this.wallet.waitFor({state : "visible"});
    await this.wallet.click();

}

}