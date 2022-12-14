import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { CheckSession } from '../services/Auth'
import TaskCard from '../components/TaskCards'

const Feed = (props) => {
  const navigate = useNavigate()
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [task, setNewTask] = useState([])
  const [tasks, setTasks] = useState([])
  const [taskId, setTaskId] = useState("")
  const [formState, setFormState] = useState({
    userAccount_id: '',
    taskName: "",
    taskDescription: "",
    taskDueDate: "",
    taskCompleted: false,
  })

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
    getTasks(user.id)
  }

  const getTasks = async (id) => {
    await axios
      .get(`${BASE_URL}/user/${id}`)
      .then((response) => {
        setTasks(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    const showTasks = (id) => {
      navigate(`/tasks/${id}`)
    }

    const handleChange = (event) => {
      setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const taskToSubmit = {...formState, userAccount_id: user.id}
      let newTask = await axios
      .post(`${BASE_URL}/tasks`, taskToSubmit)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      setNewTask([...task, newTask.data])
      setFormState({    
      taskName: "",
      taskDescription: "",
      taskDueDate: "",
      taskCompleted: false,
      userAccount_id: user.id})
    }

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        checkToken()
      }
    }, [formState])

  return user && authenticated ? (
    <section>
      <h1>Add a new task</h1>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <label className='task-form'>Task Name: </label>
        <input value={formState.taskName} onChange={handleChange} id="taskName"></input>
        <label className='task-form2'>Task Description: </label>
        <input value={formState.taskDescription} onChange={handleChange} id="taskDescription"></input>
        <button type="submit">Create New Task</button>
      </form>
      <h1> All Tasks</h1>
      <div className='add-tasks'>
        {tasks.map((task) => (
          <div key={task._id}>
            <TaskCard
              taskName={task.taskName}
              taskDescription={task.taskDescription}
              taskDueDate={task.taskDueDate}
              taskCompleted={task.taskCompleted}
              taskId={task._id}
              onClick={()=>showTasks(task._id)}
          />
      </div>
          ))}
      </div>
      <div className="grid col-4">
        <div className="feed"></div>
      </div>
    </section>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}
export default Feed
