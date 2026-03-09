import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../components/Toast'

function CreatePost() {
  const navigate = useNavigate()
  const toast = useToast()
  const fileInputRef = useRef(null)
  const [preview, setPreview] = useState(null)
  const [fileName, setFileName] = useState('')
  const [caption, setCaption] = useState('')
  const [loading, setLoading] = useState(false)

  const MAX_CAPTION = 200

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast('File size must be under 5MB', 'error')
        return
      }
      setFileName(file.name)
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const removeFile = () => {
    setPreview(null)
    setFileName('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!fileInputRef.current?.files[0]) {
      toast('Please select an image to upload', 'error')
      return
    }
    setLoading(true)
    const formData = new FormData(e.target)
    try {
      await axios.post('http://localhost:3000/create-posts', formData)
      toast('Post created successfully! 🎉', 'success')
      setTimeout(() => navigate('/feed'), 800)
    } catch (err) {
      console.error(err)
      toast('Failed to create post. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="create-post-section">
      <div className="create-post-card">
        <div className="create-post-header">
          <h1>✨ Create Post</h1>
          <p>Share a moment with the community</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Image</label>
            <div className={`file-upload-area ${preview ? 'has-file' : ''}`}>
              <input
                type="file"
                name="image"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              {!preview && (
                <>
                  <div className="upload-icon">📁</div>
                  <p className="upload-text">
                    Drop your image here or <span>browse</span>
                  </p>
                  <p className="upload-hint">PNG, JPG, WEBP up to 5MB</p>
                </>
              )}
            </div>

            {preview && (
              <div className="image-preview-container">
                <img className="image-preview" src={preview} alt="Preview" />
                <div className="image-preview-overlay">
                  <span className="preview-file-name">{fileName}</span>
                  <button
                    type="button"
                    className="preview-remove-btn"
                    onClick={removeFile}
                  >
                    ✕ Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Caption</label>
            <textarea
              className="form-input"
              name="caption"
              placeholder="Write something about this image..."
              required
              maxLength={MAX_CAPTION}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <div className={`char-count ${caption.length >= MAX_CAPTION ? 'limit' : ''}`}>
              {caption.length}/{MAX_CAPTION}
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Uploading...
              </>
            ) : (
              <>🚀 Publish Post</>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost
