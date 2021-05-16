const express = require('express')

const app = express()

//HTTP GET REQUEST
app.get('/', (req, res) => {
  res.json({ name: 'Akash', roll: '19it197' })
})

//Create Expresss server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('App listening on port 5000!')
})
