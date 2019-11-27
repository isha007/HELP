const express = require('express');
const router = express.Router()
const {Student} = require('../model/emp');
var exec = require('child_process').exec;

router.get('/api/get_details',async(req,res)=>{
    // res.send("Hello");
    console.log("Hello")
    const result= await Student.find({}, function (err, test) {
        if (err) {
          res.send(err);
        }
        else {
        }
        // console.log(test);
        // res.send(test)
      });
    // test=[];
    // for (i in result){
    //     test.push(result[i]);
    // }
    console.log(result)
    res.send(result)
});

module.exports = router