const express = require('express');
require("dotenv/config");
const app = express();

const PORT = process.env.PORT || 5000;

// middleWare functions
const mware = (req, res, next) => {
  next(req.method, req.path, req.ip);
};

const next = (method, path, ip) => {
  console.log(`${method} ${path} - ${ip}`)
};

const getTime = () => {
  return (new Date());
};

app.get("/new-user", (req, res, next) => {
  req.user = getTime();
  next();
},(req, res) => {
  res.send(req.user);
});

app.get('/', (req, res) => {
  mware(req, res, next);
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
  res.json({
    "message": "Hello World",
  });
});



app.get("/users/:user/photos/:photo", (req, res) => {
  res.send(req.params)
});

// middleWares
app.use('/public', express.static(process.cwd() + '/public'));

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.use(getTime);
app.use(mware);

// Routes
app.post("/name", (req, res) => {
  let first = req.body.first;
  let last = req.body.last;
  res.json({
    name: `${first} ${last}`
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on the port: ${PORT}.....`);
});
