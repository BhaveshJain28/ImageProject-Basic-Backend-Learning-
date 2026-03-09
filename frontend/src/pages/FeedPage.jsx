import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LoadingSkeleton from '../components/LoadingSkeleton'
import ImageModal from '../components/ImageModal'
import BackToTop from '../components/BackToTop'

function FeedPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [likedPosts, setLikedPosts] = useState({})
  const [modalImage, setModalImage] = useState(null)
  const [viewCount, setViewCount] = useState(0)

  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => {
        setPosts(res.data.posts)
        setViewCount(Math.floor(Math.random() * 50) + res.data.posts.length)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const getTimeAgo = (index) => {
    const units = ['just now', '2 min ago', '10 min ago', '1 hr ago', '3 hrs ago', '1 day ago']
    return units[index % units.length]
  }

  return (
    <>
      <section className="feed-section">
        <div className="feed-header">
          <h1>🖼️ Explore Feed</h1>
          <p>Discover amazing images shared by the community</p>
          {!loading && posts.length > 0 && (
            <div className="feed-stats">
              <div className="stat-item">
                <div className="stat-number">{posts.length}</div>
                <div className="stat-label">Posts</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{Object.values(likedPosts).filter(Boolean).length}</div>
                <div className="stat-label">Liked</div>
              </div>
              <div className="stat-item">                <div className="stat-number">
                  {viewCount}
                </div>
                <div className="stat-label">Views</div>
              </div>
            </div>
          )}
        </div>

        {loading ? (
          <LoadingSkeleton count={3} />
        ) : posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={post._id}
              className="post-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="post-card-header">
                <div className="post-avatar">
                  {(post.caption || 'P').charAt(0).toUpperCase()}
                </div>
                <div className="post-user-info">
                  <div className="post-username">PixelUser</div>
                  <div className="post-time">{getTimeAgo(index)}</div>
                </div>
              </div>

              <div
                className="post-image-container"
                onClick={() => setModalImage({ src: post.image, alt: post.caption })}
              >
                <img src={post.image} alt={post.caption} />
              </div>

              <div className="post-actions">
                <button
                  className={`post-action-btn ${likedPosts[post._id] ? 'liked' : ''}`}
                  onClick={() => toggleLike(post._id)}
                >
                  {likedPosts[post._id] ? '❤️' : '🤍'}
                  <span className="action-count">
                    {likedPosts[post._id] ? 1 : 0}
                  </span>
                </button>
                <button className="post-action-btn" title="Share">
                  🔗
                </button>
                <button className="post-action-btn" title="Bookmark">
                  🔖
                </button>
              </div>

              <div className="post-body">
                <p className="post-caption">
                  <span className="caption-username">PixelUser</span>
                  {post.caption}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h2>No posts yet</h2>
            <p>Be the first to share something amazing!</p>
            <Link to="/create-post" className="btn btn-primary">
              ✨ Create First Post
            </Link>
          </div>
        )}

        <div className="footer">
          Made with 💜 using React, Express & MongoDB
        </div>
      </section>

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
      <BackToTop />
    </>
  )
}

export default FeedPage
