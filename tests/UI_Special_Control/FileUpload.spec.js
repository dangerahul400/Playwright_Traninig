
//import { test, expect } from require('@playwright/test');
import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('Right Clieck', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload')
        await page.waitForLoadState()
        //Loading Image file
        const filepath = 'tests/TestData/Test.png'
        //console.log(filepath)
        await page.locator('#file-upload').setInputFiles(filepath)
        await page.locator('#file-submit').click({timeout:5000})
        await page.waitForSelector("//h3[normalize-space()='File Uploaded!']")
        //await page.waitForTimeout(5000)
        await expect(page.locator('#uploaded-files')).toContainText('Test.png')
        //await page.routeFromHAR
    })