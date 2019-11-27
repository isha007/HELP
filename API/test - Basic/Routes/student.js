const express = require('express');
const router = express.Router()
const {Student} = require('../model/emp');
var exec = require('child_process').exec;

router.post('/api/student',async(req,res)=>{
console.log("test");
res.send("test")
var name = req.body
// name.
console.log(name)
// var query = {ip:test2}
var student1 = new Student({ enr_no : name.enr_no,
    std: name.std,  
    div: name.div,  
    first_name:name.first_name,
    last_name:name.last_name,
    email:name.email,
    birth_date:name.birth_date,
    admission_date:name.admission_date,
    address:name.address,
    city:name.city,
    country:name.country,
    postal_code:name.postal_code,
    f_first_name:name.f_first_name,
    f_last_name:name.f_last_name,
    f_birth_date:name.f_birth_date,
    f_blood_group:name.f_blood_group,
    f_illness:name.f_illness,
    m_first_name:name.m_first_name,
    m_last_name:name.m_last_name,
    m_birth_date:name.m_birth_date,
    m_blood_group:name.m_blood_group,
    m_illness:name.m_illness});


    student1.save(function(err,data){
        if (err) console.log(err);
        console.log("saved")
    })


    // Student.insertMany(myobj,function(err,res){
    //     if (err) throw err;
    //     console.log(name.first_name)
    //     console.log("Updated")
    // });

// Student.insert(myobj,function(err, res) {
//     if (err) throw err;
//     console.log("1 Memory updated");
// });


});

// app.post("/api/SaveUser",function(req,res){   
//     var mod = new model(req.body);  
//     mod.save(function(err,data){  
//       if(err){  
//         res.send(err);                
//        }
//        else{        
//              res.send({data:"Record has been Inserted..!!"});  
//          }  
//     });  
//     })  


module.exports = router