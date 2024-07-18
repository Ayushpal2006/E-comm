const mongoose = require("mongoose");



const ownerScheme = mongoose.Schema({
    fullName:{
        type:String,
        minLength:3
    },
    email:String,
    passWord:String,
    product:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String
})

module.export= mongoose.model("owner", ownerScheme);