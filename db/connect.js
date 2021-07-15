const mongoose = require("mongoose");

const connectDB = (URL) => {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;
