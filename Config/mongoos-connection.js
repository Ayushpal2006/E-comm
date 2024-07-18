const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecom")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))

module.export = mongoose.connection;