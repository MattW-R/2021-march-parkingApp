let getAllCarParks = async (collection) => {
    return collection.find({}).toArray()
}
let getAvailableCarParks = async (carParkCollection,bookingCollection, duration) => {
    const startTime = Date.now()
    const endTime = startTime + (duration * 60 * 60 * 1000)
    return carParkCollection.aggregate([
        {
            $lookup: {
                from: 'bookings',
                localField: '_id',
                foreignField: 'carParkId',
                as: 'bookings'
            }
        },
        {
            $project: {
                bookings: {
                    $filter: {
                        input: '$bookings',
                        as: 'bookings',
                        cond: {
                            $and: [
                                {
                                    $lt: ['$$bookings.startDateTime', endTime]
                                },
                                {
                                    $gt: [{
                                        $sum: ['$$bookings.startDateTime',
                                            {$multiply: ['$$bookings.duration', 60 * 60 * 1000]}]
                                    },
                                        startTime]
                                }
                            ]
                        }
                    }
                }
            }
        }
    ]).toArray()
}
module.exports.getAllCarParks = getAllCarParks
module.exports.getAvailableCarParks = getAvailableCarParks