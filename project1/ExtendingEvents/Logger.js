
const EventEmitter = require('events')


class Logger extends EventEmitter {
    log(message) {
        console.log(message)

        // Raising an event
        this.emit('messageEvent', { id: 1, url: 'http://' })
    }
}

module.exports = Logger