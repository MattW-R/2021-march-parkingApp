const JsonResponse = require('./JsonResponseService')

let getAllCarParks = async (collection, options = {}) => {
    const result = await collection.find({}).toArray()
    return result
}

module.exports.getAllCarParks = getAllCarParks