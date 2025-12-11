import { pageBackgroundEffects, projectCoverStyles, shadowColors } from "@/src/lib/styles"
import { ProjectFormData } from "../hook/useProjectForm"
import ProjectLink from "@/src/components/ProjectLink"
import Section from "@/src/components/Section"

const ProjectPreview = ({ formData }: { formData: ProjectFormData }) => {
  
    return (
    <div className="flex-1 flex gap-10 p-5 lg:p-10 border border-base-content/20 bg-base-200 relative rounded-sm min-h-[80vh]">
        {/* BG Gradient */}
        {formData.colorTheme && (
            <div
                className="absolute inset-0 z-0"
                style={{ background: pageBackgroundEffects[formData.colorTheme] }}
            />
        )}

        <div className="flex-1 space-y-5 z-10">
            {/* Tile and Subtitle with Placeholders */}
            <div>
                <h1 className="text-4xl font-bold font-bricolage transition-all">
                    {formData.title || <span className="opacity-20 italic">Untitled Project</span>}
                </h1>
                <p className="text-base-content/50 transition-all">
                    {formData.subtitle || <span className="opacity-40 italic">Add a subtitle to describe your project...</span>}
                </p>
            </div>  

            {/* Cover Image / Header (With Placeholder State) */}
            <div 
                className={
                    `
                    flex items-center justify-center p-5 md:p-8 lg:p-10 border border-base-content/20 rounded-xs relative transition-all duration-300
                    ${!formData.coverImg ? 'bg-base-100/50 border-dashed' : ''}
                    `
                } 
            > 
                {formData.colorTheme && (
                    <div className="absolute inset-0 z-0" style={{background: projectCoverStyles[formData.colorTheme]}} />
                )}
                
                {formData.coverImg ? (
                    <div className={`rounded-sm w-full h-full ${formData.colorTheme ? shadowColors[formData.colorTheme] : ''} shadow-[0_-5px_35px_-5px_rgba(0,0,0,0.3)] relative aspect-video overflow-hidden`}>
                        <img 
                            src={formData.coverImg as string}
                            alt="Profile"
                            className={`w-full h-full object-cover`}
                        />
                    </div>
                ) : (
                // Placeholder for the image area
                <div className="w-full aspect-video flex flex-col items-center justify-center text-base-content/30 gap-2">
                    <p className="text-sm font-medium">Cover Image Preview</p>
                </div>
                )}
            </div>

            {/* Links */}
            {(formData.github || formData.link) ? (
                <ProjectLink github={formData.github} live={formData.link} />
            ) : (
                // Link Placeholder
                <div className="w-full h-16 flex items-center justify-center border border-dashed border-base-content/20 rounded-sm text-base-content/30 text-xs">
                    Links will appear here
                </div>
            )}

            <div className="px-1 xl:px-10 mt-15">
                {/* Overview Section */}
                <Section name="OVERVIEW" className={!formData.overview ? 'opacity-30' : ''}>
                    <p 
                        className={`text-sm ${formData.overview ? 'text-base-content/80 font-normal whitespace-pre-wrap' : 'opacity-30 font-normal italic'}`}
                    >
                        {formData.overview 
                            ? formData.overview 
                            : 'Project overview details will display here...'
                        }
                    </p>
                </Section>

                {/* Overview Section */}
                <Section name="FEATURES" className={formData.features.length < 1 ? 'opacity-30' : ''}>
                    {formData.features 
                        ? (
                            <ul className="w-full space-y-10">
                                {formData.features.map((feature, index) => (
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
                            </ul>)
                        : 'Feature list details will display here'
                    }
                </Section>
            </div>
        </div>
    </div>
  );
}

export default ProjectPreview;