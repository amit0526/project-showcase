import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { showcaseFeatures } from "../../data/showcaseFeatures";

export default function WhyShowcase() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            Why This Showcase?
          </span>

          <h2
            className={`mt-6 text-4xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            More Than Just A Portfolio
          </h2>

          <p
            className={`mt-6 text-lg leading-8 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Instead of keeping projects scattered across multiple GitHub
            repositories, I created this showcase to organize everything in one
            place. Every project demonstrates different concepts including
            React, JavaScript, APIs, animations, responsive layouts and clean UI
            design.
          </p>
        </motion.div>

        {/* Right */}

        <div className="grid gap-6 sm:grid-cols-2">
          {showcaseFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "border-slate-800 bg-slate-900 hover:border-indigo-500"
                  : "border-slate-200 bg-white hover:border-indigo-400"
              }`}
            >
              <h3
                className={`text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
