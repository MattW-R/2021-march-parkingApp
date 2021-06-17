const MongoId = require('mongodb').ObjectId

const getOneBooking = async (collection, id) => {
    return collection.find({
        _id: MongoId(id)
    }).toArray()
}

module.exports.getOneBooking = getOneBooking
