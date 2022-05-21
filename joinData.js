const fs = require('fs');

(async() => {
    const price = require('./scrappedData/price.json');
    const address = require('./scrappedData/address.json');
    const bed = require('./scrappedData/beds.json');
    const bath = require('./scrappedData/baths.json');
    const sqft = require('./scrappedData/sqft.json');


    const data = price.map((e, i) =>  {
        return {
            price: e,
            beds: bed[i],
            baths: bath[i],
            sqft: sqft[i],
            address: address[i]
        }
    });
  
    await fs.writeFileSync('./scrappedData/allData.json', JSON.stringify(data, null, 1))

})()