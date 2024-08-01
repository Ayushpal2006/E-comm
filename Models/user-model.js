const mongoose = require("mongoose");
require("../config/mongoose-connection")

const userScheme = mongoose.Schema({
    fullName:{
        type:String,
        minLength:3
    },
    email:String,
    passWord:String,
    cart:{
        type:Array,
        default:[]
    },
    order:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})

module.exports= mongoose.model("users", userScheme);