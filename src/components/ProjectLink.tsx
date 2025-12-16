import { ProjectType } from "../models/Projects"
import { NavigateButton } from "./Button"


const ProjectLink = ({ github, link }: Pick<ProjectType, "github" | "link">) => {
  return (
    <div className="w-full h-16 flex items-center gap-2 bg-base-100 border border-base-content/20 p-3 rounded-sm">
        <div className="flex-1">
            <h2 className="text-sm font-bold">DEMO & CODE</h2>
            <p className="text-xs text-base-content/50">View the full information here</p>
        </div>
        <div>
            <NavigateButton 
                text="GitHub"
                icon="ri:github-fill"
                href={github}
                type="rectangle"
                otherSite={true}
                className="bg-base-200! hover:bg-base-300!"
            />
        </div>
        <div>
            <NavigateButton
                text={`${link ? 'Demo' : 'Unavailable'}`}
                href={link || ''}
                type="rectangle"
                otherSite={true} // OPEN IN NEW TAB
                className={`${!link ? 'bg-base-100 pointer-events-none' : 'bg-base-200! hover:bg-base-300!'}`}
            />

        </div>
    </div>
  )
}

export default ProjectLink