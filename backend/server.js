const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const app = express();

const mongoURI = process.env.Mongo;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) =>
    console.error("MongoDB connection error:", error)
  );

app.listen(4000 , () => {
    console.log("Server running at port 4000");
})