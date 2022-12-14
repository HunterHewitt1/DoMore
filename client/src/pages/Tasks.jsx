import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import TaskCard from '../components/TaskCards'

// const [task, updateTask] = useState([])
// const [formState, setFormState] = useState({
//   userAccount_id: '',
//   taskName: "",
//   taskDescription: "",
//   taskDueDate: "",
//   taskCompleted: false,
// })

// const handleUpdate = async (e) => {
//   e.preventDefault()
//   let updatedTask = await axios.put(`${BASE_URL}/tasks/${id}`, formState)
//   updateTask(updatedTask.data)
// }

const Tasks = () => {

  return(
    <div>
      <div>Tasks Test</div>
    </div>
  )
}

export default Tasks