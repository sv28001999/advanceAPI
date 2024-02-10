const { CustomAPIError } = require('../error/customApiError')

const handleError = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.status).json({ msg: err.message })
    }
    console.log(err);
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = handleError