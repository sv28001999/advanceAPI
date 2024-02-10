const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: [20, 'Name must be less than 20 character'],
        trim: true,
        required: [true, 'Name must be required']
    },
    completed: {
        type: Boolean,
        default: false
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    }
})

module.exports = mongoose.model('Task', TaskSchema)