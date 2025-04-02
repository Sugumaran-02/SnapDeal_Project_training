import { expect } from "@playwright/test";


export class womensfashion{

    constructor(page){
        this.page=page;
        this.Verify_kurti_page= page.locator('//h1[contains(text(),"Kurtas & Kurtis")]');
    }


async verifykurti_page(){
const kurti_page_verify= await this.Verify_kurti_page.innertext()

    expect(kurti_page_verify).toContain("Kurtas & Kurtis")
}

async product_kuri_verify(){

    console.log("I am list tab")
    const listofelement2 =await this.page.$$("//p[@class='product-title']");
     for (const element2 of listofelement2) {
         
         const text= await element2.innerText();
         console.log("Text is"+ text);
         expect(text).toContain('Kurti');
                
     }
 }


}


//span[contains(text(),"Women's Fashion")]