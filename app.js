const express = require('express')
const exphbs = require('express-handlebars')
const hbshelpers = require('handlebars-helpers')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// Variables related to server and db
const routes = require('./routes')
require('./config/mongoose')
const app = express()
const port = 3000
let lastId = 8

// handelbars
app.engine('handlebars', exphbs({ helpers: hbshelpers(), defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting middlewares
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// routes setting
app.use(routes)

// start and listen to the Express server
app.listen(port, () => {
  console.log(`Express is listening to Localhost: ${port}`)
})

