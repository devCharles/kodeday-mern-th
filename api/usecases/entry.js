
const Entry = require('../models/entry')

function create (title, body, image, dateCreated) {
  const entry = new Entry({ 
    title,
    body,
    image,
    dateCreated
  })
  return entry.save()
}

function getAll() {
  return Entry.find().exec()
}

function getUnique(id){
  return Entry.findById(id).exec()
}

module.exports = {
  create,
  getAll,
  getUnique
}