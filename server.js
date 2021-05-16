const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Connect Database
connectDB()

//Init Middleware

app.use(express.json({ extended: false }))

//HTTP GET REQUEST
app.get('/', (req, res) => {
  res.json({ name: 'Akash', roll: '19it197' })
})

//Define Routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

//Create Express server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('App listening on port 5000!')
})
