const express = require('express');
const app = express();
const PORT = 5555;

const data = require('./scrappedData/allData.json')


app.get('/data', (req,res)=>{
    res.send(data)
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})