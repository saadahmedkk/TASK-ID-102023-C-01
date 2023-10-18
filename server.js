const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/users',require('./route/User'))

app.listen(3000,'localhost',()=>{
    console.log("server is running")
})