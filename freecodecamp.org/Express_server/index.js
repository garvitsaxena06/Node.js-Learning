const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World! \nThis is Garvit Saxena...Full stack web developer!!!")
})  

app.get('/example', (req, res) => {
    res.send("This is example page")
})

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params)         //This is what the user passes to the endpoints   localhost:3000/example/garvit/19
    console.log(req.query)          //This is after the question mark   localhost:3000/example/garvit/19?tutorial=freecodecamp
    res.send(req.params.name + " : " + req.params.age)
})

app.listen(3000)
console.log("Listening to port 3000!")