import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="home-page">
      <div className="home-content">
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🚀</div>
        <h1 className="home-title">
          <span className="gradient-text">404</span>
        </h1>
        <p className="home-subtitle">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="home-actions">
          <Link to="/" className="btn btn-primary">
            🏠 Back to Home
          </Link>
          <Link to="/feed" className="btn btn-outline">
            🖼️ Browse Feed
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
