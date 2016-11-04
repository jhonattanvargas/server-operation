'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/templates'));
app.use('/api', api)

app.get('*',(req,res) =>{
    res.sendFile(`${__dirname}/public/index.html`);
})




module.exports = app
