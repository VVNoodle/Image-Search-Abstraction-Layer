const express = require("express");
const router = express.Router();
const axios = require("axios");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Result = require("../models/result");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/imageSearch');

router.get("/imagesearch/", (req, res) => {
    const query = req.query.q;
    const { offset } = req.query;
    const newResult = new Result({
        term: query,
        when: new Date()
    });
    newResult.save()
        .then(() => {
            axios.get(`https://pixabay.com/api/?key=${process.env.KEY}&q=${query}&per_page=${offset}`)
                .then((searchResults) => {
                    res.send(searchResults.data.hits);
                });
        });
});

router.get("/latest/imagesearch/", (req, res) => {
    Result.find({}, { _id: 0, when: 1, term: 1 })
        .then((history) => {
            res.send(history);
        });
});

module.exports = router;