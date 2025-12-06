import { Icon } from '@iconify/react'

type TechStack = {
    name: string;
    icon: string;
    color?: string;
};

interface TechStackProps {
    option?: 'all' | 'featured'
};

 const allStack: TechStack[] = [
    { name: "JavaScript", icon: "material-symbols:javascript", color: "#F7DF1E" },
    { name: "NextJS", icon: "ri:nextjs-fill", color: "#181717" },
    { name: "NodeJS", icon: "mdi:nodejs", color: "#68A063" },
    { name: "Python", icon: "proicons:python", color: "#3776AB" },
    { name: "GitHub", icon: "meteor-icons:github", color: "#333333" },
    { name: "React", icon: "akar-icons:react-fill", color: "#61DAFB" },
    { name: "ExpressJS", icon: "simple-icons:express", color: "#F7DF1E" },
    { name: "Tensorflow", icon: "simple-icons:tensorflow", color: "#FF6F00" },
    { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
    { name: "TailwindCSS", icon: "mdi:tailwind", color: "#06B6D4" },
    { name: "MongoDB", icon: "lineicons:mongodb", color: "#47A248" },
    { name: "MySQL", icon: "lineicons:mongodb", color: "#00758F" },
    { name: "HuggingFace", icon: "simple-icons:huggingface", color: "#FFB936" },
    { name: "Figma", icon: "solar:figma-bold", color: "#FF4B00" },
];

const featuredStack: TechStack[] = [
    { name: "React", icon: "akar-icons:react-fill", color: "#4A90E2" },
    { name: "NextJS", icon: "ri:nextjs-fill", color: "#F9A825" },
    { name: "NodeJS", icon: "mdi:nodejs", color: "#68A063" },
    { name: "ExpressJS", icon: "simple-icons:express", color: "#F9A825" },
    { name: "MongoDB", icon: "lineicons:mongodb", color: "#47A248" },
    { name: "MySQL", icon: "lineicons:mongodb", color: "#00758F" },
    { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
    { name: "Figma", icon: "solar:figma-bold", color: "#A948FF" },
];

const TechStack = ({option = "all"}: TechStackProps) => {
    return(
        <div className='w-full grid grid-cols-3 xl:grid-cols-5 gap-5'>
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

const TechStackCard = ({name, icon, color}: TechStack) => {
    return(
        <div className='flex gap-2 items-center text-sm text-base-content'>   
            <div 
                className='p-1 rounded-lg bg-base-100 border border-base-content/20'
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