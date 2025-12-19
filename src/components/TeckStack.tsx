import { Icon } from '@iconify/react'
import type { TechStackItems } from "../lib/constants"
import { fetchTechnologies } from '../actions/tech.actions';

interface TechStackProps {
    technology: string[];
    className?: string;
};

const TechStack = async ({technology, className}: TechStackProps) => {
    const technologies = await fetchTechnologies();

    return(
        <div className={`${className} w-full grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5`}>
            {technology.map((tech, index) => (
                <TechStackCard
                    key={`${index}-${technologies[tech].key}`}
                    name={technologies[tech].name}
                    icon={technologies[tech].icon}
                    color={technologies[tech].color}
                />
            ))}
        </div>
    );
};

export default TechStack;

export const TechStackCard = ({name, icon, color, className}: TechStackItems & { className?: string }) => {
    return(
        <div 
            className={
                `${className}
                flex gap-2 items-center text-sm text-base-content
                transition-all ease-in
                hover:scale-105
                `
            }
        >   
            <div 
                className={`p-1 rounded-lg bg-base-100 border border-base-content/20`}
                style={{ backgroundColor: color }}
            >
                <Icon 
                    icon={icon || 'fluent:border-none-24-regular'} 
                    width="35" 
                    height="35" 
                />
            </div>
            
            <p>{name}</p>
        </div>
    );
};