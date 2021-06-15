let getAllCarParks = async (collection) => {
    return collection.find({}).toArray()
}
let getAvailableCarParks = async (carParkCollection, duration) => {
    const startTime = Date.now()
    const endTime = startTime + (duration * 60 * 60 * 1000)
    let carParks = await carParkCollection.aggregate([
        {
            $lookup: {
                from: 'bookings',
                localField: '_id',
                foreignField: 'carParkId',
                as: 'bookings'
            }
        },
        {
            $addFields: {
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
        },
        {
            $addFields: {
                availableSpaces: {
                    $subtract: ['$totalSpaces', {
                        $size: '$bookings'
                    }]
                }
            }
        },
        {
            $unset: 'bookings'
        }


    ]).toArray()
    carParks = await carParks.filter((carPark) => {
        return carPark.availableSpaces > 0
    })

    return carParks
}
module.exports.getAllCarParks = getAllCarParks
module.exports.getAvailableCarParks = getAvailableCarParks