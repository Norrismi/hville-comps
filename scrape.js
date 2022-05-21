const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.redfin.com/');

    await page.type("#search-box-input", "29927", { delay: 200 })
    await page.keyboard.press('Enter');
    await page.waitForNavigation();


    const propertyPrice = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("span.homecardV2Price")).map(priceElem => priceElem.textContent)
    })

    const propertyLocation = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("div.homeAddressV2 span")).map(locationElem => locationElem.textContent)
    })

    const propertySqft = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("div.HomeStatsV2 div:nth-child(3)")).map(sqftElem => sqftElem.textContent)
    })

    const propertyBeds = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("div.HomeStatsV2 div:nth-child(1)")).map(bedElem => bedElem.textContent)
    })

    const propertyBaths = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("div.HomeStatsV2 div:nth-child(2)")).map(bathElem => bathElem.textContent)
    })


    await fs.writeFileSync('./scrappedData/price.json', JSON.stringify(propertyPrice, null, 2))
    await fs.writeFileSync('./scrappedData/address.json', JSON.stringify(propertyLocation, null, 1))
    await fs.writeFileSync('./scrappedData/sqft.json', JSON.stringify(propertySqft, null, 1))
    await fs.writeFileSync('./scrappedData/beds.json', JSON.stringify(propertyBeds, null, 1))
    await fs.writeFileSync('./scrappedData/baths.json', JSON.stringify(propertyBaths, null, 1))

    await browser.close();

})();
