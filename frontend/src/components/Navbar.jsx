import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div className="brand-icon">📸</div>
        <span className="brand-gradient">PixelPost</span>
      </Link>
      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          🏠 <span className="nav-text">Home</span>
        </Link>
        <Link
          to="/feed"
          className={`nav-link ${location.pathname === '/feed' ? 'active' : ''}`}
        >
          🖼️ <span className="nav-text">Feed</span>
        </Link>
        <Link to="/create-post" className="nav-link nav-link-create">
          ✨ <span className="nav-text">Create</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
