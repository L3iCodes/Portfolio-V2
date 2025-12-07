const Projects = () => {
  return (
    <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects


const ProjectCard = () => {
  return(
    <div 
      className={
        `
          h-[400px] max-w-[250px] p-2 flex flex-col gap-1 bg-base-200 border border-base-content/20 rounded-md cursor-pointer
          transition-all ease-in
          hover:scale-105 hover:bg-base-100
        `
      }
    >
      {/* Img Placeholder */}
      <div className="border h-[80%] rounded-xs" />

      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">Strive</h2>
        <p className="text-xs text-base-content/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    </div>
  )
};