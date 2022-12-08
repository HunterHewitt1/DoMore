const mongoose = require('mongoose')
const UserAccountSchema = require('./UserAccount')
const TaskSchema = require('./Tasks')

const UserAccount = mongoose.model('UserAccount', UserAccountSchema)
const Task = mongoose.model('Tasks', TaskSchema)

module.exports = {
  UserAccount,
  Task
}
