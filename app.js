const express = require('express')
const app = express()
const task = require('./routes/task')
const connectDB = require('./db/connect')
const logger = require('./middlewares/logger')
const notFound = require('./middlewares/errorPage')
const handleError = require('./middlewares/handleError')
require('dotenv').config()

const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB_URI)
        app.listen(2800, console.log("Server is hosted at port 2800..."))
    }
    catch (err) {
        console.log(err)
    }
}

// middlewares
app.use(express.static("public"))
app.use(logger)
app.use(express.json())

app.use('/api/v1', task)

app.use(notFound)
app.use(handleError)

// start server
start()