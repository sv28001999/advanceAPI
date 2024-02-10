const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUndefinedTopology: true
        })
}

module.exports = connectDB