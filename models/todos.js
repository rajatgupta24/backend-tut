const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please provide the task"
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Todo", todoSchema);
