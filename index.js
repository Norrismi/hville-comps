const express = require('express');
const app = express();
const PORT = 5555;

const price = require('./scrappedData/price.json')
const sqft = require('./scrappedData/sqft.json')
const address = require('./scrappedData/address.json')


app.get('/price', (req, res) => {
    res.json({price})
})

app.get('/sqft', (req, res) => {
    res.json({sqft})
})

app.get('/address', (req, res) => {
    res.json({address})
})


app.get('/info', (req, res) => {
    res.json({price, sqft})
})



app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}/`)
})