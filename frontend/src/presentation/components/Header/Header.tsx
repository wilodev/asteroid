import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 bg-opacity-20">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            AsteroidApp
          </span>
        </Link>
        <div className="flex items-center">
          <p className="text-sm md:text-lg text-white font-medium">User</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
