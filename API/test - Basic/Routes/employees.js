
const express = require('express');
const router = express.Router()
const {Employee} = require('../model/emp');

// var result=String;
router.get('/api/emp',async(req,res)=>{
    const result= await Employee.find({},{ip:1,_id:0});
    test=[];
    // res.send(result)
    for (i in result){
        test.push(result[i].ip);
    }
    console.log(test)
    res.send(test)

    // const user ={
    //     name: 'hello',
    //     ip:'10.180.20.38'
    // }
    // const temp = user.ip
    // res.send(temp)



})


module.exports = router