import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
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
        <h2 className="text-2xl font-bold text-slate-900 transition group-hover:text-indigo-600">
          {project.title}
        </h2>

        <p className="mt-3 text-slate-600 leading-7">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
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
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
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
