const express = require('express');
require("dotenv/config");
const app = express();

const mware = (req, res, next) => {
  console.log("I'm a middleWare...");
  next(req.method, req.path, req.ip);
};

const next = (method, path, ip) => {
  console.log(`${method} ${path} - ${ip}`)
};

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  mware(req, res, next);
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (req, res) => {
  res.json({
    "message": "Hello World",
  });
})

app.get("/user", (req, res, next) => {
  req.time = new Date().toDateString();
  next(req.method, req.path, req.ip);
}, (req, res) => {
  res.json({time: req.time});
})

app.use('/public', express.static(process.cwd() + '/public'));
app.use(mware);

app.listen(PORT, () => {
  console.log(`Server is running on the port: ${PORT}.....`);
});
