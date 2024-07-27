const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const bodyParser = require("body-parser");
const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}));
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
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json({ limit: '500mb' }));
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