import { Link } from 'react-router-dom'
import '/Users/hunterhewitt/ga_seir/projects/DoMore---Productivity-App/client/src/styles/App.css'
const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className='auth-navbar'>
        <h3 className='auth-welcome'>Welcome {user.email}!</h3>
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
      </nav>
    )
  }

  const publicOptions = (
    <header>
      <nav className='nav_links'>
        <Link className='navbar-home' to="/">Home</Link>
        <Link className='navbar-right' to="/register">Sign Up</Link>
        <Link className='navbar-right' to="/signin">Log In</Link>
      </nav>
    </header>
  )

  return (
    <header>
      <Link to="/">
        <div></div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav