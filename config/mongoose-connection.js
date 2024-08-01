const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

// export DEBUG=development:mongoose
// Get MongoDB URI from config
const mongoURI = config.get("MONGODB_URI");



// Connect to MongoDB
mongoose.connect(`${mongoURI}/backend`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Handle connection events
mongoose.connection.on("connected", () => {
  dbgr("Mongoose connected to " + `${mongoURI}/backend`);
});



mongoose.connection.on("error", (err) => {
  dbgr("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  dbgr("Mongoose disconnected");
});

module.exports = mongoose.connection;
