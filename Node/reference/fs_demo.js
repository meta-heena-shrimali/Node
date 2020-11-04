const fs = require('fs');
const path = require('path');


//create folder------- by default its async
/* fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
    if (err) throw err;
    console.log('Folder created...');
}); */
///////////// using arrow function 

// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello There !!', (err) => {
//     if (err) throw err;
//     console.log('File Written To...');
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//         'I am learning nodeJs', (err) => {
//             if (err) throw err;
//             console.log('File Written To...');
//         });
// });

//Read File

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename File

fs.rename(path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloNew.txt'), (err) => {
        if (err) throw err;
        console.log('File Renamed !!!');
    });