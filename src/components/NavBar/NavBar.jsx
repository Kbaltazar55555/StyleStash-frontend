import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li><Link to="/profile">Profiles</Link></li>
            <li><Link to="/closet">Closet</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar