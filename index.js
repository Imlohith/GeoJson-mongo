const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//middleware options 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.send('hello wolrd')
})

app.listen(3000, () => {
    console.log(`app liestens on port 3000`)
})