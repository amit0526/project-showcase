import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { techCategories } from "../../data/techCategories";

export default function TechStack() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            Tech Stack
          </span>

          <h2
            className={`mt-6 text-4xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Technologies I Use
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-lg ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            The technologies and tools used across the projects in this
            showcase.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-8 shadow-lg transition-all duration-300 ${
                theme === "dark"
                  ? "border-slate-800 bg-slate-900 hover:border-indigo-500"
                  : "border-slate-200 bg-white hover:border-indigo-400"
              }`}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>

                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      theme === "dark"
                        ? "bg-slate-800 text-slate-200 border border-slate-700"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
