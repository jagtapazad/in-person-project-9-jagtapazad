import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { useLocalStorage } from './hooks/useLocalStorage'
import Navigation from './components/Navigation'
import './styles/App.css'

function App() {
  // Theme survives a refresh: stored in localStorage under 'portfolio-theme'
  const [theme, setTheme] = useLocalStorage('portfolio-theme', 'light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app theme-${theme}`}>
      <header className="app-header">
        <Navigation />
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Any other path */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Azad Jagtap. Built with React Router.</p>
      </footer>
    </div>
  )
}

export default App
