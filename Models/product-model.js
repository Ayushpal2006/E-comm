
const mongoose = require("mongoose");

// connect to db previously

const productScheme = mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount :{
        type: Number,
        default:0
    },
    bgColor:String,
    panelColor:String,
    textColor:String
})

module.export= mongoose.model("product", productScheme);