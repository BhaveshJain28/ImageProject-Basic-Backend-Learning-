import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          Share Your World<br />
          with <span className="gradient-text">PixelPost</span>
        </h1>
        <p className="home-subtitle">
          Upload stunning images, write captions, and explore a beautiful feed
          of community posts. Simple, fast, and elegant.
        </p>
        <div className="home-actions">
          <Link to="/create-post" className="btn btn-primary">
            ✨ Create a Post
          </Link>
          <Link to="/feed" className="btn btn-outline">
            🖼️ Browse Feed
          </Link>
        </div>

        <div className="home-features">
          <div className="feature-card">
            <div className="feature-icon">📤</div>
            <h3>Easy Upload</h3>
            <p>Drag & drop or click to upload your images instantly</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Cloud Storage</h3>
            <p>Images stored securely on ImageKit CDN for fast delivery</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Blazing Fast</h3>
            <p>Built with React + Vite for instant page loads</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
