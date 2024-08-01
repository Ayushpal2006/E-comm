const mongoose = require("mongoose")
require("../config/mongoose-connection")

// mongoose.connect("mongodb://localhost:27017/configggggg", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const ownerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    minLength: 3
  },
  email: String,
  passWord: String,
  product: {
    type: Array,
    default: []
  },
  picture: String,
  gstin: String
});

module.exports = mongoose.model("Owner", ownerSchema);
