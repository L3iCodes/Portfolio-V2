import { useState } from "react";
import TechStack from "../components/TechStack";
import { TechProps } from "@/src/models/Techs";
import { addTechnology, deleteTechnology, editTechnology } from "@/src/actions/tech.actions";

interface TechStackInfoProps {
    formData: TechProps;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    editMode: boolean;
    onReset?: () => void;
    onSuccess?: () => void;
}

const TechStackInfoForm = ({ formData, handleChange, editMode, onReset, onSuccess }: TechStackInfoProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try{
            if (editMode) {
                await editTechnology(formData);
                onSuccess?.();
            } else {
                await addTechnology(formData);
                onSuccess?.();
            }
        }catch (error){
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-[300px] shrink-0 bg-base-100 border border-base-content/20 p-4 flex flex-col gap-5 rounded-sm h-fit">
            <h1 className="font-semibold mb-2 border-b border-base-content/10 pb-2">Tech Stack Information</h1>
            <InputGroup label="Tech Name">
                 <input 
                    type="text" 
                    name="name" 
                    className="input-base"
                    onChange={handleChange} 
                    placeholder="React"
                    value={formData.name}
                    required={true}
                />
            </InputGroup>

            <InputGroup label="Icon">
                 <input 
                    type="text" 
                    name="icon" 
                    className="input-base" 
                    onChange={handleChange} 
                    placeholder="moon:icon/fill"
                    value={formData.icon}
                    required={true}
                />
            </InputGroup>
            
            <InputGroup label="Color">
                <input 
                    type="color" 
                    name="color" 
                    onChange={handleChange} 
                    value={formData.color}
                />
            </InputGroup>

            <InputGroup 
                label="Sample" 
                className="p-2 w-full flex flex-col items-center gap-2 justify-center border-dashed border border-base-content/30"
            >
                <TechStack 
                    name={formData.name}
                    icon={formData.icon}
                    color={formData.color}
                    className="p-4"
                />
            </InputGroup>

            <div className="w-full flex gap-2 justify-end">
                {editMode 
                    ? (
                        <>
                            <button 
                                type="button"
                                className="px-3 py-2 text-sm border border-base-content/20 bg-base-300 hover:bg-base-100 disabled:opacity-90 disabled:bg-base-300 cursor-pointer"
                                onClick={onReset}
                            >
                                Close
                            </button>

                            <button 
                                type="button"
                                className="px-3 py-2 text-sm border border-base-content/20 bg-amber-950 hover:bg-amber-700 disabled:opacity-90 disabled:bg-base-300 cursor-pointer"
                                onClick={() => {
                                    deleteTechnology(formData.id);
                                    onSuccess?.();
                                }}
                            >
                                Delete
                            </button>

                            <button 
                                type="submit"
                                className="px-10 py-2 text-sm border border-base-content/20 bg-base-300 hover:bg-base-100 disabled:opacity-90 disabled:bg-base-300 cursor-pointer"
                            >
                                Edit
                            </button>
                        </>
                    )
                    : (
                        <button 
                            type="submit"
                            className="px-3 py-2 text-sm border border-base-content/20 bg-base-300 hover:bg-base-100 disabled:opacity-90 disabled:bg-base-300 cursor-pointer"
                        >
                            Add New Tech
                        </button>
                    )
                }
            </div>
    </form>
  )
}

// Helper component
const InputGroup = ({ label, children, className }: { label: string, className?:string, children: React.ReactNode }) => (
    <div className={`${className}`}>
        <label className={`font-medium text-xs text-base-content/90 mb-1 block`}>{label}</label>
        {children}
    </div>
);

export default TechStackInfoForm