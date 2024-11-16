const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");
(async function firstTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://ya.ru');
        let submitSignIn=await driver.findElement(
            By.className("headline__personal-enter"));
        submitSignIn.click();
    } catch (e) {
        console.log(e)
    } finally {
        // await driver.quit();
    }
}())