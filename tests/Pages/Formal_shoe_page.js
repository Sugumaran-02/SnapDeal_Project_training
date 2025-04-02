import { expect } from "@playwright/test";


export class formalshoes_page{

constructor(page){

    this.page=page;
    this.priceUpHandle= page.locator('//*[@id="content_wrapper"]/div[9]/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div[1]/a[1]');
    this.priceDownHandle = page.locator('//*[@id="content_wrapper"]/div[9]/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div[1]/a[2]'); 
    
}

async moveSlider(handle, moveDistance) {
    const box = await handle.boundingBox();
    if (box) {
    
        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;

        await this.page.mouse.move(startX, startY);
        await this.page.mouse.down();
        await this.page.mouse.move(startX + moveDistance, startY, { steps: 10 });
        await this.page.mouse.up();
                console.log(`Moved slider by ${moveDistance} pixels`);
    } else {
        console.error('Slider handle not found');
    }
}



async verify_product_limitprice(){
    const listofdisplay= await this.page.$$("//span[@class='lfloat product-price']");

for (const product1 of listofdisplay) {
    const text= await product1.getAttribute("display-price")

    const price = parseInt(text.trim(), 10);
        expect(price).toBeGreaterThanOrEqual(1315);
        expect(price).toBeLessThanOrEqual(2755);


    // if (text>1315 && text< 2755) {
    //     const price = parseInt(text.trim(), 10);
    //     expect(price).toBeGreaterThanOrEqual(1315);
    //     expect(price).toBeLessThanOrEqual(2755);
    // }else{
    //     console.log(" Some product is not our limit")
    // }
    
}
}


async waitgetprice(){
    await this.page.waitForLoadState('domcontentloaded'); // Wait for page load
    await this.priceUpHandle.waitFor({ state: 'visible' }); // Wait for element to be visible
    await this.priceDownHandle.waitFor({ state: 'visible' });
}

async funforgit(){
console.log("Just to commit")
}

}