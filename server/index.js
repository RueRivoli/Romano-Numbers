const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

// Middleware

const numbers = require('./routes/api/numbers');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/numbers', numbers);

app.listen(port, () => {
  console.log(`Romano numbers listening at http://localhost:${port}`)
})
