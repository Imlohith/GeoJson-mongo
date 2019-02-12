const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/api')

const app = express()

//middleware options 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hello wolrd')
})

app.use('/api', router)

mongoose.connect(`mongodb+srv://lohith:lohith@cluster0-xdaj2.mongodb.net/ninjas?retryWrites=true`)
    .then(() => {
        app.listen(3000, () => {
            console.log(`app liestens on port 3000`)
        })
    })
    .catch(err => {
        throw err
    })


