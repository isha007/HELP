
const express = require('express');
const router = express.Router()
const {Employee} = require('../model/emp');
var exec = require('child_process').exec;

// var result=String;
router.get('/api/getcpu',async(req,res)=>{
    
//     const result= await Employee.find({},{ip:1,_id:0});
//     windowsmachines=['10.0.6.9', '10.0.6.10'];
//     res.send(result)
//     // for (i in result){
//     //     windowsmachines.push(result[i].name);
//     // }
//     console.log(result)


//     function Windows(windowsmachines) {
//         // windowsmachines.forEach(async (ip) => {
//          if(process.platform === 'win32'){
//          for (const ip of windowsmachines){
//          command = `powershell.exe "(Get-WmiObject Win32_Processor -ComputerName `+ip+` | Measure-Object -Property LoadPercentage -Average).Average"`;
 
//          exec(command, function(error, stdout, stderr) {
//              if(error) {
//                  errorCallback(error);
//                  return;
//              }
//              var cpu_value = stdout;
//              var current_datetime = new Date();
//              let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() + ":" + current_datetime.getMilliseconds(); 
 
//              //console.log(cpu_value);
//              cpu_value = cpu_value.replace("\r","");
//              cpu_value = cpu_value.replace("\n","");
//              tmpJson = {
//                  "date": formatted_date,
//                  "ip": ip,
//                  "CPU": cpu_value,
//              }
//              var query = {ip:ip}
//              var myobj = {$set:{ date: date, cpu:cpu_value}};
//              Employee.update(query,myobj, function(err, res) {
//                 if (err) throw err;
//                 console.log("1 document updated");
//             });
//              //console.log('CPU USAGE of '+ip+' is ' +stdout);
//              console.log(tmpJson);
//          });
        
     
//          //console.log(tmpJson);
//  }  
//  }
//  }
//  Windows(windowsmachines, async function(hosts) {

//     for (var item of hosts) {
//       //stream.write(JSON.stringify(item));
//       var query ={ip:ip}
//       var myobj = { ip: item.ip, status: item.status };
//       await Employee.updateOne(myobj, function(err, res) {
//           if (err) throw err;
//           console.log("1 document inserted");
//       });
//           console.log(JSON.stringify(item));
  
//     }
// })

    // const user ={
    //     name: 'hello',
    //     ip:'10.180.20.38'
    // }
    // const temp = user.ip
    // res.send(temp)



})



module.exports = router