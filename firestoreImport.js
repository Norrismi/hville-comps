const fs = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

const data = require('./scrappedData/allData.json');
const { async } = require('rxjs');

fs.initializeApp({
    credential: fs.credential.cert(serviceAccount)
})

const db = fs.firestore();





const propertyDB = db.collection('property')

const scrape = propertyDB.doc('scrape')

scrape.set({data})

























