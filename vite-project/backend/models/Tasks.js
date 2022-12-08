const { Schema } = require('mongoose')

const Task = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  taskDueDate: { type: Date, required: false },
  taskCompleted: { type: Boolean, required: false },
  userAccount_id: { type: Schema.Types.ObjectId, ref: 'UserAccount_id' }
})

module.exports = Task
