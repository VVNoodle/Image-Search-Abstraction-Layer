require("dotenv/config");
const express = require("express");
const app = express();
const router = require('./routes/image');

const axios = require("axios");

app.get("/", (req, res) => {
  res.send("<h1>Hey use</h1> <h2><ul><li>/api/imagesearch/?q=WhatYouWannaSearch&offset=numberOfResultsYouWannaSee to search for an image.</li> <li>/api/latest/imagesearch for image search history</li></h2>")
})

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});
