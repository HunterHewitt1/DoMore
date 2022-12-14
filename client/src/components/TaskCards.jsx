const TaskCard = (props => {
  return(
    <div className="tasks_card" onClick={() => props.onClick(props.id)}>
    <h3>{props.taskName}</h3>
    <p>{props.taskDescription}</p>
    <p>{props.taskDueDate}</p>
    <button>Delete</button>
    </div>
  )
})

export default TaskCard