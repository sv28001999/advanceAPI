const path = require('path')
const fs = require('fs')

const logger = (req, res, next) => {
    console.log(req.method, req.url)
    next()
}

module.exports = logger