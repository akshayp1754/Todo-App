const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
})

userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

userSchema.virtual('initials').get(function(){
    return `${this.firstName[0]}${this.lastName[0]}`
})

module.exports.User = mongoose.model('User', userSchema)