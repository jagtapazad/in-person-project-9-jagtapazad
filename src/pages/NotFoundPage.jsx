import { Link } from 'react-router-dom'

// Shown for any path that no other route matches
function NotFoundPage() {
  return (
    <div className="error-page">
      <h1>404: Page not found</h1>
      <p>There is nothing at this address.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
