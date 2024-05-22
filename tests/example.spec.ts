import { test, expect } from "@playwright/test";

test("Login Parabank", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/");
  await loginSauce("standard_user", page);
});

async function loginSauce(name: string, page: any) {
  // Fill the login form.
  await page.locator('[name="username"]').click();
  await page.keyboard.type(name, { delay: 300 });
  await page.locator('[name="password"]').fill("secret_sauce");
  await page.click('input[value="Log In"]');
  await page.waitForTimeout(5000);
}
