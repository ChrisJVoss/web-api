const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const parser = bodyParser.json()
const notes = []

app.use(parser)

app.post('/notes', (req, res) => {
  notes.push(req.body)
  res.sendStatus(201)
})

app.listen(3000, () => {
  console.log('Listening on 3000!')
})
