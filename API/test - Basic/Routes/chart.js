
const express = require('express');
const router = express.Router()
const {Employee} = require('../model/emp');


router.get('/api/chart',async(req,res)=>{
    const result= await Employee.find({"status":"Up"},{"status":0,"_id":0}, function (err, test) {
        if (err) {
          res.send(err);
        }
        else {
        }
        console.log(test);
      });
    // test=[];
    // for (i in result){
    //     test.push(result[i]);
    // }
    res.send(result)
})


module.exports = router