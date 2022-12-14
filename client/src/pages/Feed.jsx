import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

import TaskCard from '../components/TaskCards'

const Feed = ({ user, authenticated, props}) => {
  const navigate = useNavigate()
  const [task, setNewTask] = useState([])
  const [tasks, setTasks] = useState([])
  const [formState, setFormState] = useState({
    userAccount_id: '',
    taskName: "",
    taskDescription: "",
    taskDueDate: "",
    taskCompleted: false,
  })

  const getTasks = async () => {
    await axios
      .get(`${BASE_URL}/user/${user.id}`)
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
      console.log(user)
      let newTask = await axios 
      .post(`${BASE_URL}/tasks`, formState)
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
      setFormState({    
        taskName: "",
        taskDescription: "",
        taskDueDate: "",
        taskCompleted: false,
        userAccount_id: user.id})
      getTasks()
    }, [])


  return user && authenticated ? (
    <section>

      <form onSubmit={handleSubmit}>
        <label className='task-form'>Task Name: </label>
        <input value={formState.taskName} onChange={handleChange} id="taskName"></input>
        <label className='task-form2'>Task Description: </label>
        <input value={formState.taskDescription} onChange={handleChange} id="taskDescription"></input>
        <button type="submit">Create Task</button>
      </form>
      <h3> All Tasks</h3>
      <div className='add-tasks'>
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskCard
              taskName={task.taskName}
              taskDescription={task.taskDescription}
              taskDueDate={task.taskDueDate}
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
