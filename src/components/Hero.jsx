import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Frontend Developer
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
              Build Amazing
              <span className="text-indigo-600"> Web Projects</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Welcome to my project showcase. Here you'll find responsive,
              modern and creative web applications built with HTML, CSS,
              JavaScript, React and Backend technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
              >
                Explore Projects
              </Link>

              <Link
                to="/about"
                className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg transition"
              >
                About Me
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-14 flex gap-10 flex-wrap">
              <div>
                <h2 className="text-3xl font-bold text-indigo-600">10+</h2>
                <p className="text-gray-500">Projects</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-indigo-600">8+</h2>
                <p className="text-gray-500">Technologies</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-indigo-600">100%</h2>
                <p className="text-gray-500">Responsive</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/images/hero.png"
              alt="Hero"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
