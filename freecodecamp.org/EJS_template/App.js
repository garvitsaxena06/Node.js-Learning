const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use('/public', express.static(path.join(__dirname, '/views')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello User! To see some fuctionality change the endpoint to something, say /hello')
})

app.get('/:userQuery', (req, res) => {
    res.render('index', {
        data : {
            userQuery : req.params.userQuery,
            searchResults : ['item1', 'item2', 'item3'],
            loggedIn : true,
            user : 'Garvit',
        }
    })
})

app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening to port ${ PORT }`)
    }
})