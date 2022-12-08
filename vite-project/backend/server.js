const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { UserAccount, Task } = require('./models')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

//Routes//

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

app.post('/users', async (req, res) => {
  let createUser = await UserAccount.create(req.body)
  res.json(createUser)
})

app.get('/users', async (req, res) => {
  let getUsers = await UserAccount.find()
  res.json(getUsers)
})

app.put('/users/:id', async (req, res) => {
  let updateUser = await UserAccount.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updateUser)
})
