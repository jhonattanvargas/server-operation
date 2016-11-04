'use strict'

const express = require('express')
const api = express.Router()
//add require controller
const operatorCtrl = require('../controllers/operator')

//add routes from api
api.get('/add/:a/:b',operatorCtrl.add)
api.get('/sub/:a/:b',operatorCtrl.sub)
api.get('/mul/:a/:b',operatorCtrl.mul)
api.get('/div/:a/:b',operatorCtrl.div)


module.exports = api
