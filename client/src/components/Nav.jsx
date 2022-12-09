import { Link } from 'react-router-dom'
import '/Users/hunterhewitt/ga_seir/projects/DoMore---Productivity-App/client/src/styles/App.css'
const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/feed">Feed</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link className='navbar' to="/">Home</Link>
      <Link className='navbar' to="/register">Sign Up</Link>
      <Link className='navbar' to="/signin">Log In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div>
        </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav