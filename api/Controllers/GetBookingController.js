const connectToDb = require('../Services/DbService')
const jsonResponse = require('../Services/JsonResponseService')
const BookingService = require('../Services/BookingService')
const MongoId = require('mongodb').ObjectId

const GetBookingController = async (req, res) => {
    try {
        connectToDb(async (collection, bookingCollection) => {
            if (MongoId.isValid(req.params.id)) {
                const id = req.params.id
                let booking = await BookingService.getOneBooking(bookingCollection, id)
                if (booking.length > 0) {
                    let jsonRes = jsonResponse.successful()
                    jsonRes.message = 'Success - booking located'
                    jsonRes.data = booking[0]
                    res.json(jsonRes)
                } else {
                    let jsonRes = jsonResponse.unsuccessful()
                    jsonRes.message = 'There are no bookings found'
                    jsonRes.status = 204
                    res.json(jsonRes)
                }
            } else {
                let jsonRes = jsonResponse.unsuccessful()
                jsonRes.message = 'Invalid booking id'
                jsonRes.status = 400
                res.json(jsonRes)
            }
        })
    } catch (error) {
        let jsonRes = jsonResponse.unsuccessful()
        jsonRes.message = error.message
        jsonRes.status = 500
        res.json(jsonRes)
    }
}

module.exports = GetBookingController
