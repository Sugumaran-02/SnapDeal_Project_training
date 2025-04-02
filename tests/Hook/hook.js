import { chromium, firefox } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from "../Fixtures/fixture";


const { Before, After, BeforeAll, AfterAll,  } = createBdd(test);
//setDefaultTimeout(60 * 1000); // Set default timeout for steps

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
await homepage.goto_page();

})

After(async({homepage}) =>{
 //await homepage.close();
//context.close();
} )

AfterAll(async () =>{
  console.log("I am in after all");
  
    //context.close();
    //browser.close();
})