import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

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

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">My Projects</h1>

        {/* Search & Filter */}

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
          <input
            type="text"
            placeholder="Search Project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg w-full md:w-80"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option>All</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Backend</option>
          </select>
        </div>

        {/* Project Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
