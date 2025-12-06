import { Icon } from "@iconify/react"

type QuickAccess = {
    text?: string;
    icon?: string;
    customStyle?: string;
    href?: string;
    withStyle: boolean;
};

const quickAccess: QuickAccess[] = [
    {icon: "ri:github-fill", withStyle: true, href: "www.github.com"},
    {icon: "mdi:linkedin", withStyle: true, href: "www.linkedin.com"},
    {text: "Email", withStyle: true, href: "www.linkedin.com", customStyle: "!px-5"},
    {text: "(+69) 961 365 5723", withStyle: false},
];

const QuickAccess = () => {
    return (
        <div className="w-full flex items-center gap-4">
            {quickAccess.map((element, index) => (
                <button
                    key={`${index} - ${element.icon}`} 
                    className={
                        `
                        w-fit h-fit p-2 cursor-pointer text-base-content/80
                        ${element.withStyle && 'bg-base-200 border border-base-content/20 rounded-md'}
                        ${element.customStyle}
                        hover:scale-105 hover:bg-base-100 hover:text-base-content active:bg-base-100/20
                        `
                    }
                >
                    {element.icon && <Icon icon={element.icon && element.icon} width="24" height="24" />}
                    {element.text}
                </button>
            ))}
        </div>
    );
};

export default QuickAccess;