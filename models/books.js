const mongoose = require('mongoose')
const { number } = require('prop-types')

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

module.exports = mongoose.model('Book', bookSchema)