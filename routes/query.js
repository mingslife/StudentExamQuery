var express = require('express'),
    http = require('http');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var xh = req.body.xh;
  console.log("XH: " + xh);
  // res.send('respond with a resource');
  var content = "callCount=1\n"+
                "windowName=c0-param0\n"+
                "c0-scriptName=MyService\n"+
                "c0-methodName=findMapByStudentExamQuery\n"+
                "c0-id=0\n"+
                "c0-e1=string:examStuDetaileID\n"+
                "c0-e2=string:KCMC\n"+
                "c0-e3=string:courseName\n"+
                "c0-e4=string:startTime\n"+
                "c0-e5=string:stopTime\n"+
                "c0-e6=string:examClassRoomID\n"+
                "c0-e7=string:examClassRoomNum\n"+
                "c0-e8=string:LH\n"+
                "c0-e9=string:semesterID\n"+
                "c0-e10=string:XH\n"+
                "c0-e11=string:XM\n"+
                "c0-e12=string:campusCode\n"+
                "c0-param0=array:[reference:c0-e1,reference:c0-e2,reference:c0-e3,reference:c0-e4,reference:c0-e5,reference:c0-e6,reference:c0-e7,reference:c0-e8,reference:c0-e9,reference:c0-e10,reference:c0-e11,reference:c0-e12]\n"+
                "c0-param1=string:semesterID%3D'20150827161917445'%20and%20xh%3D'" + xh + "'%20and%20isPublish%3D1\n"+
                "c0-param2=boolean:false\n"+
                "c0-param3=string:startTime\n"+
                "c0-param4=string:asc\n"+
                "batchId=2\n"+
                "instanceId=0\n"+
                "page=%2FstudentExamQueryQuickManager.jsp%3FstudentOrTeacherID%3D" + xh + "\n"+
                "scriptSessionId=ILsMFFuJqc0NOWnVbLbg1ga6knl/Galarnl-ngxXuA8Ui";
  var options = {
    hostname: 'kw.cqut.edu.cn',
    port: 80,
    path: '/dwr/call/plaincall/MyService.findMapByStudentExamQuery.dwr',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    }
  };
  var sendReq = http.request(options, function(sendRes) {
  	// console.log('STATUS: ' + sendRes.statusCode);
   //  console.log('HEADERS: ' + JSON.stringify(sendRes.headers));
    sendRes.setEncoding('utf8');
    sendRes.on('data', function (chunk) {
      var data = eval(chunk.substring(90, chunk.length - 10));
      // console.info(data);
      res.writeHead(200, {"Content-Type": "application/json; charset=UTF-8"});
      res.end(JSON.stringify(data));
    });
  });
  // console.log('content: ' + content);
  sendReq.write(content);
  sendReq.end();
  // res.writeHead(200, {"Content-Type": "application/json; charset=UTF-8"});
  // res.end(JSON.stringify({}));
});

module.exports = router;
