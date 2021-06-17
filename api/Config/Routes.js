const CarParkController = require('../Controllers/CarParkController')
const AvailableCarParkController = require('../Controllers/AvailableCarParkController')
const BookCarParkController = require('../Controllers/BookCarParkController')
const NoMethodController = require('../Controllers/NoMethodController')
const { body } = require('express-validator');

let routes = (app) => {
    app.get('/carParks', CarParkController)

    app.post('/carParks', NoMethodController)

    app.put('/carParks', NoMethodController)

    app.delete('/carParks', NoMethodController)

    app.get('/availableCarParks', AvailableCarParkController)

    app.post('/availableCarParks', NoMethodController)

    app.put('/availableCarParks', NoMethodController)

    app.delete('/availableCarParks', NoMethodController)

    app.post('/bookCarPark', [body('email').trim().isEmail().normalizeEmail(), body('registration').trim()], BookCarParkController)

    app.get('/bookCarPark', NoMethodController)

    app.put('/bookCarPark', NoMethodController)

    app.delete('/bookCarPark', NoMethodController)
}

module.exports = routes
