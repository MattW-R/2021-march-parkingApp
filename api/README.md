#Using the API

##/CarParks
###GET

- Retrieves all the car parks data from the carParks collection in the database
- Data format - sends an array of:
    - `{ '_id': '1', 'name': 'example', 'location': 'Avon Street, Bath BA1 1UF', 'totalSpaces': '1', 'hourlyRate': '1.6' }`
- Returns success true / false:
    - if the data are received successfully
        - `{'success':true, 'message':'', 'status': 200, 'data':[]}`
    - if the data are not received successfully
        - `{'success':false, 'message':'', 'status': 500, 'data':[]}`
    - if there are not data in the database
        - `{'success':false, 'message':'No car parks found!', 'status': 405 'data':[]}`

###POST

- This route does not support POST requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

###PUT

- This route does not support PUT requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

###DELETE

- This route does not support DELETE requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`