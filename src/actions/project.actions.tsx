import { cache } from "react";
import Project, { ProjectType } from "../models/Projects";

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
        console.log("Fetching Data: ", id);
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