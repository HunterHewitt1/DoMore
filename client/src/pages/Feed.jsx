import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated }) => {
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const data = await GetPosts()
      setPosts(data)
    }
    handlePosts()
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
