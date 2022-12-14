const express = require('express')
const cors = require('cors')
const db = require('./middleware/index')
const { UserAccount, Task } = require('./models')
const AuthRouter = require('./routes/AuthRouter')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use('/auth', AuthRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

//Routes//

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

app.post('/users', async (req, res) => {
  let exampleId = '63925c42c3ab02881264d2ec'
  const requestBody = { ...req.body, UserAccount_id: exampleId }

  let createUser = await UserAccount.create(requestBody)
  res.json(createUser)
})

app.get('/users', async (req, res) => {
  let getUsers = await UserAccount.find({})
  res.send(getUsers)
  console.log('getUsers')
})

app.get('/users/:id', async (req, res) => {
  let getUser = await UserAccount.findById(req.params.id)
  res.json(getUser)
})

app.put('/users/:id', async (req, res) => {
  let updateUser = await UserAccount.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updateUser)
})

app.delete('/users/:id', async (req, res) => {
  let deleteUser = await UserAccount.findByIdAndDelete(req.params.id)
  res.json(deleteUser)
})

// Tasks //

app.get('/tasks', async (req, res) => {
  let getTasks = await Task.find({})
  res.json(getTasks)
})

app.put('/tasks/:id', async (req, res) => {
  let updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateTask)
})

app.delete('/tasks/:id', async (req, res) => {
  let deleteTask = await Task.findByIdAndDelete(req.params.id)
  res.json(deleteTask)
})

app.post('/tasks', async (req, res) => {
  let createTask = await Task.create(req.body)
  res.json(createTask)
})

//get tasks by user

app.get('/user/:id', async (req, res) => {
  let getTaskByUser = await Task.find({ userAccount_id: req.params.id })
  res.json(getTaskByUser)
})
