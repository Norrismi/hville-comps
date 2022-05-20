const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {
    // const price = require('./scrappedData/price.json');
    // const location = require('./scrappedData/location.json');
    // const sqft = require('./scrappedData/sqft.json');

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


    await fs.writeFileSync('./scrappedData/price.json', JSON.stringify(propertyPrice, null, 2))
    await fs.writeFileSync('./scrappedData/location.json', JSON.stringify(propertyLocation, null, 1))
    await fs.writeFileSync('./scrappedData/sqft.json', JSON.stringify(propertySqft, null, 1))

    await browser.close();

    // const data = price.map((e, i) =>  {
    //     return {
    //         price: e,
    //         sqft: sqft[i],
    //         location: location[i]
    //     }
    // });
  
    // await fs.writeFileSync('./scrappedData/allData.json', JSON.stringify(data, null, 1))
})();
