'use client';

import { 
  borderColors, 
  projectCoverStyles, 
  projectCoverColors 
} from "@/src/lib/styles";
import { ProjectFormData, Feature } from "../hook/useProjectForm";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { addProject, deleteProject, editProject } from "@/src/actions/project.actions";
import { uploadToCloudinary } from "@/src/actions/upload";
import { useRouter } from 'next/navigation';
import { fetchTechnologies } from "@/src/actions/tech.actions";
import { TechStackItems } from "@/src/lib/constants";

// Define what this component needs from the parent
interface ProjectFormProps {
    formData: ProjectFormData;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    galleryInputRef: React.RefObject<HTMLInputElement | null>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setColorTheme: (theme: projectCoverColors) => void;
    handleCoverImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    features: {
        add: () => void;
        remove: (index: number) => void;
        update: (index: number, field: keyof Feature, value: string) => void;
    };
    handleTechnologySelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
    galleryImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFeatureCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
    mode: 'add' | 'edit';
    projectId?: string;
    data?: ProjectFormData;
}

const ProjectInfoForm = ({ 
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

    mode,
    projectId,
    data
}: ProjectFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [filteredTech, setFilteredTech] = useState<Record<string, TechStackItems>>({});
    const router = useRouter();

    useEffect(() => {
        const getTechnologies = async () => {
            const technologies = await fetchTechnologies();
            setFilteredTech(technologies);
        };
        getTechnologies();
    }, []);

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();

        const filtered = Object.fromEntries(
                Object.entries(filteredTech).filter(([_key, tech]) => tech.name.toLowerCase().includes(value)
                )
            );

        setFilteredTech(filtered);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try{
            // Upload cover image
            let coverUrl = formData.coverImg;

            // Only upload if it changed
            if (formData.coverImg !== data?.coverImg) {
                const coverResult = await uploadToCloudinary(formData.coverImg);
                coverUrl = coverResult?.secure_url || '';
            }

            // Upload gallery images
            let galleryUrls: string[] = formData.gallery || [];
            if (formData.gallery && formData.gallery.length > 0 && (formData.gallery !== data?.gallery)) {
                const galleryResults = await Promise.all(
                    formData.gallery.map(img => uploadToCloudinary(img))
                );
                galleryUrls = galleryResults.map(r => r?.secure_url || '');
            }

            const payload = {
                ...formData,
                coverImg: coverUrl,
                gallery: galleryUrls,
            };

            if (mode === 'add') {
                await addProject(payload);
            } else {
                await editProject(projectId!, payload);
            }
            
            router.push('/admin/projects')
        }catch (error){
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        setIsSubmitting(true);

        try{
            if(projectId) await deleteProject(projectId);
            router.push('/admin/projects')
        }catch (error){
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full lg:w-[300px] shrink-0 bg-base-100 border border-base-content/20 p-4 flex flex-col gap-5 rounded-sm h-fit">
            <h1 className="font-semibold mb-2 border-b border-base-content/10 pb-2">Project Information</h1>
            
            <InputGroup label="Title">
                <input 
                    type="text" 
                    name="title" 
                    className="input-base" 
                    onChange={handleChange}
                    placeholder="Project Name"
                    value={formData.title}
                    required={true}
                />
            </InputGroup>

            <InputGroup label="Subtitle">
                <input 
                    type="text" 
                    name="subtitle" 
                    className="input-base" 
                    onChange={handleChange}
                    placeholder="Short tagline"
                    value={formData.subtitle}
                    required={true}
                />
            </InputGroup>

            {/* Color Theme */}
            <div>
                <label className="text-xs font-medium text-base-content/90 mb-2 block">Background Colors</label>
                <div className="flex justify-between gap-1 flex-wrap">
                    {Object.entries(projectCoverStyles).map(([key, value]) => {
                    const k = key as projectCoverColors;
                    const isSelected = formData.colorTheme === k;
                    return (
                        <button
                            type="button"
                            key={k}
                            className={
                                `
                                h-10 w-15 rounded-sm transition-all duration-200 relative
                                ${isSelected ? `border ${borderColors[k]} scale-105` : 'hover:scale-105 hover:opacity-90'}
                                `
                            }
                            style={{ background: value }}
                            onClick={() => setColorTheme(k)}
                        />
                    );
                    })}
                </div>
            </div>

            {/* Image Upload */}
            <div>
                <label className="text-xs font-medium text-base-content/90 mb-2 block">Cover Image</label>
                <input 
                    type="file" 
                    name="coverImg" 
                    accept="image/*" 
                    ref={fileInputRef}
                    onChange={handleCoverImgUpload} 
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-base-200 file:text-base-content hover:file:bg-base-300 text-xs w-full text-base-content/60 border border-base-content/20 rounded-sm cursor-pointer"
                />
            </div>

            <InputGroup label="Github">
                <input 
                    type="text" 
                    name="github" 
                    className="input-base" 
                    onChange={handleChange}
                    placeholder="https://github.com/..."
                    value={formData.github}
                    required={true}
                />
            </InputGroup>

            <InputGroup label="Live Link">
                <input 
                    type="text" 
                    name="link" 
                    className="input-base" 
                    onChange={handleChange}
                    placeholder="https://link.com/.."
                    value={formData.link}
                />
            </InputGroup>

            <InputGroup label="Overview">
                <textarea 
                    name="overview" 
                    className="input-base min-h-[100px] resize-y py-2" 
                    onChange={handleChange}
                    placeholder="Write a brief overview..."
                    value={formData.overview}
                    required={true}
                />
            </InputGroup>
            
            {/* Featured */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-medium text-base-content/90">Features</label>
                    <button 
                        type="button" 
                        onClick={features.add}
                        className="text-[10px] bg-base-200 px-2 py-1 rounded-sm hover:bg-base-300 transition-colors font-semibold"
                    >
                        + ADD
                    </button>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
  
                </div>
                <details className="collapse bg-base-200 border border-dashed border-base-content/10 rounded-sm" name="my-accordion-det-1" open>
                    <summary className="collapse-title text-xs text-base-content/40 italic ">{formData.features.length < 1 ? 'No features added yet' : `Features: ${formData.features.length}`}</summary>
                    <div className="collapse-content space-y-3 text-sm">
                        {formData.features.map((feature, index) => (
                            <div key={index} className="flex gap-2 items-start animate-in fade-in slide-in-from-left-2 duration-300">
                                <div className="flex-1 space-y-1">
                                    <input 
                                        type="text" 
                                        placeholder="Feature Name"
                                        className="input-base py-1"
                                        value={feature.name}
                                        onChange={(e) => features.update(index, 'name', e.target.value)}
                                    />
                                    <textarea 
                                        placeholder="Description"
                                        className="input-base py-1 min-h-[50px] resize-none"
                                        value={feature.desc}
                                        onChange={(e) => features.update(index, 'desc', e.target.value)}
                                    />
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => features.remove(index)}
                                    className="text-base-content/40 hover:text-red-500 pt-2 transition-colors"
                                    title="Remove"
                                >
                                    {/* Simple X Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </details> 
            </div>
            
            {/* Tech Stack */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-medium text-base-content/90">Features</label>
                    <input 
                        placeholder="Search for technology"
                        className="w-40! p-1!"
                        onChange={handleFilter}
                    />
                </div>
                <div className="h-80 grid grid-cols-3 p-1 auto-rows-min border border-base-content/10 overflow-auto gap-2">
                    {Object.entries(filteredTech).map(([key, value]) => (
                        <label 
                            key={key}
                            className={`
                                text-[10px] flex flex-col gap-1 items-center justify-center p-2 
                                border rounded-xs cursor-pointer
                                ${formData.technologies.includes(key) ? 'border-blue-500' : ' border-base-content/10'}
                            `}
                        >
                        <input
                            type="checkbox"
                            name="tech"
                            value={key}
                            checked={formData.technologies.includes(key)}
                            onChange={handleTechnologySelection}
                            className="hidden"
                        />

                        <Icon 
                            icon={value.icon || "fluent:border-none-24-regular"} 
                            width="35" 
                            height="35" 
                        />
                        {value.name}
                        </label>
                    ))}
                </div>
            </div>   

            {/* Gallery Upload */}
            <div>
                <label className="text-xs font-medium text-base-content/90 mb-2 block">Gallery</label>
                <input 
                    type="file" 
                    name="coverImg" 
                    accept="image/*"
                    multiple 
                    ref={galleryInputRef}
                    onChange={galleryImageUpload} 
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-base-200 file:text-base-content hover:file:bg-base-300 text-xs w-full text-base-content/60 border border-base-content/20 rounded-sm cursor-pointer"
                />
            </div>

            {/* Featured Checkbox */}
            <div className="w-full flex items-center">
                <label className="text-xs font-medium text-base-content/90">Featured?</label>
                <input 
                    type="checkbox" 
                    name="featuredCheckBox" 
                    checked={formData.featured}                    
                    onChange={handleFeatureCheck} 
                    className="h-4"
                /> 
            </div>
            
            <div className="w-full flex gap-2">
                {mode === 'edit' &&  (
                    <button 
                        type="button"
                        className="ml-auto px-2 py-2 text-sm border border-base-content/20 bg-amber-950 hover:bg-amber-900 disabled:opacity-90 disabled:bg-base-300 cursor-pointer"
                        disabled={isSubmitting}
                        onClick={() => handleDelete()}
                >
                    {isSubmitting 
                        ? "Deleting"
                        : "Delete"
                    }
                </button>
                )}
                
                <button 
                    type="submit"
                    className="px-3 py-2 text-sm border border-base-content/20 bg-base-300 hover:bg-base-100 disabled:opacity-90 disabled:bg-base-300 cursor-pointer"
                    disabled={isSubmitting}
                >
                    {isSubmitting 
                        ? mode === 'edit' ? 'Updating Database' : 'Uploading to Database'
                        : mode === 'edit' ? 'Edit Project' : 'Add New Project'}
                </button>

                
            </div>
            
        </form>
    );
};

// Helper component
const InputGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div>
        <label className="font-medium text-xs text-base-content/90 mb-1 block">{label}</label>
        {children}
    </div>
);

export default ProjectInfoForm;