import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

import TaskCard from '../components/TaskCards'

const Feed = ({ user, authenticated, props }) => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])

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

    useEffect(() => {
      getTasks()
    }, [])


  return user && authenticated ? (
    <section>
      <h3> All Tasks</h3>
      <div className='add-tasks'>
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskCard
              taskName={task.taskName}
              taskDescription={task.taskDescription}
              taskDueDate={task.taskDueDate}
              onClick={showTasks}
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
