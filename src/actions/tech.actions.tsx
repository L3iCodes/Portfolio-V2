'use server';

import { dbConnect } from "../lib/db";
import Tech, { TechProps } from "../models/Techs";

export const fetchTechnologies = async () => {
    await dbConnect();
    
    try{
        // (.lean()) Return JSON Object
        const data = await Tech.find({}).lean();
        const techMap = data.reduce((acc, tech) => {
            acc[tech.key] = {
                id: tech._id.toString(),
                name: tech.name,
                icon: tech.icon,
                color: tech.color,
            };
            return acc;
        }, {} as Record<string, TechProps>)
        
        return techMap;
    }catch(error){
        throw new Error(`Something went wrong while fetching the technologies`)
    };
};

export const addTechnology = async (dataForm: TechProps) => {
    await dbConnect();

    try{
        await Tech.create({
            key: dataForm.name
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "")
                .replace(/[^a-z0-9]/g, ""),
            name: dataForm.name,
            icon: dataForm.icon,
            color: dataForm.color,
        })
    }catch(error){
        throw new Error(`Something went wrong while adding the technology`)
    };
}

export const editTechnology = async (dataForm: TechProps) => {
    await dbConnect();

    try{
        await Tech.findByIdAndUpdate(
            dataForm.id,
            {
                $set: {
                    key: dataForm.name
                        .toLowerCase()
                        .trim()
                        .replace(/\s+/g, "")
                        .replace(/[^a-z0-9]/g, ""),
                    name: dataForm.name,
                    icon: dataForm.icon,
                    color: dataForm.color,
                }
            }
        )
    }catch(error){
        console.log(error)
        // throw new Error(`Something went wrong while adding the technology`)
    };
}

export const deleteTechnology = async (id: string) => {
    await dbConnect();
    
    try{
        await Tech.findByIdAndDelete(id);
    }catch(error){
        console.log(error)
        // throw new Error(`Something went wrong while adding the technology`)
    };
}