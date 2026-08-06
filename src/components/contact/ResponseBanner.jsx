import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaClock, FaCode, FaHandshake } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ResponseBanner() {
  const { theme } = useTheme();

  return (
    <section
      className={`pb-24 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`overflow-hidden rounded-[32px] border p-10 shadow-xl ${
            theme === "dark"
              ? "border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950"
              : "border-slate-200 bg-gradient-to-r from-indigo-50 via-white to-purple-50"
          }`}
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
                🚀 Let's Connect
              </span>

              <h2
                className={`mt-6 text-4xl font-black ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                Ready to Start a Conversation?
              </h2>

              <p
                className={`mt-5 text-lg leading-8 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Whether you have feedback, collaboration ideas or just want to
                discuss web development, I'd love to hear from you.
              </p>

              <Link
                to="/projects"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Projects
                <FaArrowRight />
              </Link>
            </div>

            {/* Right */}

            <div className="grid gap-5 sm:grid-cols-3">
              <div
                className={`rounded-2xl p-6 text-center ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                }`}
              >
                <FaClock className="mx-auto text-3xl text-indigo-600" />

                <h3
                  className={`mt-4 font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Fast Reply
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Usually within 24 hours
                </p>
              </div>

              <div
                className={`rounded-2xl p-6 text-center ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                }`}
              >
                <FaCode className="mx-auto text-3xl text-indigo-600" />

                <h3
                  className={`mt-4 font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Web Projects
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  React • Tailwind • Node.js
                </p>
              </div>

              <div
                className={`rounded-2xl p-6 text-center ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                }`}
              >
                <FaHandshake className="mx-auto text-3xl text-indigo-600" />

                <h3
                  className={`mt-4 font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Open
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Collaboration Welcome
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
