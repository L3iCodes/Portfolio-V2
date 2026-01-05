import { fetchProjectbyId } from "@/src/actions/project.actions";
import { fetchTechnologies } from "@/src/actions/tech.actions";
import Gallery from "@/src/components/Gallery";
import ProjectLink from "@/src/components/ProjectLink";
import Section, { SectionNavigation } from "@/src/components/Section";
import { TechStackCard } from "@/src/components/TeckStack";
import { pageBackgroundEffects, projectCoverStyles, shadowColors } from "@/src/lib/styles";
import { notFound } from "next/navigation";

type ProjectInfoParams = {
    params: Promise<{ id: string }>
};

export default async function ProjectInfoPage({ params }: ProjectInfoParams ) {
    const { id } = await params;
    const project = await fetchProjectbyId(id);
    const technologies = await fetchTechnologies();

    if (!project) {
        notFound(); // 👈 shows nearest not-found.tsx
    }

    return(
        <div className={`min-h-screen flex gap-10 p-5 lg:p-10 relative`}>
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: pageBackgroundEffects[project.colorTheme],
                }}
            />
            
            {/* Main Content */}
            <div className="flex-1 space-y-5 z-10">
                <div>
                    <h1 className="text-4xl font-bold font-bricolage">{project.title.toUpperCase()}</h1>
                    <p className="text-base-content/50">
                        {project.subtitle}
                    </p>
                </div>  
                
                {project.coverImg && (
                    <div className="flex items-center justify-center p-5 md:p-8 lg:p-10 border border-base-content/20 rounded-xs relative" style={{background: projectCoverStyles[project.colorTheme]}}> 
                        <div className={`rounded-sm w-full h-full ${shadowColors[project.colorTheme]} shadow-[0_-5px_35px_-5px_rgba(0,0,0,0.3)] relative aspect-video overflow-hidden`}>
                            <img 
                                src={project.coverImg}
                                alt="Profile"
                                className={`w-full h-full object-cover`}
                            />
                        </div>
                    </div>
                )}
                
                <ProjectLink github={project.github} link={project.link}/>

                {/* SECTIONS */}
                <div className="px-1 xl:px-10 mt-15">
                    {/* Overview Section */}
                    <Section name="OVERVIEW">
                        <p className="text-sm text-base-content/80 font-normal">{project.overview}</p>
                    </Section>


                    {/* Features Section */}
                    <Section name="FEATURES">
                        <ul className="w-full space-y-10">
                           {project.features.map((feature, index) => (
                            <li 
                                key={`feature-${index}`}
                                className="space-y-1 text-base-content/80 hover:text-base-content"
                            >
                                <div className="w-full flex items-center gap-2 p-2 bg-base-300 border border-base-content/20 rounded-sm text-base-content hover:bg-base-200">
                                    <p className="h-8 w-8 flex items-center justify-center font-bold bg-base-100 rounded-sm border border-base-content/30">{index + 1}</p>
                                    <h1 className="text-sm font-medium">{feature.name}</h1>
                                </div>
                                <p className="text-sm font-light ">{feature.desc}</p>
                            </li>
                           ))} 
                        </ul>
                    </Section>
                    
                   
                    {/* Overview Section */}
                    <Section name="STACK">
                        <ul className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4">
                            {project.technologies.map((tech, index) => (
                                <li key={`${index}-${tech}`}>
                                   <TechStackCard 
                                        name={technologies[tech].name}
                                        icon={technologies[tech].icon}
                                        color={technologies[tech].color}
                                        className={`flex-col`}
                                   /> 
                                </li>
                            ))}
                        </ul>
                    </Section>

                    
                    {/* Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                        <Section name={'GALLERY'}>
                            <Gallery images={project.gallery} colors={project.colorTheme} />
                        </Section>
                    )}
                    
                    
                    <Section name={'LINKS'}>
                        <ProjectLink github={project.github} link={project.link}/>
                    </Section>
                </div>
            </div>
            
            {/* Section Navigation */}
            <SectionNavigation />
        </div>
    );
};