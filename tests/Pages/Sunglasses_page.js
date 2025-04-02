import { expect } from "@playwright/test";

export class sunglass_page{

constructor(page){
    this.page=page;
    this.sungalsses_option=page.locator('//*[@id="category1Data"]/div[3]/div/div/p[2]/a/span');
    this.sort_dropdown= page.locator("//div[@class='sorting-sec animBounce']");
    this.price_high_low= page.locator('//*[@id="content_wrapper"]/div[9]/div[2]/div/div[3]/div[2]/ul/li[3]');
    this.sunglass_price_list= page.$$("//span[@class='lfloat product-price']")

}

async sunglassess(){
    await this.sungalsses_option.click();
}

async dropdown_sort_high_low(){
await this.sort_dropdown.click();
await this.price_high_low.click();
}


async order_of_price(){
    
        const listofdisplay= await this.page.$$("//span[@class='lfloat product-price']");
        var i=10000;
    for (const product1 of listofdisplay) {
        const text= await product1.getAttribute("display-price")
    
        const price = parseInt(text.trim(), 10);
        

        if(i>=price){
            console.log(" Some product price is "+ price)
        
        }
i=price;

        //    expect(price).toBeGreaterThanOrEqual(1315);
         //   expect(price).toBeLessThanOrEqual(2755);
    
    
        // if (text>1315 && text< 2755) {
        //     const price = parseInt(text.trim(), 10);
        //     expect(price).toBeGreaterThanOrEqual(1315);
        //     expect(price).toBeLessThanOrEqual(2755);
        // }else{
        //     console.log(" Some product is not our limit")
        // }
        
    }
 
}

async getwaitsungalss(){
    await this.page.waitForLoadState('domcontentloaded'); // Wait for page load
    await this.sungalsses_option.waitFor({ state: 'visible' }); // Wait for element to be visible  
}

}