const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.listen(4000 , () => {
    console.log("Server running at port 4000");
})