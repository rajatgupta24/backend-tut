const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./routes/routes")
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/v1/todos", router);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
