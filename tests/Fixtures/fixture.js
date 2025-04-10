import {test as base} from "playwright-bdd"

import * as Pages from "./pages"

const {Homepage, womensfashion, formalshoes_page, sunglass_page, wallet_Page, productpage, addtocart_Page, help_page} =Pages

const createtestfunction= (pageclass) => async ({page}, use) =>{
    await use(new pageclass(page));
}

export const test= base.extend({
    homepage: createtestfunction(Homepage),
    womensfashionpage: createtestfunction(womensfashion),
    formalshoepage: createtestfunction(formalshoes_page),
    sunglasspage: createtestfunction(sunglass_page),
    walletpage: createtestfunction(wallet_Page),
    product_pages: createtestfunction(productpage),
    addtocartpage: createtestfunction(addtocart_Page),
    helppage: createtestfunction(help_page)


})





