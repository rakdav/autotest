const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");
(async function firstTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://ya.ru');
        let title = await driver.getTitle();
        assert.equal("Яндекс — быстрый поиск в интернете", title);
        await driver.manage().setTimeouts({implicit:500})
        let textBox = await driver.findElement(By.xpath("//*[@id=\"text\"]"));
        let submitButton=await driver.findElement(
            By.className("search3__button"));
        await textBox.sendKeys('Автоматизированное тестирование');
        await submitButton.click();
        

    } catch (e) {
        console.log(e)
    } finally {
       // await driver.quit();
    }
}())


