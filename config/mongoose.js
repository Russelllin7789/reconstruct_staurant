const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
const db = mongoose.connection
db.on('error', () => {
  console.error('MongoDB error!')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})

module.exports = db
