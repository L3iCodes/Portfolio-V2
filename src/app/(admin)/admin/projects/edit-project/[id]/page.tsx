'use client'

import { useParams } from 'next/navigation'
import ProjectPreview from "../../../components/ProjectPreview";
import ProjectInfoForm from "../../../forms/ProjectInfoForm";
import { ProjectFormData, useProjectForm } from "../../../hook/useProjectForm";
import { useEffect, useState } from 'react';
import { fetchProjectbyId } from '@/src/actions/project.actions';


export default function EditProjectPage() {
    const { id } = useParams<{ id: string }>();
    const [originalData, setOriginalData] = useState<ProjectFormData>()
    const { 
        formData, 
        setFormData,
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

    useEffect(() => {
        const fetchData = async () => {
            const projectData = await fetchProjectbyId(id);
            setFormData({
                title: projectData.title,
                subtitle: projectData.subtitle,
                colorTheme: projectData.colorTheme,
                coverImg: projectData.coverImg,
                github: projectData.github,
                link: projectData.link || "",
                overview: projectData.overview,
                features: projectData.features,
                technologies: projectData.technologies,
                gallery: projectData.gallery,
                featured: projectData.featured
            })

            setOriginalData({
                title: projectData.title,
                subtitle: projectData.subtitle,
                colorTheme: projectData.colorTheme,
                coverImg: projectData.coverImg,
                github: projectData.github,
                link: projectData.link || "",
                overview: projectData.overview,
                features: projectData.features,
                technologies: projectData.technologies,
                gallery: projectData.gallery,
                featured: projectData.featured
            })
        }
        fetchData();
    }, [id])

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

                mode='edit'
                projectId={id}
                data={originalData}
            />

            {/* ==== PREVIEW SIDE ==== */}
            <ProjectPreview formData={formData}/>
        </div>
    );
};
