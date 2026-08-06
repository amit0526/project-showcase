import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { stats } from "../../data/stats";

export default function StatsSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`pb-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className={`rounded-3xl border p-8 text-center shadow-lg transition-all duration-300 ${
                theme === "dark"
                  ? "border-slate-800 bg-slate-900 hover:border-indigo-500"
                  : "border-slate-200 bg-white hover:border-indigo-400"
              }`}
            >
              <h2 className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent">
                {item.number}
              </h2>

              <p
                className={`mt-4 text-base font-medium ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
