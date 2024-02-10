const express = require('express')
const app = express()
const task = require('./routes/task')
const connectDB = require('./db/connect')
const logger = require('./middlewares/logger')
const notFound = require('./middlewares/errorPage')
const handleError = require('./middlewares/handleError')
require('dotenv').config()

const port = process.env.PORT || 2800

const start = async () => {
    try {
        // await connectDB(process.env.MONGO_DB_URI)
        await connectDB("mongodb+srv://sv2800:Shivam%402800@atlascluster.keylavm.mongodb.net/task-manager?retryWrites=true&w=majority")
        app.listen(port, console.log(`Server is hosted at port ${port}..`))
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