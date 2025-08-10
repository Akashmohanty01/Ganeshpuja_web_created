import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <Link
          to="/"
          className="flex items-center space-x-3 hover:scale-105 transition duration-300"
        >
          <img
            src="/images/logo.jpg"
            alt="Ganesh Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] animate-pulse">
            GaneshPuja2025
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group font-semibold transition-all duration-300 ${
                isActive ? 'text-white' : 'text-red-400 hover:text-white'
              }`
            }
          >
            Home
            <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `relative group font-semibold transition-all duration-300 ${
                isActive ? 'text-white' : 'text-yellow-400 hover:text-white'
              }`
            }
          >
            Gallery
            <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `relative group font-semibold transition-all duration-300 ${
                isActive ? 'text-white' : 'text-green-400 hover:text-white'
              }`
            }
          >
            Team
            <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </NavLink>

          <NavLink
            to="/donation"
            className={({ isActive }) =>
              `relative group font-semibold transition-all duration-300 ${
                isActive ? 'text-white' : 'text-pink-400 hover:text-white'
              }`
            }
          >
            Donation
            <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative group font-semibold transition-all duration-300 ${
                isActive ? 'text-white' : 'text-purple-400 hover:text-white'
              }`
            }
          >
            Contact
            <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 text-white px-4 pb-4 rounded-b-lg shadow-md space-y-1">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-lg font-medium transition duration-200 ${
                isActive ? 'text-white' : 'text-red-400 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-lg font-medium transition duration-200 ${
                isActive ? 'text-white' : 'text-yellow-400 hover:text-white'
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/team"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-lg font-medium transition duration-200 ${
                isActive ? 'text-white' : 'text-green-400 hover:text-white'
              }`
            }
          >
            Team
          </NavLink>

          <NavLink
            to="/news"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-lg font-medium transition duration-200 ${
                isActive ? 'text-white' : 'text-blue-400 hover:text-white'
              }`
            }
          >
            News
          </NavLink>

          <NavLink
            to="/donation"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-lg font-medium transition duration-200 ${
                isActive ? 'text-white' : 'text-pink-400 hover:text-white'
              }`
            }
          >
            Donation
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-lg font-medium transition duration-200 ${
                isActive ? 'text-white' : 'text-purple-400 hover:text-white'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
