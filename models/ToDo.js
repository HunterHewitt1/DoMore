const { Schema } = require('mongoose')

const ToDo = new Schema({
  toDoName: { type: String, required: false },
  toDoDescription: { type: String, required: false },
  toDoDueDate: { type: String, required: false }
})

module.exports = ToDo
