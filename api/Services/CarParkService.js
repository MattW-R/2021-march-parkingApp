let getAllCarParks = async (collection) => {
    return collection.find({}).toArray()
}
let getAvailableCarParks = async (carParkCollection, duration) => {
    const secsInHour = 60 * 60
    const startTime = Math.round(Date.now() / (secsInHour * 1000) ) * secsInHour
    const endTime = startTime + (duration * secsInHour)
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
                                            {$multiply: ['$$bookings.duration', secsInHour]}]
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