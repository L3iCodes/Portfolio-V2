'use client'

import Section from "@/src/components/Section";
import { 
  borderColors, 
  pageBackgroundEffects, 
  projectCoverColors, 
  projectCoverStyles, 
  shadowColors 
} from "@/src/lib/styles";
import { useProjectForm } from "../../hook/useProjectForm";
import ProjectLink from "@/src/components/ProjectLink";
import ProjectInfoForm from "../../forms/ProjectInfoForm";
import ProjectPreview from "../../components/ProjectPreview";


export default function NewProjectPage() {
    const { 
        formData, 
        fileInputRef, 
        handleChange, 
        setColorTheme, 
        handleCoverImgUpload, 
        features 
    } = useProjectForm();

    return (
        <div className="flex flex-col lg:flex-row gap-5 p-5">
        
            {/* ==== FORM SIDE ==== */}
            <ProjectInfoForm 
                formData={formData}
                fileInputRef={fileInputRef}
                handleChange={handleChange}
                setColorTheme={setColorTheme}
                handleCoverImgUpload={handleCoverImgUpload}
                features={features}
            />

            {/* ==== PREVIEW SIDE ==== */}
            <ProjectPreview formData={formData}/>
        </div>
    );
};
