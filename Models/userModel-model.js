const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecom")

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
    isAdmin:Boolean,
    order:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})

module.export= mongoose.model("users", userScheme);