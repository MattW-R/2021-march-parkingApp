// const emailValidator = (email) => {
//     const result = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
//     return result
// }
//
// module.exports = emailValidator

// const express = require('express');
// const { check } = require('express-validator');
// const app = express();
//
// app.use(express.json())
// app.post('/form', [
//     check('name').isLength({ min: 3 }).trim().escape(),
//     check('email').isEmail().normalizeEmail(),
//     check('age').isNumeric().trim().escape()
// ], (req, res) => {
//     const name  = req.body.name
//     const email = req.body.email
//     const age   = req.body.age
// })

const { check } = require('express-validator');

const emailValidator = (email) => {
    const results = check('email').isEmail(email).normalizeEmail(email)
    console.log(results)
    return results
}

module.exports = emailValidator
