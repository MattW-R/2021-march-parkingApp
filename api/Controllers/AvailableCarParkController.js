const connectToDb = require('../Services/DbService')
const carParkService = require('../Services/CarParkService')
const jsonResponse = require('../Services/JsonResponseService')


let getAvailableCarParks = async (req, res) => {
    try {
        connectToDb(async (collection, bookingCollection) => {
            let carParks = await carParkService.getAvailableCarParks(collection, bookingCollection, 8)
            res.json(carParks)
            // if (carParks.length > 0) {
            //     let jsonRes = jsonResponse.successful()
            //     jsonRes.message = 'Success - car parks located'
            //     jsonRes.data = carParks
            //     res.json(jsonRes)
            // } else {
            //     let jsonRes = jsonResponse.unsuccessful()
            //     jsonRes.message = 'There are no car parks found'
            //     jsonRes.status = 204
            //     res.json(jsonRes)
            // }
        })
    } catch (error) {
        let jsonRes = jsonResponse.unsuccessful()
        jsonRes.message = error.message
        jsonRes.status = 500
        res.json(jsonRes)
    }
}

let apiFail = (req, res) => {
    let jsonRes = jsonResponse.unsuccessful();
    jsonRes.message = 'This route does not allow for PUT, POST or DELETE requests'
    jsonRes.status = 405
    res.json(jsonRes)
}

module.exports.getAvailableCarParks = getAvailableCarParks
module.exports.apiFail = apiFail

