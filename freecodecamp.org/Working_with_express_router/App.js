const express = require('express')

const app = express()
const PORT = 3000

const people = require('./routes/people')

app.use('/people', people)

// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening to port ${ PORT }`)
    }
})