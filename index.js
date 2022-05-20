const express = require('express');
const app = express();
const PORT = 5555;

const propertyInfo = require('./scrappedData/allData.json')
const propertyPrice = require('./scrappedData/price.json')


// app.get('/data', (req, res) => {
//     res.json( {propertyInfo} )

// })

// app.get('/data', (req, res) => {
//     res.json({
//         "info": ["$699,000",
//             "3.97 Acres (Lot)",
//             "7139 Purrysburg Rd, Hardeeville, SC 29927"]
//     })

// })



// app.get('/api', (req, res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree"] })

// })

app.get('/api', (req, res) => {
    res.json({ title: [propertyPrice] })

})



app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})