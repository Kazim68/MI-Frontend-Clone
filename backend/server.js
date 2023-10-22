const app = require('./app')
const connect = require('./db/connect')

const port = process.env.PORT || 3000

const start = async () => { 
    await connect(process.env.MONGODB_URL)
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

start()