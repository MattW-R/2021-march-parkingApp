const connectToDb = require('../Services/DbService')
const carParkService = require('../Services/CarParkService')
const jsonResponse = require('../Services/JsonResponseService')

let getAllCarParks = async (req, res) => {
    connectToDb(async (collection) => {
        let carParks = await carParkService.getAllCarParks(collection);
        let jsonRes = jsonResponse.successful();
        jsonRes.data = carParks;
        res.json(jsonRes); // Displays the results
    })
}

let apiFail =
    //add message don't use this for post/delete etc
    //amend the unsuccessful message here - amend hte message property of the response

    async (req, res) => {
    connectToDb(async (collection) => {
        let carParks = await carParkService.getAllCarParks(collection);
        let jsonRes = jsonResponse.unsuccessful();
        jsonRes.data = carParks;
        res.json(jsonRes); // Displays the results
    })
}

//needs to give a JSON response but it doesn't need to try and query the database



module.exports.getAllCarParks = getAllCarParks
module.exports.apiFail = apiFail

