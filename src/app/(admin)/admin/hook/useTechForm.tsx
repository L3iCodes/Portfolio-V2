import { TechProps } from "@/src/models/Techs";
import { useState } from "react";

const useTechForm = () => {
    const [formData, setFormData] = useState<TechProps>({
        id: "",
        name: "",
        icon: "",
        color: "#000000",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        console.log(formData)
    };

    return({ 
        formData,
        setFormData,
        handleChange,
    });
};

export default useTechForm;