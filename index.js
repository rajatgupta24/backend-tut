const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./routes/routes");
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/v1/todos", router);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

start();
