import CreatePost from './pages/CreatePost'
import FeedPage from './pages/FeedPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import { ToastProvider } from './components/Toast'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ToastProvider>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ToastProvider>
    </Router>
  )
}

export default App
