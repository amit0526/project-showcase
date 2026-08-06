import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { journey } from "../../data/journey";

export default function DevelopmentJourney() {
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
            Development Journey
          </span>

          <h2
            className={`mt-6 text-4xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            My Learning Journey
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-lg ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Every project in this showcase reflects a milestone in my learning
            journey as a web developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div
            className={`absolute left-5 top-0 h-full w-1 rounded-full ${
              theme === "dark" ? "bg-slate-700" : "bg-slate-200"
            }`}
          />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="relative flex gap-8"
              >
                {/* Circle */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-3xl border p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    theme === "dark"
                      ? "border-slate-800 bg-slate-900 hover:border-indigo-500"
                      : "border-slate-200 bg-white hover:border-indigo-400"
                  }`}
                >
                  <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                    {item.year}
                  </span>

                  <h3
                    className={`mt-4 text-2xl font-bold ${
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
