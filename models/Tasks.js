const { Schema } = require('mongoose')

const Task = new Schema({
  taskName: { type: String, required: false },
  taskDescription: { type: String, required: false },
  taskDueDate: { type: Date, required: false },
  taskCompleted: { type: Boolean, required: false },
  userAccount_id: { type: Schema.Types.ObjectId, ref: 'userAccount_id' }
})

module.exports = Task
