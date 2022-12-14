import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const TaskCard = (props => {
  const navigate = useNavigate()

  const handleDelete = async (event) => {
    event.preventDefault()
    await axios.delete(`${BASE_URL}/tasks/${event.currentTarget.value}`)
    navigate('/feed')
  }
  console.log(props.taskId)
  return(
    <div onClick={() => props.onClick(props.id)}>
      <div className="tasks_card">
        <h3>{props.taskName}</h3>
        <p>{props.taskDescription}</p>
      </div>
      <button className='deleteBtn centered' onClick={handleDelete} value={props.taskId}>Delete</button>
    </div>
  )
})

export default TaskCard