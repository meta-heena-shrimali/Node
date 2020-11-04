// var calc = require('./calc.js')
//     //result = calc(4, 5)
// result = calc.add(4, 5)
// sub = calc.sub(9, 2)
// console.log("The output is :" + result + " sub = " + sub);

var fs = require('fs')

// fs.readFile('calc.js', 'utf8', (err, data) => {
//     console.log(data)
// })

// fs.writeFile('calc1.js', 'console.log("done")', (err) => {
//     console.log("data saved")
//     fs.appendFile('calc1.js', 'console.log("appended")', (err) => {
//         console.log("data appended")
//     })
// })

//deleting file
fs.unlink('calc1.js', (err) => {
    console.log('File Deleted')
})