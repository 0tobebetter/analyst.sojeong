import React from "react";
import { projects } from "../data/projects";

function ProjectCard({ title, description, tags, image, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-neutral-200 text-neutral-800 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-medium hover:underline">
          View project →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="px-6 md:px-20 py-16 bg-neutral-100 text-neutral-900">
      <h2 className="text-[28px] md:text-[40px] font-semibold mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
