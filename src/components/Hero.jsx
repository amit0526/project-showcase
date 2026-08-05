import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="max-w-3xl">
        <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
          Web Developer
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Discover My Best
          <span className="text-indigo-600"> Web Projects</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          A collection of my best HTML, CSS, JavaScript, React and Backend
          projects. Each project reflects my learning, creativity and problem
          solving skills.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Explore Projects
          </Link>

          <Link
            to="/about"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            About Me
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
