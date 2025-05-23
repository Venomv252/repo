export default function Nav(){
    return (


    <div className="app-container">
        <header className="header">
          <div className="header-content">
            <Link to="/" className="brand">
              <span className="brand-name">EduConnect</span>
              <span className="brand-tagline">Learn. Grow. Succeed.</span>
            </Link>
            <nav className="main-nav">
              <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
              {isAuthenticated ? (
                  <>
                  <Link to="/profile" className="nav-link">Profile</Link>
                  <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
                </>
              ) : (
                  <Link to="/auth" className="nav-link login-btn">Login/Signup</Link>
                )}
            </nav>
          </div>
            </header>
          </div>
        )
}