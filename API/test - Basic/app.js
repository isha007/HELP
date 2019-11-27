
const emp = require('./Routes/employees');
const host = require('./Routes/getHost');
const chart = require('./Routes/chart');
const cpu = require('./Routes/cpu');
const student = require('./Routes/student')
const save = require('./Routes/saveUser');
const get_details = require('./Routes/get_details')
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const fs = require('fs');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello");
    console.log("Hello")
});
app.post('/api/student',student)
app.get('/api/get_details',get_details)
app.get('/api/emp',emp)
app.post('/api/host',host)
app.get('/api/cpu',cpu)
// router.post('/api/SaveUser",save)

    mongoose.connect("mongodb://localhost:27017/HELP",{useNewUrlParser: true})
    .then(console.log('Connected to MongoDb...'))
    .catch(err => console.error('Error with the connection to Mongo DB...'))


    const port = process.env.PORT || 3000;
    app.listen(port,()=> console.log(`Listening to port ${port}`));

