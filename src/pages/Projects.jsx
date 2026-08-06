import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { useTheme } from "../components/context/ThemeContext";

export default function Projects() {
  const { theme } = useTheme();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Dynamic Categories
  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, []);

  // Filter Projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || project.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section
        className={`min-h-screen py-16 transition-colors duration-300 ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mb-12">
            <h1
              className={`text-5xl font-black ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              My Projects
            </h1>

            <p
              className={`mt-4 max-w-2xl text-lg ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Explore my collection of frontend and full-stack projects built
              with modern web technologies.
            </p>
          </div>

          {/* Search + Filter */}

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Search */}

            <div className="relative w-full md:max-w-md">
              <FaSearch
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}
              />

              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full rounded-2xl border py-3 pl-12 pr-4 transition-all duration-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                  theme === "dark"
                    ? "border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
                    : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </div>

            {/* Filter */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`rounded-2xl border px-5 py-3 transition-all duration-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                theme === "dark"
                  ? "border-slate-700 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-900"
              }`}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Counter */}

          <p
            className={`mb-8 text-sm ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Showing{" "}
            <span className="font-semibold">{filteredProjects.length}</span>{" "}
            project{filteredProjects.length !== 1 ? "s" : ""}
          </p>

          {/* Cards */}

          {filteredProjects.length > 0 ? (
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h2
                className={`text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                No Projects Found 😕
              </h2>

              <p
                className={`mt-3 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Try another search keyword or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
