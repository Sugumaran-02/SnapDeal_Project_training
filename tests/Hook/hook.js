import { chromium, firefox } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from "../Fixtures/fixture";
import path from 'path';


const { Before, After, BeforeAll, AfterAll,  } = createBdd(test);

let browser;
let context;
let page;

// BeforeAll(async () => {
//   console.log('Launching browser...');
//   browser = await chromium.launch({ headless: false, slowMo: 1000 }); // Set `true` if you want headless mode
//   context = await browser.newContext({recordvideo:{
//     dir: 'videos/',
//     size:{width:800, height:600}
//  }});
//  // page = await context.newPage();
//  // test.setTimeout(60000);
// // await page.waitForLoadState('networkidle');
// });

Before(async ({homepage})=>{

  try {
    await homepage.goto_page();
  } catch (error) {
    console.error('Step failed:', error.message)
homepage.screenshot({path:'Error_Screenshots/screenshot.png', fullPage: true})

  }


})

After(async({page}) =>{
 await page.close();

} )

AfterAll(async () =>{
  console.log("I am in after all");

})