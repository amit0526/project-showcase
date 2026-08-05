import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-white border border-indigo-100 shadow-md text-indigo-600 px-5 py-2 rounded-full text-sm font-semibold">
              🚀 Frontend Developer
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Crafting Modern
              <br />
              <span className="text-indigo-600">Web Experiences</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              I build fast, responsive and user-friendly web applications using
              HTML, CSS, JavaScript, React, Tailwind CSS and modern backend
              technologies.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-xl shadow-lg hover:shadow-indigo-300 hover:scale-105 transition-all duration-300"
              >
                Explore Projects
              </Link>

              <Link
                to="/about"
                className="border border-gray-300 bg-white hover:bg-gray-100 px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                About Me
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <h2 className="text-3xl font-bold text-indigo-600">10+</h2>

                <p className="text-gray-500 text-sm mt-1">Projects</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <h2 className="text-3xl font-bold text-indigo-600">8+</h2>

                <p className="text-gray-500 text-sm mt-1">Technologies</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <h2 className="text-3xl font-bold text-indigo-600">100%</h2>

                <p className="text-gray-500 text-sm mt-1">Responsive</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center"
          >
            <img
              src="/images/hero.png"
              alt="Developer Illustration"
              className="w-full max-w-xl drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
