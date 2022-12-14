import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import TaskCard from '../components/TaskCards'
import { useParams } from 'react-router-dom'


const Tasks = () => {
let { id } = useParams()
console.log(id)
const [task, updateTask] = useState([])
const [formState, setFormState] = useState({
  taskName: "",
  taskDescription: "",
  taskDueDate: "",
  taskCompleted: false,
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
}
const handleChange = async (event) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })
}

  return(
    <div>
      <div>Tasks Details</div>

      <h4>Update Task</h4>
      <form onSubmit={handleUpdate}>
        <label htmlFor="taskName">Task Name</label>
        <input id="taskName" type="text" value={formState.taskName} onChange={handleChange} />
        
        <label htmlFor="taskDescription">Task Description</label>
        <input id="taskDescription" type="text" value={formState.taskDescription} onChange={handleChange} />

        <label htmlFor="taskDueDate">Task Due Date</label>
        <input id="taskDueDate" type="date" value={formState.taskDueDate} onChange={handleChange} />

        <label htmlFor="taskCompleted">Task Completed</label>
        <input id="taskCompleted" type="checkbox" value={formState.taskCompleted} onChange={handleChange} />

        <button type="submit">Update Task</button>







        </form>
    </div>
  )
}

export default Tasks