import { expect } from "@playwright/test";

export class help_page{
constructor(page){
    this.page=page;
    this.text_verify=page.locator('//*[@id="content_wrapper"]/div[4]/div[4]/div[2]/div/div[4]/div[2]/div[1]')
}

async verify_text(){
    const texthelp= await this.text_verify.innerText();
    expect(texthelp).toContain('How can we help you?')
}

}