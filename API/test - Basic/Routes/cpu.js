const express = require('express');
const router = express.Router()
const {Employee} = require('../model/emp');
var exec = require('child_process').exec;

router.get('/api/cpu',async(req,res)=>{
// console.log("test");
// res.send("test")
var windowsmachines=[];
const result= await Employee.find({},{ip:1,_id:0});
    // windowsmachines=['10.0.6.9', '10.0.6.10'];
    res.send(result)
    for (i in result){
        windowsmachines.push(result[i].ip);
    }
    console.log(windowsmachines)


    function Windows(windowsmachines) {
        // windowsmachines.forEach(async (ip) => {
         if(process.platform === 'win32'){
         for (const test of windowsmachines){
         command = `powershell.exe "(Get-WmiObject Win32_Processor -ComputerName `+test+` | Measure-Object -Property LoadPercentage -Average).Average"`;
 
         exec(command, async function(error, stdout, stderr) {
             if(error) return ;
             var cpu_value = stdout;
             var current_datetime = new Date();
             let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() + ":" + current_datetime.getMilliseconds(); 
 
             //console.log(cpu_value);
             cpu_value = cpu_value.replace("\r","");
             cpu_value = cpu_value.replace("\n","");
             tmpJson = {
                 "date": formatted_date,
                 "ip": test,
                 "CPU": cpu_value,
             }
             var query = {ip:test}
             var myobj = {$set:{ date: formatted_date, cpu:cpu_value}};
             Employee.updateOne(query,myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
            });
             //console.log('CPU USAGE of '+ip+' is ' +stdout);
             console.log(tmpJson);
         });
        
     
         //console.log(tmpJson);
 }  


// ####MeMORY


for (const test2 of windowsmachines){
    Memory = `powershell.exe "(((get-WmiObject -Class Win32_operatingsystem -ComputerName `+test2+`).TotalVisibleMemorySize - (get-WmiObject -Class Win32_operatingsystem -ComputerName `+test2+`).FreePhysicalMemory )/ (get-WmiObject -Class Win32_operatingsystem -ComputerName `+test2+`).TotalVisibleMemorySize )*100"`;
    //FreeMemory = `powershell.exe "(Get-WmiObject -ComputerName `+ip+` -Class Win32_operatingsystem).FreePhysicalMemory"`
    //console.log(TotalMemory);
    console.log(Memory);
    //setTimeout

    exec(Memory, async function(error, stdout, stderr) {
        if(error)  return;
        var memory_usage = stdout;
        //console.log(total_memory);
        memory_usage = memory_usage.replace("\r","");
        memory_usage = memory_usage.replace("\n","");
        var current_datetime = new Date();
        let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() + ":" + current_datetime.getMilliseconds();

        //total_memory = (total_memory/1048576);
        tmpJson = {
            "date": formatted_date,
            "ip": test2,
            "Total_Memory": memory_usage,
        }
        var query = {ip:test2}
        var myobj = {$set:{ date: formatted_date, memory:memory_usage}};
        Employee.updateOne(query,myobj, function(err, res) {
           if (err) throw err;
           console.log("1 Memory updated");
       });
        console.log(tmpJson);
    });

}


// ####Swap

// for (const ip of windowsmachines){
//     command = `systeminfo /s `+ip+` | find "Virtual Memory"`;
//     //console.log(command);
//     //setTimeout
//     exec(command, function(error, stdout, stderr) {
//         if(error) {
//             errorCallback(error);
//             return;
//         }
//         //var swap_value = [];
//         //console.log(swap_value);
//         //swap_value = stdout.split("\n");
//         var tmp = stdout.replace(/,/g, '');
//         tmp = tmp.match(/[^ ,]+/g).join(',');
//         console.log(tmp); 
//         var max = shell.grep('Max', '-l', 'tmp');
//         //var max = tmp.match('Max');
//         console.log(max);
        
//         tmpJson = {
//             "ip": ip,
//             //"Swap_space": ,
//         }
//         console.log(tmpJson);
//     });

//     //console.log(tmpJson);
// }  




 }
 }
 Windows(windowsmachines)

    // const user ={
    //     name: 'hello',
    //     ip:'10.180.20.38'
    // }
    // const temp = user.ip
    // res.send(temp)
});


module.exports = router