var http = require('http');
var moment = require('moment');

function serverCallBack(req, res) {
    res.writeHead(200, { 'Content-Type': 'Text/Plain' });
    let param = " Params Passed :";
    let begin_time = moment("10:00", "HH:mm"); // works in 24 hr format
    let end_time = moment("22:00", "HH:mm");

    //process.argv[2] ---> 0= node ,1= app.js , param starts from 2 
    let i = 0;
    process.argv.forEach(element => {
        param += " " + element + " ,";
    });

    param += "\n Welcome to our Page ... \n ";
    param += " Current time : " + moment().format("HH:mm") + "\n";
    param += " Working Hours : " + begin_time.format("HH:mm") + " to " + end_time.format("HH:mm");
    //let Current = moment("23:00", "HH:mm");
    let begin_diff = begin_time.diff(moment(), 'minutes');
    //begin_diff = begin_time.diff(Current, 'minutes');
    let end_diff = moment().diff(end_time, 'minutes');
    //end_diff = Current.diff(end_diff, 'minutes');
    //param += "\n time : " + begin_diff + " , " + end_diff + " ....\n";
    if (begin_diff > 0) {
        param += "\n Please come back in " + begin_diff + " minutes..";
    } else if (end_diff > 0) {
        param += "\n Please come back tomorrow..";
    }

    res.end(param);
}

http.createServer(serverCallBack).listen(9000);