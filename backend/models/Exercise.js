const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
    exercise: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;