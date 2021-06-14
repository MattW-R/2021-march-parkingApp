const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://root:password@localhost:27017'

const connectToDb = (callback) => {
    MongoClient.connect(url, {useUnifiedTopology: true}, async (error, client) => {
        const db = client.db('parkingScout')
        const collection = db.collection('carParks')
        callback(collection)
    })
}

module.exports = connectToDb