const express = require('express');
const app = express();
const PORT = 5555;

const price = require('./scrappedData/price.json')
const sqft = require('./scrappedData/sqft.json')
const propertyAddress = require('./scrappedData/address.json')


app.get('/info', (req, res) => {
    res.json( {price, sqft})

})



app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}/`)
})