
const EventEmitter = require('events')
const emitter = new EventEmitter()


// Registering an event
emitter.on('messageLogged', (arg) => {
    console.log('Listen Event!', arg)
})
emitter.on('logging', (arg) => {
    console.log('Logging called!', arg)
})


// Raising an event
emitter.emit('messageLogged', { id: 1, url: 'http://' })
emitter.emit('logging', { data: "this is my secret message" })
