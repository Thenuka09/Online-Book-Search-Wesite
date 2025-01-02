import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">
        <p>&copy; 2025 Your Book Finder. All rights reserved.</p>

        <ul className="footer-links">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
        </ul>
        
      </div>

    </footer>
  )
}
