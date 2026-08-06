import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function AboutHero() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge */}

          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            📂 About This Showcase
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Building Projects That
            <span className="block bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Solve Real Problems
            </span>
          </h1>

          {/* Description */}

          <p
            className={`mt-8 text-lg leading-8 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Project Showcase is a collection of frontend and full-stack
            development projects built while learning modern web technologies.
            Every project represents a step in my journey with a focus on clean
            code, responsive design, performance and user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
