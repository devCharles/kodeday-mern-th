
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date()
  },
  body: {
    type: String,
    minlength: 10,
    maxlength: 180,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: 'https://kodemia.mx/static/img/logos/isotipo-blanco.png'
  }
})

module.exports = mongoose.model('Entry', schema) 
