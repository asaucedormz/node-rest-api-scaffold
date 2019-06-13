// Modules
const express = require('express')
const bodyParser = require('body-parser')

// Use environments
require('./environments/config')

//Init socket
// require('./socket')

// Init express app
const app = express()

//--------------------Use coors--------------------
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE, PATCH'
    )
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
    next()
})

// BodyParser config
app.use(
    bodyParser.json({
        limit: '50mb',
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000,
    })
)

// Use Controllers
app.use(require('./controllers/index.controller'))

// Use Swagger
// app.use(require('./swagger'))

// Start http server
const startApp = () => {
    app.listen(process.env.HTTP_PORT, () => {
        console.log(`Listen port: ${process.env.HTTP_PORT}`)
    }).setTimeout(1200000)
}

startApp()
