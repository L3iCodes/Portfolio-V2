import { Icon } from "@iconify/react";

interface TechStackProps{
    name: string; 
    icon: string;
    color: string;
    className?: string;
    onClick?: () => void;
}

const TechStack = ({ name, icon, color, className, onClick }: TechStackProps) => {
    return(
        <div 
            className={
                `
                flex flex-col gap-2 items-center text-sm text-base-content
                transition-all ease-in
                hover:scale-105
                `
            }
            onClick={onClick}
        >   
            <div 
                className={`${className} rounded-lg bg-base-100 border border-base-content/20`}
                style={{ backgroundColor: color }}
            >
                <Icon 
                    icon={icon || 'fluent:border-none-24-regular'} 
                    width="35" 
                    height="35" 
                />
            </div>
            
            <p>{name || 'Sample'}</p>
        </div>
    )
};

export default TechStack;