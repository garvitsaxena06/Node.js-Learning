
const EventEmitter = require('events')  

class Person extends EventEmitter {
    constructor(Name) {
        super()
        this.name = Name
    }
}

const mike = new Person('Mike')
const garvit = new Person('Garvit')

mike.on('callMyName', () => {
    console.log("My name is", mike.name)
})

garvit.on('callMyName', () => {
    console.log("My name is", garvit.name)
})

mike.emit('callMyName')
garvit.emit('callMyName')