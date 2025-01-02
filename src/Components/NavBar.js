import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (

    <div className='NavBar'>
        <div className="logo">
            <img src="/Images/logo.png" alt="this is the logo" />
        </div>

        <div className="navLinks">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
        </div>
      
    </div>
    
  )
}
