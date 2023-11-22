const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    todo: String,
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    
})

module.exports.Todo = mongoose.model('Todo', todoSchema)