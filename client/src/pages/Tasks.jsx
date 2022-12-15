import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import TaskCard from '../components/TaskCards'
import { useParams } from 'react-router-dom'

const Tasks = () => {
let { id } = useParams()
let navigate = useNavigate()
const [tasks, setTasks] = useState([])
const [task, updateTask] = useState([])
const [formState, setFormState] = useState({
  taskName: "",
  taskDescription: "",
  taskDueDate: "",
  taskCompleted: "",
})

const handleUpdate = async (e) => {
  e.preventDefault()
  let updatedTask = await axios.put(`${BASE_URL}/tasks/${id}`, formState)
  updateTask(task, updatedTask)
  setFormState({  
  taskName: "",
  taskDescription: "",
  taskDueDate: "",
  taskCompleted: false})
  navigate(`/feed`)
}

const handleChange = async (event) => {
  console.log(event)
  setFormState({ ...formState, [event.target.id]: event.target.value })
}

const handleCheckedBox = async (event) => {
  console.log(event.target.id)
  console.log(event.target.checked)
  setFormState({ ...formState, [event.target.id]: event.target.checked })
}

  return(
    <div>
      <h1>Update Task</h1>
      {/* <form onSubmit={handleUpdate}>
        <label htmlFor="taskName">Task Name</label>
        <input id="taskName" type="text" value={formState.taskName} onChange={handleChange} />
        <label htmlFor="taskDescription">Task Description</label>
        <input id="taskDescription" type="text" value={formState.taskDescription} onChange={handleChange} />
        <label htmlFor="taskDueDate">Task Due Date</label>
        <input id="taskDueDate" type="date" value={formState.taskDueDate} onChange={handleChange} />
        <label htmlFor="taskCompleted">Task Completed</label>
        <input id="taskCompleted" type="checkbox" value={formState.taskCompleted} onChange={handleCheckedBox} />
        <button type="submit">Update Task</button>
      </form> */}


      <div className="signin2 col">
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleUpdate}>
            <div className="input-wrapper">
              <label htmlFor="email">Task Name </label>
              <input
                onChange={handleChange}
                id="taskName"
                placeholder="Brush Teeth"
                value={formState.taskName}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Task Description </label>
              <input
                onChange={handleChange}
                id="taskDescription"
                value={formState.taskDescription}
                placeholder="Brush your teeth for 2 minutes"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Task Due Date: </label>
              <input
                onChange={handleChange}
                id="taskDueDate"
                type="date"
                value={formState.taskDueDate}
              />
            </div>
            <button type='submit' >
              Update Task
            </button>
          </form>
        </div>
    </div>






















    </div>
)
}

export default Tasks