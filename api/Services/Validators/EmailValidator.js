const jsonResponse = require('../JsonResponseService')

const EmailValidator = (email) => {
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.value.match(validEmailRegex)) {
        return email
    } else {
        false

    }
}

module.exports = EmailValidator

//input of an email string
// output of a bolean