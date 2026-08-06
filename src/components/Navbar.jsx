import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive
        ? "text-indigo-500"
        : theme === "dark"
          ? "text-slate-300 hover:text-indigo-400"
          : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-xl border-b shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-900/80 border-slate-700"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-extrabold tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          <span className={theme === "dark" ? "text-white" : "text-slate-900"}>
            Project
          </span>

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
          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className={`hidden md:flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 shadow-sm ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
                : "border-slate-200 bg-white hover:bg-slate-100"
            }`}
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-400" />
            ) : (
              <FaMoon className="text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-md md:hidden transition-all ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800"
                : "border-slate-200 bg-white"
            }`}
          >
            {menuOpen ? (
              <FaTimes
                className={theme === "dark" ? "text-white" : "text-slate-700"}
              />
            ) : (
              <FaBars
                className={theme === "dark" ? "text-white" : "text-slate-700"}
              />
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
            className={`md:hidden backdrop-blur-xl border-t ${
              theme === "dark"
                ? "bg-slate-900/95 border-slate-700"
                : "bg-white/90 border-slate-200"
            }`}
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

              {/* Divider */}
              <div
                className={`my-2 h-px ${
                  theme === "dark" ? "bg-slate-700" : "bg-slate-200"
                }`}
              />

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300 ${
                  theme === "dark"
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                <span className="font-medium">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>

                {theme === "dark" ? (
                  <FaSun className="text-amber-400" />
                ) : (
                  <FaMoon className="text-slate-700" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
