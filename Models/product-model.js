
const mongoose = require("mongoose");
require("../config/mongoose-connection")
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

module.exports= mongoose.model("product", productScheme);