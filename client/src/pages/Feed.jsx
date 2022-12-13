import axios from 'axios'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated, props }) => {
  const navigate = useNavigate()
  console.log(user)
  const [formState, setFormState] = useState({
    taskName: '',
    taskDescription: '',
    taskDueDate: '',
    taskCompleted: '',
    userAccount_id: user.id
  })
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(`http://localhost:3001/user/${user.id}`)
      setTasks(response.data)
    }
    fetchTasks()
  }, [user.id])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/tasks')
      newTask(response.data)
    }

    apiCall()
  }, [])


  return user && authenticated ? (
    <section>
      <h3>Tasks</h3>
      <div className='add-tasks'>
        <form className='tasks-form'>
          <label>Task Name: </label>
          <input/>
          <label>Task Description: </label>
          <input/>
        </form>

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
