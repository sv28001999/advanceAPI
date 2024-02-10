const express = require('express')
const {
    getSingleTask,
    getAllTask,
    createTask,
    updateData,
    deleteData
} = require('../controllers/taskController')

const router = express.Router()

router.route('/getData').get(getAllTask)
router.route('/getData/:id').get(getSingleTask)
router.route('/addData').post(createTask)
router.route('/updateData/:id').patch(updateData)
router.route('/deleteData/:id').delete(deleteData)

// difference between put and patch method
// put - replace whole object with new object means it remove all previous data from object and create new object which we pass in body
// patch - replace partial data in object and other data remain same

module.exports = router