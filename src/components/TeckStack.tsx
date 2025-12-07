import { Icon } from '@iconify/react'
import { featuredStack, allStack } from "../lib/constants"
import type { TechStackItems } from "../lib/constants"

interface TechStackProps {
    option?: 'all' | 'featured'
    className?: string;
};

const TechStack = ({option = "all", className}: TechStackProps) => {
    return(
        <div className={`${className} w-full grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5`}>
            {option === 'all'
                ? 
                allStack.map(stack => (
                    <TechStackCard
                        key={stack.name}
                        name={stack.name} 
                        icon={stack.icon} 
                        color={stack.color}
                    />
                ))
                :
                featuredStack.map(stack => (
                    <TechStackCard
                        key={stack.name}
                        name={stack.name} 
                        icon={stack.icon} 
                        color={stack.color}
                    />
                ))
            }
        </div>
    );
};

export default TechStack;


const TechStackCard = ({name, icon, color}: TechStackItems) => {
    return(
        <div 
            className={
                `
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
                    icon={icon} 
                    width="35" 
                    height="35" 
                />
            </div>
            
            <p>{name}</p>
        </div>
    );
};