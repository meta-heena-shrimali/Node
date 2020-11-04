const http = require('http');

//Create server object
http.createServer((req, res) => {
    //write response
    res.write('Hello World');
    res.end()
}).listen(5000, () => console.log('Server Running'));


//-------- in console it shows that server is running..
//-------- when we hit localhost:5000 it says hello world..