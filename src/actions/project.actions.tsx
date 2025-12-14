'use server';

import { cache } from "react";
import Project, { ProjectType } from "../models/Projects";
import { ProjectFormData } from "../app/(admin)/admin/hook/useProjectForm";
import { uploadToCloudinary } from "./upload";

export async function fetchProject(): Promise<ProjectType[]> {
    try{
        // (.lean()) Return JSON Object
        const data = await Project.find({}).lean();

        return data.map((p:any) => ({
            ...p,
            _id: p._id.toString()
        })) as ProjectType[];

    }catch(error){
        throw new Error(`Something went wrong while fetching the projects`)
    };
};

export const fetchProjectbyId = cache(async (id: string): Promise<ProjectType> => {
    try {
        const data = await Project.findById(id).lean();

        return {
            ...data,
            _id: data._id.toString(), // serialize ObjectId
        } as ProjectType;

    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong while fetching the project");
    };
});


export const addProject = async (dataForm: ProjectFormData): Promise<void> => {
    try{
        await Project.create({
            title: dataForm.title,
            subtitle: dataForm.subtitle,
            colorTheme: dataForm.colorTheme,
            coverImg: dataForm.coverImg,
            github: dataForm.github,
            link: dataForm.link,
            overview: dataForm.overview,
            features: dataForm.features,
            technologies: dataForm.technologies,
            gallery: dataForm.gallery,
            featured: dataForm.featured,
        })
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong while adding project");
    }
};