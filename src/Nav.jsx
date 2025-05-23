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
        <a href="https://repo-2-pi.vercel.app/auth"><button className="login-button">Login/Signup</button></a>
      </div>
    </nav>
  );
};

export default Navbar;
