const mongoose = require("mongoose");
const uri =
  "mongodb+srv://imashu001:imashu001@cluster0.nqzv8.mongodb.net/21twelveInteractive?retryWrites=true&w=majority";

// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
