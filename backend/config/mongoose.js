const mongoose = require("mongoose");

// connection to database
mongoose.connect("mongodb://localhost/21Twelve", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
},);

module.exports = db;
