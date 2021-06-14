let unsuccessful = () => {
    return {
        "success": false,
        "message": "",
        "status": "",
        "data": []
    }
}

let successful = () => {
    return {
        "success": true,
        "message": "",
        "status": 200,
        "data": []
    }
}

module.exports.unsuccessful = unsuccessful
module.exports.successful = successful