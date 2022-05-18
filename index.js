const express = require('express');
const app = express();
const PORT = 5555;

//const data = get data


app.get('/data', (req,res)=>{
    res.send(data)
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})