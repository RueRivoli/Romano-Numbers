const express = require('express')
const app = express()
const port = 3000


const numbers = require('./routes/api/numbers');

app.use('/api/numbers', numbers);


app.listen(port, () => {
  console.log(`Romano numbers listening at http://localhost:${port}`)
})