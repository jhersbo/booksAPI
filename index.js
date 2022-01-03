const express = require('express')
const cors = require('cors')
require('dotenv').config()
const methodOverride = require('method-override')

const app = express()

//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(cors())

//Controllers
app.use('/books', require('./controllers/books'))
//Homepage
app.get('/', (req, res)=>{
    res.json({
        greeting: 'Welcome to the Homepage!',
        msg: 'This is CORS-enabled for all origins!'
    })
})

//404
app.get('*', (req, res) =>{
    res.render('Error404')
})

//Listen
app.listen(process.env.PORT, ()=>{
    console.log(`CORS-enabled web server listening on ${process.env.PORT}!`)
})
