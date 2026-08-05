import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
          onClick={() => setMenuOpen(false)}
        >
          Project Showcase
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:flex text-xl text-indigo-600"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-indigo-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <div className="flex flex-col px-6 py-5 gap-5">
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
