require("dotenv/config");
const express = require("express");
const app = express();
const router = require('./routes/image');

const axios = require("axios");

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});
