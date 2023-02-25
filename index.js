const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', (req, res) => {
  res.json('Post user route');
});

app.get('/api/users', (req, res) => {
  res.json('Get user route');
});

app.post('/api/users/:_id/excercises', (req, res) => {
  res.json('Post excercises route');
});

app.get('/api/users/:_id/logs', (req, res) => {
  res.json('Get log excercises route');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
