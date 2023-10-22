const express = require('express')
const {getData, addData} = require('../controller/dataController')

const router = express.Router()

router.route('/').get(getData).post(addData)

module.exports =  router