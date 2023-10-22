const express = require('express');
require('dotenv').config({path:'./config/.env'});
require('express-async-errors')
const cors = require('cors')
const dataRouter = require('./routes/dataController')

const app = express();

app.use(express.json())
app.use(cors())

// routes
app.use('/data', dataRouter)

module.exports = app;