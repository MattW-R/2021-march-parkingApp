let getAllCarParks = async (collection) => {
    return collection.find({}).toArray()
}
let getAvailableCarParks = async (carParkCollection,bookingCollection, duration) => {
    return bookingCollection.aggregate([{
        $lookup: {
            from: 'carParks',
            localField: 'carParkId',
            foreignField: '_id',
            as: 'carPark'
        }
    },
        {
            $group: {
                _id: '$carParkId',
                'carPark': {
                $push: {
                    $mergeObjects: '$$ROOT'
                }
                }
                }
            },


        // {$replaceRoot:{ newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$carPark", 0 ] }, "$$ROOT" ]}}}
        ]).toArray()
}
module.exports.getAllCarParks = getAllCarParks
module.exports.getAvailableCarParks = getAvailableCarParks