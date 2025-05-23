import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo and Tagline */}
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600">Edu</span>
          <span className="text-green-500">Connect</span>
        </h1>
        <p className="text-sm text-gray-500 -mt-1">Learn. Grow. Succeed.</p>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Leaderboard</a>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;