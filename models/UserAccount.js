const { Schema } = require('mongoose')

const UserAccount = new Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  passwordDigest: { type: String, required: true }
})

module.exports = UserAccount
