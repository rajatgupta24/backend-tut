const express = require('express');
// const mongoose = require('mongoose');
require("dotenv/config");

const app = express();
// const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const PORT = process.env.PORT || 5000;


// // Database Schema
// const personSchema = new Schema({
//   mane: {type: String, required: true}, 
//   age:  Number,
//   food: [String],
// });

// const Person = mongoose.model('Person', personSchema);

// // fuinction to create a person
// let person1 = (done) => {
//   new Person ({
//     name: "Rajat",
//     age: 20,
//     food: ["pav bhaji", "chole bhature"]
//   });

//   if (error) return error;
//   done(null, res) 
// }

// // fuinction to create many people at once
// let createManyPeople = (array, done) => {
//   Person.create(array, (err, data) => {
//     if (err) console.log(err);
//     done(null, data);
//   })
// };

// // fuinction to find a person in database
// let findPerson = (personName, done) => {
//   Person.find({ name: personName }, (err, data) => {
//     if (err) console.log(err);
//     done(null, data);
//   })
// };

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


// Get Routes
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


// Post Routes
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
