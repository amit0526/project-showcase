import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-2xl shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-black tracking-tight"
        >
          <span className="text-slate-900">Project</span>
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Showcase
          </span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Home
                {isActive && (
                  <motion.span
                    layoutId="nav"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-indigo-600"
                  />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Projects
                {isActive && (
                  <motion.span
                    layoutId="nav"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-indigo-600"
                  />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                About
                {isActive && (
                  <motion.span
                    layoutId="nav"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-indigo-600"
                  />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Contact
                {isActive && (
                  <motion.span
                    layoutId="nav"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-indigo-600"
                  />
                )}
              </span>
            )}
          </NavLink>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:scale-105 md:flex"
          >
            {darkMode ? (
              <FaSun className="text-amber-500" />
            ) : (
              <FaMoon className="text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md md:hidden"
          >
            {menuOpen ? (
              <FaTimes className="text-slate-700" />
            ) : (
              <FaBars className="text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 bg-white/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                Projects
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
