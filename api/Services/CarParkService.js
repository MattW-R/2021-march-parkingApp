let getAllCarParks = async (collection) => {
    return collection.find({}).toArray()
}

module.exports.getAllCarParks = getAllCarParks