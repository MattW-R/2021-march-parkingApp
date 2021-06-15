const CarParkController = require('../Controllers/CarParkController')
const AvailableCarParkController = require('../Controllers/AvailableCarParkController')

let routes = (app) => {
    app.get('/carParks', CarParkController.getAllCarParks)

    app.post('/carParks', CarParkController.apiFail)

    app.put('/carParks', CarParkController.apiFail)

    app.delete('/carParks', CarParkController.apiFail)

    app.get('/availableCarParks', AvailableCarParkController.getAvailableCarParks)

    app.post('/availableCarParks', AvailableCarParkController.apiFail)

    app.put('/availableCarParks', AvailableCarParkController.apiFail)

    app.delete('/availableCarParks', AvailableCarParkController.apiFail)

}

module.exports = routes
