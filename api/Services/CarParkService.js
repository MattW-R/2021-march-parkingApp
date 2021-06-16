const NearestHourService = require('./NearestHourService')

const getAllCarParks = async (collection) => {
    return collection.find({}).toArray()
}

const getAvailableCarParks = async (carParkCollection, duration) => {
    const secsInHour = 60 * 60
    const startTime = NearestHourService()
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

let postBooking = async (bookingCollection, newBooking) => {
    const result = await bookingCollection.insertOne(newBooking)
    return result;
}

module.exports.getAllCarParks = getAllCarParks
module.exports.getAvailableCarParks = getAvailableCarParks
module.exports.postBooking = postBooking