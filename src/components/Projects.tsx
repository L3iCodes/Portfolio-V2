'use client'

import { ProjectItems, sample_projects } from "../lib/sampleProject";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  option: 'featured' | 'all'
}

const Projects = ({ option = 'all' }: ProjectsProps) => {
  // INSERT DATA FETCHING CODE

  // Dummy Sample
  const [projects, setProjects] = useState<ProjectItems[]>(sample_projects);

  useEffect(() => {
    if (option === 'all') {
      setProjects(sample_projects);
    } else {
      setProjects(sample_projects.filter(p => p.featured));
    }
  }, [option]);

  return (
    <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {projects.map(project => (
        <ProjectCard
          key={project._id}
          _id={project._id}
          title={project.title}
          subtitle={project.subtitle}
          coverImg={project.coverImg}
          coverBg={project.coverBg}
        />
      ))}
    </div>
  )
};

export default Projects