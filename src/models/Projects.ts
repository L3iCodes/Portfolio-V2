import mongoose, { Schema } from "mongoose";
import { projectCoverColors } from "../lib/styles";

export type ProjectType = {
    _id: string;
    title: string;
    subtitle: string;
    coverImg?: string;
    colorTheme: projectCoverColors
    overview: string;
    features: {name:string; desc:string}[];
    technologies: string[];
    github: string;
    link?:string;
    gallery?: string[];
    featured: boolean;
};

const FeatureSchema: Schema = new mongoose.Schema({
    name: { type:String, required:true },
    desc: { type:String, required:true },
});

const ProjectSchema: Schema = new mongoose.Schema({
    title: { type:String, required:true },
    subtitle: { type:String, required:true },

    coverImg: { type:String, required:true },
    colorTheme: { type:String, enum: ['gray', 'blue', 'purple', 'green'], default:'gray'},

    github: { type:String, required:true },
    link: { type:String },

    overview: { type:String, required:true },
    features: { type:[FeatureSchema], default: [] },
    technologies: { type: [String], default:[] },
    featured: { type:Boolean, default:false },
    gallery: { type:[String]},
});

const Project = mongoose.models.projects || mongoose.model('projects', ProjectSchema);
export default Project;