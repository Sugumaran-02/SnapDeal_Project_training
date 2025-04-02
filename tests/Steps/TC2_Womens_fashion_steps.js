import { createBdd } from "playwright-bdd";
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {When, Then, Given} = createBdd (test)


When("the user clicks on the Womeen's Fashion category", async ({homepage}) => {
  await homepage.womens_fashion_tab();
  });
  
Then('the user clicks on the kurtas&kurti category', async ({homepage}) => {
    await homepage.kurat_kurti_tab();
  });
  
Then('only kurtis are listed properly', async ({womensfashionpage}) => {
await womensfashionpage.product_kuri_verify();
  });
  