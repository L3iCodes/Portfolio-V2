import { useState, useRef } from "react";
import { projectCoverColors } from "@/src/lib/styles";

export interface Feature {
  name: string;
  desc: string;
}

export interface ProjectFormData {
    title: string;
    subtitle: string;
    colorTheme: projectCoverColors | null;
    coverImg: string | ArrayBuffer | null;
    github: string;
    link?: string;
    overview: string;
    features: Feature[];
    technologies: string[];
    gallery?: string[];
    featured: boolean;
}

export const useProjectForm = () => {
    const [formData, setFormData] = useState<ProjectFormData>({
        title: "",
        subtitle: "",
        colorTheme: null,
        coverImg: null,
        github: "",
        link: "",
        overview: "",
        features: [],
        technologies: [],
        gallery: [],
        featured: false
    });
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const setColorTheme = (theme: projectCoverColors) => {
        setFormData(prev => ({ ...prev, colorTheme: theme }));
    };

    const handleCoverImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setFormData(prev => ({ ...prev, coverImg: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    const addFeature = () => {
        setFormData(prev => ({
            ...prev,
            features: [...prev.features, { name: "", desc: "" }]
        }));
    };

    // Remove a feature by index
    const removeFeature = (index: number) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index)
        }));
    };

    // Update a specific feature's field
    const handleFeatureChange = (index: number, field: keyof Feature, value: string) => {
        setFormData(prev => {
            const newFeatures = [...prev.features];
            newFeatures[index] = { ...newFeatures[index], [field]: value };
        return { ...prev, features: newFeatures };
        });
    };

    const handleTechnologySelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(formData.technologies)
        const value = e.target.value;

        setFormData(prev => {
            const alreadySelected = prev.technologies.includes(value);

            return {
            ...prev,
            technologies: alreadySelected
                ? prev.technologies.filter(t => t !== value) // remove
                : [...prev.technologies, value]              // add
            };
        });
    };

    return({
        formData,
        fileInputRef,
        handleChange,
        handleCoverImgUpload,
        setColorTheme,
        features: {
            add: addFeature,
            remove: removeFeature,
            update: handleFeatureChange
        },
        handleTechnologySelection
    });
};