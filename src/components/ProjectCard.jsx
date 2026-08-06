import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";


export default function ProjectCard({ project }) {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`group overflow-hidden rounded-3xl border shadow-lg hover:shadow-2xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {project.status && (
          <span className="absolute top-4 left-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            {project.status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2
          className={`text-2xl font-bold transition group-hover:text-indigo-600 ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {project.title}
        </h2>

        <p
          className={`mt-3 leading-7 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`rounded-full px-3 py-1 text-xs font-medium border ${
                theme === "dark"
                  ? "bg-slate-700 border-slate-600 text-slate-200"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-md hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 rounded-xl border px-5 py-3 hover:-translate-y-1 transition-all duration-300 ${
              theme === "dark"
                ? "border-slate-600 bg-slate-700 text-white hover:bg-slate-600"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            <FaGithub size={17} />
            GitHub
          </a>
        </div>

        {/* Details Link */}
        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
