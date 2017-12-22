const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    term: String,
    when: Date
});

const result = mongoose.model("result", resultSchema);

module.exports = result;