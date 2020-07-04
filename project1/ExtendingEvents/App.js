
const EventEmitter = require('events')
const Logger = require('./Logger')

const logger = new Logger()

// Registering an Event
logger.on('messageEvent', (arg) => {
    console.log('ListenEvent!', arg)
})

logger.log('message')