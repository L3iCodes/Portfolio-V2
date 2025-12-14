'use client'
import { useProjectForm } from "../../hook/useProjectForm";
import ProjectInfoForm from "../../forms/ProjectInfoForm";
import ProjectPreview from "../../components/ProjectPreview";


export default function NewProjectPage() {
    const { 
        formData, 
        fileInputRef,
        galleryInputRef, 
        handleChange, 
        setColorTheme, 
        handleCoverImgUpload, 
        features, 
        handleTechnologySelection,
        galleryImageUpload,
        handleFeatureCheck,
    } = useProjectForm();

    return (
        <div className="flex flex-col lg:flex-row gap-5 p-5">
        
            {/* ==== FORM SIDE ==== */}
            <ProjectInfoForm 
                formData={formData}
                fileInputRef={fileInputRef}
                galleryInputRef={galleryInputRef}
                handleChange={handleChange}
                setColorTheme={setColorTheme}
                handleCoverImgUpload={handleCoverImgUpload}
                features={features}
                handleTechnologySelection={handleTechnologySelection}
                galleryImageUpload={galleryImageUpload}
                handleFeatureCheck={handleFeatureCheck}
            />

            {/* ==== PREVIEW SIDE ==== */}
            <ProjectPreview formData={formData}/>
        </div>
    );
};
