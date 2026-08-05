import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-extrabold tracking-tight text-slate-900"
        >
          Project
          <span className="text-indigo-600"> Showcase</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Home
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-indigo-600 rounded-full"></span>
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Projects
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-indigo-600 rounded-full"></span>
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                About
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-indigo-600 rounded-full"></span>
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Contact
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-indigo-600 rounded-full"></span>
                )}
              </span>
            )}
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 transition-all duration-300 shadow-sm"
          >
            {darkMode ? (
              <FaSun className="text-amber-500" />
            ) : (
              <FaMoon className="text-slate-700" />
            )}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm"
          >
            {menuOpen ? (
              <FaTimes className="text-xl text-slate-700" />
            ) : (
              <FaBars className="text-xl text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 flex flex-col gap-5">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
