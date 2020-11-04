/*const person = {
    name: 'Heena Shrimali',
    age: 23
}

module.exports = person; */
//Module Wrapper Function
//(function(exports,require,module,__filename, __dirname)){

//})

console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(`Hi... ${this.name}`);
    }
}
module.exports = Person;