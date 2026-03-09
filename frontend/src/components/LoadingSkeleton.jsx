import React from 'react'

function LoadingSkeleton({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-header">
            <div className="skeleton-avatar"></div>
            <div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-text medium"></div>
            </div>
          </div>
          <div className="skeleton-image"></div>
          <div className="skeleton-body">
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default LoadingSkeleton
