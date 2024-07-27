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

  const schemeRoutes = require('./routes/schemeRoutes');
  app.use('/api/schemes', schemeRoutes);
  const beneRoutes = require('./routes/beneRoutes');
  app.use('/api/beneusers', beneRoutes);
  const adminRoutes = require('./routes/adminRoutes');
  app.use('/api/admins', adminRoutes);
  const flwRoutes = require('./routes/flwRoutes');
  app.use('/api/flwusers', flwRoutes);

app.listen(4000 , () => {
    console.log("Server running at port 4000");
})