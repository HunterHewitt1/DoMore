const mongoose = require('mongoose')
const UserAccountSchema = require('./UserAccount')
const TaskSchema = require('./Task')

const UserAccount = mongoose.model('UserAccount', UserAccountSchema)
const Task = mongoose.model('Task', TaskSchema)

module.exports = {
  UserAccount,
  Task
}
