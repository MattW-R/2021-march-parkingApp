const connectToDb = require('../Services/DbService')
const carParkService = require('../Services/CarParkService')
const jsonResponse = require('../Services/JsonResponseService')

let getAllCarParks = async (req, res) => {
    try {
        connectToDb(async (collection) => {
            let carParks = await carParkService.getAllCarParks(collection)
            if (carParks.length > 0) {
                let jsonRes = jsonResponse.successful()
                jsonRes.message = 'Success - car parks located'
                jsonRes.data = carParks
                res.json(jsonRes)
            }
            let jsonRes = jsonResponse.unsuccessful()
            jsonRes.message = 'There are no car parks found'
            jsonRes.status = 204
            res.json(jsonRes)
        })
    } catch (error) {
        let jsonRes = jsonResponse.unsuccessful()
        jsonRes.message = error.message
        jsonRes.status = 500
        res.json(jsonRes)
    }
}

module.exports = getAllCarParks
