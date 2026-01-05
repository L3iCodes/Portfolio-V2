'use client'

import { Icon } from "@iconify/react"
import { quickAccess, QuickAccessItems } from "../lib/constants";
import { useState } from "react";

const QuickAccess = () => {
    const [copied, setCopied] = useState(false);

    const handleAction = (element: QuickAccessItems) => {
        if (!element.href) return;

        if (element.href.startsWith('mailto:')) {
            // Open the mail app
            window.location.href = element.href;
            
            // Copy the raw email to clipboard as a backup
            if (element.value) {
                navigator.clipboard.writeText(element.value);
                setCopied(true);
                // Reset the "Copied" status after 2 seconds
                setTimeout(() => setCopied(false), 5000);
            }
        } else {
            // Standard navigation for GitHub/LinkedIn/Resume
            window.open(element.href, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="w-full flex items-center gap-4 flex-wrap">
            {quickAccess.map((element, index) => (
                <button
                    key={`${index} - ${element.icon}`} 
                    onClick={() => handleAction(element)}
                    rel="noopener noreferrer"
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
                    {/* Tooltip for "Copied!" feedback */}
                    {element.text === "Email" && copied && (
                        <span className="w-full absolute -top-6 left-1/2 -translate-x-1/2 bg-success text-success-content text-xs py-1 px-2 rounded shadow-lg animate-bounce">
                            Email copied!
                        </span>
                    )}

                    {element.icon && <Icon icon={element.icon} width="24" height="24" />}
                    {element.text}
                </button>
            ))}
        </div>
    );
};

export default QuickAccess;

