import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import TaskCard from '../components/TaskCards'
import { useParams } from 'react-router-dom'


const Tasks = () => {
let { id } = useParams()
let navigate = useNavigate()
console.log(id)
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
// const getTasks = async (id) => {
//   await axios
//     .get(`${BASE_URL}/user/${id}`)
//     .then((response) => {
//       setTasks(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }

//   useEffect(() => {
//     getTasks(id)
//   }, [])

  return(
    <div>
      {/* <div>Tasks Details</div>
      <div className='add-tasks'>
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskCard
              taskName={task.taskName}
              taskDescription={task.taskDescription}
              taskDueDate={task.taskDueDate}
              taskCompleted={task.taskCompleted}
          />
      </div>
          ))}

      </div> */}
      <h4>Update Task</h4>



      <form onSubmit={handleUpdate}>
        <label htmlFor="taskName">Task Name</label>
        <input id="taskName" type="text" value={formState.taskName} onChange={handleChange} />
        
        <label htmlFor="taskDescription">Task Description</label>
        <input id="taskDescription" type="text" value={formState.taskDescription} onChange={handleChange} />

        <label htmlFor="taskDueDate">Task Due Date</label>
        <input id="taskDueDate" type="date" value={formState.taskDueDate} onChange={handleChange} />

        <label htmlFor="taskCompleted">Task Completed</label>
        <input id="taskCompleted" type="checkbox" value={formState.taskCompleted} onChange={handleCheckedBox} />

        <button type="submit">Update Task</button>







        </form>
    </div>
  )
}

export default Tasks