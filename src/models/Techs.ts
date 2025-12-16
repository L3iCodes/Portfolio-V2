import mongoose, {Schema} from "mongoose";

export interface TechProps {
    id: string;
    name: string;
    icon: string;
    color: string;
};

const TechSchema: Schema = new mongoose.Schema({
    key: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true, default:'fluent:border-none-24-regular'},
    color: { type: String, required: true, default: '' },
}, { timestamps: true });

const Technology = mongoose.models.Technology || mongoose.model("Technology", TechSchema);
export default Technology;