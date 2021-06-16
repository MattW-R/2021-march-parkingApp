const connectToDb = require('../Services/DbService')
const carParkService = require('../Services/CarParkService')
const jsonResponse = require('../Services/JsonResponseService')
const EmailValidator = require('../Services/Validators/EmailValidator')

let postBooking = async (req, res) => {

    if (EmailValidator){
        let newBooking = {
            email: req.body.email,
            registration: req.body.registration
        }
        try {
            connectToDb(async (carParkCollection, bookingCollection) => {
                const result = await carParkService.postBooking(bookingCollection, newBooking)
                if (result.insertedCount == 1) {
                    res.send('New booking added')
                } else {
                    res.send('Error in adding booking')
                }
            })
        } catch (error) {
            let jsonRes = jsonResponse.unsuccessful()
            jsonRes.message = error.message
            jsonRes.status = 500
            res.json(jsonRes)
        }
    } else {
        let jsonRes = jsonResponse.unsuccessful()
        jsonRes.message = 'Invalid email'
        jsonRes.status = 400
        res.json(jsonRes)
    }
}

module.exports = postBooking
