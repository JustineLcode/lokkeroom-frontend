import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        
        <ul>
        
        
        <li>  <Link to="/" >Home</Link></li>
                <li><Link to="/Login" >Login</Link></li>
        <li><Link to="/Register" >Register</Link></li>
        <li><Link to="/UserProfile" >UserProfile</Link></li>
        <li><Link to="/LobbyPage" >LobbyPage</Link></li>
  
      </ul></nav>
    </div>
  )
}

export default Navbar
