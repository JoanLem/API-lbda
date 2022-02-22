const express = require("express")
const mysql = require('mysql')
const myconnect = require('express-myconnection')
const routes = require("./routes")


const app = express()
app.set('port', process.env.PORT || 9000)

const db= {
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'master',
    database: 'LBDA'
}

// middleware
app.use(myconnect(mysql, db, 'single'))
app.use(express.json())

// routes
app.use('/api', routes)

app.get('/', (req,res) =>{
    res.send('Welcome to API LBDA')
})


// ------- Server running
app.listen(app.get('port'), ()=>{
    console.log('server running in port', app.get('port'))
})