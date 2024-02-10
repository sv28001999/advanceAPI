const mongoose = require('mongoose')
const Task = require('../models/Task')
const asyncWrapper = require('../middlewares/asyncWrapper')
const { createCustomError } = require('../error/customApiError')

const getAllTask = asyncWrapper(async (req, res) => {
    const allTask = await Task.find({})
    res.status(200).json({ allTask })
})

const getSingleTask = asyncWrapper(async (req, res, next) => {
    // try {
    console.log("task not found1");
    const taskId = new mongoose.Types.ObjectId(req.params.id);
    const task = await Task.findOne({ _id: taskId })
    if (!task) {
        console.log("task not found");
        // const error = new Error('Page not found')
        // error.status = 404
        return next(createCustomError("Page not found", 404))
    }
    res.status(200).json({ task })
    // }
    // catch (err) {
    //     res.status(400).json({ msg: err })
    // }
})

const createTask = asyncWrapper(async (req, res) => {
    // try {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
    if (!task) {
        console.log("task not found");
        // const error = new Error('Page not found')
        // error.status = 404
        return next(createCustomError("Page not found", 404))
    }
    // }
    // catch (err) {
    //     res.status(500).json({ msg: err.message });
    // }
})

const updateData = asyncWrapper(async (req, res) => {
    // try {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        runValidators: true,
        new: true
    })
    if (!task) {
        console.log("task not found");
        // const error = new Error('Page not found')
        // error.status = 404
        return next(createCustomError("Page not found", 404))
    }
    res.status(200).json(req.body)
    // }
    // catch (err) {
    //     res.status(500).json({ msg: err.message });
    // }
})

const deleteData = asyncWrapper(async (req, res) => {
    // try {
    const taskId = req.params.id
    const task = await Task.findOneAndDelete({ _id: taskId }, {
        runValidators: true,
        new: true
    })
    if (!task) {
        console.log("task not found");
        // const error = new Error('Page not found')
        // error.status = 404
        return next(createCustomError("Page not found", 404))
    }
    res.status(200).json(task)
    // }
    // catch (err) {
    //     res.status(500).json({ msg: err.message })
    // }
})

module.exports = {
    getAllTask,
    getSingleTask,
    createTask,
    updateData,
    deleteData
}
