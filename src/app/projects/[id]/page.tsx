import { NavigateButton } from "@/src/components/Button";
import { sample_projects } from "@/src/lib/constants"
import { pageBackgroundEffects, projectCoverStyles, shadowColors } from "@/src/lib/styles";
import Image from "next/image";

type ProjectInfoParams = {
    params: Promise<{ id: string }>
};

export default async function ProjectInfoPage({ params }: ProjectInfoParams ) {
    const { id } = await params;
    const project = sample_projects[parseInt(id)];

    return(
        <div className={`min-h-screen flex gap-10 p-5 lg:p-10 relative`}>
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: pageBackgroundEffects[project.coverBg],
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
                    <div className="flex items-center justify-center p-5 md:p-8 lg:p-10 border border-base-content/20 rounded-xs relative" style={{background: projectCoverStyles[project.coverBg]}}> 
                        <div className={`rounded-sm w-full h-full ${shadowColors[project.coverBg]} shadow-[0_-5px_35px_-5px_rgba(0,0,0,0.3)] relative aspect-video overflow-hidden`}>
                            <Image 
                                src={project.coverImg}
                                alt="Profile"
                                fill
                                className={`object-cover`}
                            />
                        </div>
                    </div>
                )}
                
                <div className="w-full h-16 flex items-center gap-2 bg-base-100 border border-base-content/20 p-3 rounded-sm">
                    <div className="flex-1">
                        <h2 className="text-sm font-bold">DEMO & CODE</h2>
                        <p className="text-xs text-base-content/50">View the full information here</p>
                    </div>
                    <div>
                        <NavigateButton 
                            text="GitHub"
                            icon="ri:github-fill"
                            href={project.github}
                            type="rectangle"
                            otherSite={true}
                            className="bg-base-200! hover:bg-base-300!"
                        />
                    </div>
                    <div>
                        <NavigateButton 
                            text={`${project.live ? 'Demo' : 'Unavailable'}`}
                            href={project.live || ''}
                            type="rectangle"
                            otherSite={true}
                            className={`${!project.live ? 'bg-base-100 pointer-events-none' : 'bg-base-200! hover:bg-base-300!'}`}
                        />
                    </div>
                </div>

                {/* SECTIONS */}
                <div className="px-1 xl:px-10 mt-15">
                    {/* Overview Section */}
                    <section className="flex flex-col lg:flex-row gap-5 lg:gap-20 xl:gap-30 border-t border-base-content/20 py-20">
                       <h1 className="shrink-0 w-18 font-semibold font-bricolage">OVERVIEW</h1>
                        <p className="text-sm text-base-content/80 font-normal">{project.overview}</p>
                    </section>

                    {/* Features Section */}
                    <section className="flex flex-col lg:flex-row gap-5 lg:gap-20 xl:gap-30 border-t border-base-content/20 py-20">
                       <h1 className="shrink-0 w-18 font-semibold font-bricolage">FEATURES</h1>

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
                    </section>

                    {/* Overview Section */}
                    <section className="flex flex-col lg:flex-row gap-5 lg:gap-20 xl:gap-30 border-t border-base-content/20 py-20">
                        <h1 className="shrink-0 w-18 font-semibold font-bricolage">STACK</h1>
                        <p className="text-sm text-base-content/80 font-normal">{project.overview}</p>
                    </section>

                    {/* Gallery */}
                    <section className="flex flex-col lg:flex-row gap-5 lg:gap-20 xl:gap-30 border-t border-base-content/20 py-20">
                        <h1 className="shrink-0 w-18 font-semibold font-bricolage">Gallery</h1>
                           
                    </section>
                </div>
                
            </div>

            {/* Section Navigation */}
            <div className="hidden lg:block w-40 sticky top-10 self-start z-10">
                <p className="text-sm font-bricolage font-semibold text-base-content/70">
                    OVERVIEW
                </p>
                
            </div>
        </div>
    )
};