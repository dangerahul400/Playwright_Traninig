import { test, expect } from '@playwright/test';

test('Flipcart Login Page Mouse Hover', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.hover("//span[normalize-space()='Login']")
  await page.click("//li[normalize-space()='My Profile']");
  await expect(page.locator("//button[normalize-space()='Request OTP']")).toHaveText("Request OTP")
  await expect(page.locator("//button[normalize-space()='Request OTP']")).toBeVisible()
  await page.waitForTimeout(5000)
});


test('Drag and Drop Exp 2', async ({ page }) => {
    //Visit the OrnageHRM Website
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    await page.dragAndDrop("div[id='draggable'] p","#droppable")
    await page.waitForTimeout(5000)
    //await page.click('.context-menu-icon-edit > span')
    
});
