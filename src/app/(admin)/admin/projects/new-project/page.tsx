'use client'
import { useProjectForm } from "../../hook/useProjectForm";
import ProjectInfoForm from "../../forms/ProjectInfoForm";
import ProjectPreview from "../../components/ProjectPreview";


export default function NewProjectPage() {
    const { 
        formData, 
        fileInputRef, 
        handleChange, 
        setColorTheme, 
        handleCoverImgUpload, 
        features, 
        handleTechnologySelection,
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
                handleTechnologySelection={handleTechnologySelection}
            />

            {/* ==== PREVIEW SIDE ==== */}
            <ProjectPreview formData={formData}/>
        </div>
    );
};
