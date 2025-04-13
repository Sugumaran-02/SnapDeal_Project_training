import {expect } from "playwright/test";
const { chromium } = require('playwright');
const testdata= JSON.parse(JSON.stringify(require("../utilities/testdata.json")))


export class Homepage{

    constructor(page){
this.page=page;
this.browser;
this.context;
this.Account_Tab= page.locator("//span[contains(text(),'Sign In')]");
this.Search_box= page.getByPlaceholder('Search products & brands');
this.Search_button= page.locator('//*[@id="sdHeader"]/div[4]/div[2]/div/div[2]/button');
this.pincode_box= page.getByPlaceholder('Enter your pincode');
this.mens_fashion= page.locator('//*[@id="leftNavMenuRevamp"]/div[1]/div[2]/ul/li[1]/a/span[2]');
this.formal_shoes= page.locator('//*[@id="category1Data"]/div[1]/div/div/p[6]/a/span');
this.verifyshoe_page= page.locator("//h1");
this.womens_fashion= page.locator('//span[contains(text(),"Women")]')
this.kurtas_kurti= page.locator('//*[@id="category2Data"]/div[1]/div/div/p[3]/a/span')

this.notnow=page.getByRole('button', { name: 'NOT NOW' })


    }

    async goto_page(){
        // const browser = await chromium.launch({ headless: false });
        // const context = await browser.newContext();
        // const page = await context.newPage();
        await this.page.goto(testdata.URL);
        ;
        

        // await this.page.goto("https://www.snapdeal.com/", 
        //     { waitUntil: "domcontentloaded" });
        // await this.page.waitForLoadState("domcontentloaded");  // Ensure all requests are done
    }

async Account_Tab_verify(){
  // await this.page.pause();
 await expect(this.Account_Tab).toBeVisible();
}

async Search_product(){
    await this.Search_box.waitFor({ state: 'visible' }); 
     
    await this.Search_box.fill(testdata.Product_name.Wallet_name);
   
}

async Search_button_click(){
    await this.Search_button.waitFor({ state: 'visible' }); 
   // await this.Search_button.dblclick();
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
    }

async product_verify(){

   const listofelement =await this.page.$$("//p[@class='product-title ']");
    for (const element1 of listofelement) {
        
        const text= await element1.innerText();
        console.log("Text is"+ text);
        expect(text).toContain('Formal Shoes');
               
    }
}
 async mens_fashion_option(){
    await this.mens_fashion.click();
 }

 async formal_shoe_option(){
    await this.formal_shoes.click();
 }

async pincode(){
    await this.pincode_box.fill(testdata.Pincode)
}

async womens_fashion_tab(){
    await this.womens_fashion.click();
}

async kurat_kurti_tab(){
    await this.kurtas_kurti.click({ force: true });
}

async pageclose(){
    await this.page.close();
}

async popupinteraction(){
    
    if(await this.notnow.isVisible()){
        await this.notnow.click();
    }
}

}