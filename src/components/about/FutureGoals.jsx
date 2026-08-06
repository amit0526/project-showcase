import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { futureGoals } from "../../data/futureGoals";

export default function FutureGoals() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            Future Goals
          </span>

          <h2
            className={`mt-6 text-5xl font-black ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            What's Next?
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto text-lg ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Continuous learning and building better products is the goal behind
            every project in this showcase.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {futureGoals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-8 ${
                theme === "dark"
                  ? "bg-slate-900 border-slate-800 hover:border-indigo-500"
                  : "bg-white border-slate-200 hover:border-indigo-400"
              } transition-all`}
            >
              <div className="text-5xl">{goal.icon}</div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                {goal.title}
              </h3>

              <p
                className={`mt-4 leading-8 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
