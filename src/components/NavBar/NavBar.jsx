import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
   <nav>
    <ul>
        <li><Link to="/profile">Profile</Link> </li>
        <li><Link to="/closet">Closet</Link> </li>
    </ul>
   </nav>
   </>

  )
}

export default NavBar