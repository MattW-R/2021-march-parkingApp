const CarParkController = require('../Controllers/CarParkController')

let routes = (app) => {
    app.get('/carParks', CarParkController.getAllCarParks)

    app.post('/carParks', CarParkController.apiFail)

    app.put('/carParks', CarParkController.apiFail)

    app.delete('/carParks', CarParkController.apiFail)
}

module.exports = routes
