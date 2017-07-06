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

app.put('/notes/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10)
  const item = notes.find(item => {
    return item.id === itemId
  })
  if (!item) {
    return res.sendStatus(404)
  }
  Object.assign(item, req.body)
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log('Listening on 3000!')
})
