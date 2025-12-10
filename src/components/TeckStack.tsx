import { Icon } from '@iconify/react'
import { featuredStack, allStack } from "../lib/constants"
import type { TechStackItems } from "../lib/constants"

interface TechStackProps {
    option?: 'all' | 'featured'
    className?: string;
};

const TechStack = ({option = "all", className}: TechStackProps) => {
    const stackToRender = option === "all" ? Object.values(allStack) : Object.values(featuredStack);

    return(
        <div className={`${className} w-full grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5`}>
            {stackToRender.map((stack) => (
                <TechStackCard
                    key={stack.name}
                    name={stack.name}
                    icon={stack.icon}
                    color={stack.color}
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