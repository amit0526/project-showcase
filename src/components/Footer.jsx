import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./context/ThemeContext";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const { theme } = useTheme();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
  };

  return (
    <footer
      className={`relative mt-0 overflow-hidden border-t transition-all duration-300 ${
        theme === "dark"
          ? "border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-300"
          : "border-slate-200 bg-linear-to-br from-slate-50 via-white to-indigo-50 text-slate-700"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl animate-pulse" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-3">
          {/* Brand */}

          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2
              className={`text-3xl font-extrabold tracking-tight ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Project{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>

            <p
              className={`mt-6 leading-8 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              A collection of modern frontend and backend projects built with
              React, JavaScript, Tailwind CSS and modern web technologies.
            </p>
          </motion.div>

          {/* Links */}

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3
              className={`mb-6 text-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Quick Links
            </h3>

            <div
              className={`flex flex-col gap-4 ${
                theme === "dark" ? "text-white" : "text-slate-700"
              }`}
            >
              <Link
                to="/"
                className="transition-all duration-300 hover:translate-x-2 hover:text-indigo-500"
              >
                → Home
              </Link>

              <Link
                to="/projects"
                className="transition-all duration-300 hover:translate-x-2 hover:text-indigo-500"
              >
                → Projects
              </Link>

              <Link
                to="/about"
                className="transition-all duration-300 hover:translate-x-2 hover:text-indigo-500"
              >
                → About
              </Link>

              <Link
                to="/contact"
                className="transition-all duration-300 hover:translate-x-2 hover:text-indigo-500"
              >
                → Contact
              </Link>
            </div>
          </motion.div>

          {/* Social */}

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3
              className={`mb-6 text-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Connect
            </h3>

            <div className="space-y-4">
              <a
                href="https://github.com/amit0526"
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-4 rounded-2xl border p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500/10 ${
                  theme === "dark"
                    ? "border-slate-700 bg-white/5"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <div className="rounded-xl bg-slate-800 p-3 transition group-hover:bg-indigo-600">
                  <FaGithub className="text-lg text-white" />
                </div>

                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/amit-anand23/"
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-4 rounded-2xl border p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500/10 ${
                  theme === "dark"
                    ? "border-slate-700 bg-white/5"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <div className="rounded-xl bg-slate-800 p-3 transition group-hover:bg-indigo-600">
                  <FaLinkedin className="text-lg text-white" />
                </div>

                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:amit.anand031020@gmail.com"
                className={`group flex items-center gap-4 rounded-2xl border p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500/10 ${
                  theme === "dark"
                    ? "border-slate-700 bg-white/5"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <div className="rounded-xl bg-slate-800 p-3 transition group-hover:bg-indigo-600">
                  <FaEnvelope className="text-lg text-white" />
                </div>

                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p
            className={`text-sm ${
              theme === "dark" ? "text-slate-500" : "text-slate-600"
            }`}
          >
            © {new Date().getFullYear()} Project Showcase. Crafted with ❤️ using
            React & Tailwind CSS.
          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={scrollTop}
            className="group flex items-center gap-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-xl"
          >
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
