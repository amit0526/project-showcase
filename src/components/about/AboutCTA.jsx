import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function AboutCTA() {
  const { theme } = useTheme();

  return (
    <section
      className={`pb-28 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`rounded-[40px] p-12 text-center border ${
            theme === "dark"
              ? "bg-slate-900 border-slate-800"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <h2
            className={`text-5xl font-black ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Ready to Explore?
          </h2>

          <p
            className={`mt-6 text-lg leading-8 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Every project tells a story of learning, experimentation and
            continuous improvement. Explore the collection and see how my skills
            have evolved.
          </p>

          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl hover:-translate-y-1 transition"
          >
            Explore Projects
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
