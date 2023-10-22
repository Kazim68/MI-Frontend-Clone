const Data = require('../model/dataModel')
const {StatusCodes} = require('http-status-codes')

const getData = async (req, res) => { 
    const data = await Data.find({})
    res.status(StatusCodes.OK).json(data)
}

const addData = async (req, res) => { 
    const data = await Data.create(req.body)
    res.status(StatusCodes.CREATED).json(data)
}

module.exports = {getData, addData}