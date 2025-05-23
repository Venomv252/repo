import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">
          <span className="blue">Edu</span><span className="green">Connect</span>
        </h1>
        <p className="tagline">Learn. Grow. Succeed.</p>
      </div>
      <div className="navbar-right">
        <a href="#" className="nav-link">Leaderboard</a>
        <button className="login-button">Login/Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
