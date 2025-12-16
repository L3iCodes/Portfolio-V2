'use client'

import TechStackInfoForm from "../forms/TechStackInfoForm";
import useTechForm from "../hook/useTechForm";
import { useCallback, useEffect, useState } from "react";
import { fetchTechnologies } from "@/src/actions/tech.actions";
import { TechProps } from "@/src/models/Techs";
import TechStack from "../components/TechStack";

export default function TechStackPage() {
    const [technologies, setTechnologies] = useState<Record<string, TechProps> | null>(null);
    const { formData, setFormData, handleChange } = useTechForm();
    const [ editMode, setEditMode ]= useState(false);

    const fetchTech = useCallback(async () => {
        const data = await fetchTechnologies();
        setTechnologies(data);
    }, []);


    useEffect(() => {
        fetchTech();
    }, [fetchTech]);

    return (
        <div className="flex flex-col lg:flex-row gap-5 p-5">
            <TechStackInfoForm
                formData={formData}
                handleChange={handleChange}
                editMode={editMode}
                onReset={() => {
                    setEditMode(false);
                    setFormData({
                        id: "",
                        name: "",
                        icon: "",
                        color: "",
                    });
                }}
                onSuccess={() => {
                    fetchTech();
                    setEditMode(false);
                    setFormData({
                        id: "",
                        name: "",
                        icon: "",
                        color: "",
                    });
                }}
            />
            
            <div className="w-full p-5 lg:p-10 border border-base-content/20 bg-base-200 relative rounded-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                {technologies && (
                    Object.entries(technologies).map(([key, value]) => (
                        <TechStack 
                            key={key}
                            name={value.name}
                            icon={value.icon}
                            color={value.color}
                            className="p-2 cursor-pointer"
                            onClick={() => {
                                setEditMode(true);
                                setFormData(value);
                            }}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
