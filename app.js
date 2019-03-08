const express = require('express')
const app = express()

const hostname = '127.0.0.1'   // set constants
const port = 3002


app.get('/', function (req, res) {
  res.send('Welcome to my page!')
})

app.get('/get1', (req, res) => {
  res.send('Hello World! ')
})

app.get('/capital',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})
app.get

app.get('/greeting/:id',  (req, res) =>{
  res.send('Have a good day ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>miss u, ' + req.params.buddy + '!</h1>')
})
                           


// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

