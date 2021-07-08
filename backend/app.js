const express = require("express");
const app = express();
require("dotenv").config();
require("./config/mongoose");
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const cors = require("cors");
app.use(cors());
//auth

//Routes
app.use(express.json());
app.use(userRoutes);
app.use(adminRoutes)

//LISTENER
app.listen(8000, () => {
  console.log("Server running on port ::: ", 8000);
});
