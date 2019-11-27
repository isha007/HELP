
var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const {Employee} = require('../model/emp');
const cors = require('cors');
// app.use(bodyParser.urlencoded({ extended: true }));
var exec = require('child_process').exec;
var bodyParser = require('body-parser');

var app = express();
// express.use(bodyParser.json());
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

router.post('/api/host',async(req,res)=>{
    var addresses= [req.body.ip];
    console.log(addresses)
    res.send(addresses);
    // var addresses = [
    //             '10.0.6.0-255' 
    //     ];
function getIP(addresses, successCallback, errorCallback) {
        var command = "nmap -sn -oG - ";
        if(addresses && Array.isArray(addresses)) {
            command = `${command} ${addresses.join(' ')}`;
        }
        exec(command, function(error, stdout, stderr) {
            if(error) {
                errorCallback(error);
                return;
            }
            var hosts = [];
                var status = [];
                var tmpArr = stdout.split("\n");
                for (x in tmpArr) {
                    if(tmpArr[x].indexOf('Host') !== -1) {
                        tmpArr[x] = tmpArr[x].substring(6);
                        
                        tmpArr[x] = tmpArr[x].replace("(","");
                        tmpArr[x] = tmpArr[x].replace(")","");
                        tmpArr[x] = tmpArr[x].replace("\r","");
                        var tmpSplit = tmpArr[x].split(" ");
                        var tmpJson = {
                            "ip":   tmpSplit[0],
                            "status": tmpSplit[2],
                        }
                        hosts[x] = tmpJson;                 
                        
                    if(tmpArr[x++].indexOf('Status') === -1) {
                            status[x] = "Unknown";
                        }
                    }
                }
                hosts = hosts.filter(function(n){return n});
                successCallback(hosts);
        });
    }

    getIP(addresses, async function(hosts) {

        for (var item of hosts) {
          //stream.write(JSON.stringify(item));
          var myobj = { ip: item.ip, status: item.status };
          await Employee.insertMany(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
          });
              console.log(JSON.stringify(item));
      
        }
        
        console.log("done");
      }, function(error) {
         console.log(error);
      });

    // const result= await Employee.find({},{name:1,_id:0});
    // test=[];
    // // res.send(result)
    // for (i in result){
    //     test.push(result[i]);
    // }
    // res.send(test)
    // console.log(test)
    
})


module.exports = router