//const person = require('./person');
//console.log("Hi..." + person.name);


//const Person = require('./person');
//const p1 = new Person('Heena', 23);
//p1.greetings();

/* const rate = 7.1 / 100;
const amountAdded = 120000;
var principle = 0;
var interestAmount = 0;
var deduction = 0;
for (let time = 1; time <= 15; time++) {
    deduction = 0;
    interestAmount = 0;
    principle = principle + amountAdded;
    console.log("********** Year : " + time + "**********");
    console.log("Principle : " + principle);
    let cal = Math.pow((1 + (rate / 4)), 4);

    interestAmount = principle * (cal);
    console.log("Interest : " + (interestAmount - principle));
    if (principle > 500000 && principle <= 1000000) {
        deduction = principle * 20 / 100;
    } else if (principle > 1000000) {
        deduction = principle * 30 / 100;
    }
    console.log("Deduction : " + deduction);
    principle = principle - deduction;
    console.log("PrincipleD : " + principle);
    principle = interestAmount - deduction;
    console.log("Total Amount : " + interestAmount);

}*/

// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('message', (data) => console.log('Called listener: ', data));
// logger.log('Hello World', 'param');

const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res) => {
    //console.log(req.url);
    // if we change response it wont reflect we need to start server again
    // so here is where nodemon comes in role
    // to use nodemon since we havn't installed it globally
    // we need to add it to dev script in package.json
    // we add node index to start as we do not want to use nodemon in deployment
    //then we need to start npm in dev mode by : npm run dev
    // nodemon continiously monitor for changes and we can see it by reloading page
    // no need for server restarting
    // if (req.url === '/') {
    //     //res.writeHead(200, { 'Content-Type': 'text/html' });
    //     //res.end('<h1>Home Page</h1>');
    // }
    // if (req.url === '/') {
    //     //res.writeHead(200, { 'Content-Type': 'text/html' });
    //     //res.end('<h1>Home Page</h1>');
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });

    // }
    // if (req.url === '/about') {
    //     //res.writeHead(200, { 'Content-Type': 'text/html' });
    //     //res.end('<h1>Home Page</h1>');
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });

    // }
    // if (req.url === '/api/users') {

    //     const users = [
    //         { name: 'Bob Smith', age: 23 },
    //         { name: 'Johm Simpson', age: 37 },
    //         { name: 'Steve Thomas', age: 27 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/JSON' });
    //     res.end(JSON.stringify(users));

    // }

    //build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ?
        'index.html' : req.url);

    //Extension of file
    let extname = path.extname(filePath);

    //Initial Content Type
    let contentType = 'text/html';

    //check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });

            } else {
                // some server error like 500
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });


});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));