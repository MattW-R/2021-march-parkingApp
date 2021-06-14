const connectToDb = require('../Services/DbService')
const carParkService = require('../Services/CarParkService')
const jsonResponse = require('../Services/JsonResponseService')

let getAllCarParks = async (req, res) => {
    try {
        connectToDb(async (collection) => {
            let carParks = await carParkService.getAllCarParks(collection)
            if (carParks.length > 0) {
                let jsonRes = jsonResponse.successful()
                jsonRes.data = carParks
                res.json(jsonRes)
            } else {
                let jsonRes = jsonResponse.unsuccessful()
                jsonRes.message = "There are no car parks found"
                jsonRes.status = 204
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

let apiFail = (req, res) => {
    let jsonRes = jsonResponse.unsuccessful();
    jsonRes.message = "This route does not allow for PUT, POST or DELETE requests"
    jsonRes.status = 405
    res.json(jsonRes)
}

module.exports.getAllCarParks = getAllCarParks
module.exports.apiFail = apiFail

