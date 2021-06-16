const CarParkController = require('../Controllers/CarParkController')
const AvailableCarParkController = require('../Controllers/AvailableCarParkController')
const BookCarParkController = require('../Controllers/BookCarParkController')
const NoMethodController = require('../Controllers/NoMethodController')

let routes = (app) => {
    app.get('/carParks', CarParkController)

    app.post('/carParks', NoMethodController)

    app.put('/carParks', NoMethodController)

    app.delete('/carParks', NoMethodController)

    app.get('/availableCarParks', AvailableCarParkController)

    app.post('/availableCarParks', NoMethodController)

    app.put('/availableCarParks', NoMethodController)

    app.delete('/availableCarParks', NoMethodController)

    app.post('/bookCarParks', BookCarParkController)

    app.get('/bookCarParks', NoMethodController)

    app.put('/bookCarParks', NoMethodController)

    app.delete('/bookCarParks', NoMethodController)
}

module.exports = routes
