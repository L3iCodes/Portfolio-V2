'use client'

import { Icon } from "@iconify/react"
import { quickAccess } from "../lib/constants";
import { useRouter } from "next/navigation";

const QuickAccess = () => {
    const router = useRouter();
    return (
        <div className="w-full flex items-center gap-4">
            {quickAccess.map((element, index) => (
                <button
                    key={`${index} - ${element.icon}`} 
                    onClick={() => element.href && window.open(element.href)}
                    className={
                        `
                        w-fit h-fit p-2 cursor-pointer text-base-content/80
                        ${element.withStyle && 'bg-base-200 border border-base-content/20 rounded-md'}
                        ${element.customStyle}
                        transition-all ease-in
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

