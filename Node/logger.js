const EventEmitter = require('events');
const uuid = require('uuid');

//console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg, param) {
        //call event ----->>> here it is using the same myEmitter object of the class MyEmitter
        this.emit('message', { id: uuid.v4(), msg, param });
    }
}

module.exports = Logger;