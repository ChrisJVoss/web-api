const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const parser = bodyParser.json()
const notes = []
let idValue = 0

app.use(parser)

app.post('/notes', (req, res) => {
  const noteId = {id: idValue}
  notes.push(noteId)
  Object.assign(noteId, req.body)
  idValue++
  res.sendStatus(201)
})

app.get('/notes', (req, res) => {
  res.send(notes)
})

app.listen(3000, () => {
  console.log('Listening on 3000!')
})
