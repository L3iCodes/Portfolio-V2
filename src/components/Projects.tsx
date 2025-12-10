import ProjectCard from "./ProjectCard";
import { fetchProject } from "../actions/project.actions";

interface ProjectsProps {
  option: 'featured' | 'all'
}

const Projects = async ({ option = 'all' }: ProjectsProps) => {
  const projects = await fetchProject();
  const filteredProjects = option === 'featured' ? projects.filter(project => project.featured) : projects;

  return (
    <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {filteredProjects.map(project => (
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