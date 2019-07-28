
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const entry = require('./usecases/entry')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/hola', (request, response) => {
  response.json({
    message: 'Hola mundo'
  })
})

app.get('/entries', async (request, response) => {
  const allEntries = await entry.getAll()
  response.json({
    success: true,
    message: 'All entries list',
    data: {
      entries: allEntries
    }
  })
})

app.post('/entries', (request, response) => {
  const {
    title,
    dateCreated,
    image,
    body
  } = request.body
  const newEntry = entry.create(title, body, image, dateCreated)

  response.json({
    success: true,
    message: 'Entry created',
    data: {
      entry: newEntry
    }
  })

})

app.get('/entries/:id', async(req, res) => {
  const entrySearched = await entry.getUnique(req.params.id)
  res.json({
    success: true,
    message: "Found it",
    data: {
      entry: entrySearched
    }
  })
})


mongoose.connect('mongodb+srv://kodeday:kodemiakodeday123@charlesmx-d5bex.mongodb.net/blog', { useNewUrlParser: true }, (error) => {
  if (error) {
    console.error('ERROR: ', error)
    return
  }

  console.log('DB CONNECTED! wuju!')
  app.listen(8080, () => {
    console.log('Server listening in port 8080')
  })
})

