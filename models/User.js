const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String, required: true},
    firstName:{type:String, required: true},
    lastName:{type:String, required: true},
    token: {type:String},
    verified: {type: Boolean, default: false}

})

module.exports = model("User", userSchema, "Users")