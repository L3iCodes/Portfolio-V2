'use client'
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation";

interface ButtonProps {
    text?: string;
    type: 'rectangle' | 'square'
    className?: string;
    icon?: string;
    onClick?: () => void;
};

const Button = ({ text, type = 'square', className, icon, onClick } : ButtonProps) => {
    const style = {
        "rectangle": 'py-2 px-4',
        "square": 'p-2'
    };

    return (
        <button 
            onClick={onClick}
            className={
                `
                ${className} ${style[type]} ml-auto w-fit h-fit flex items-center gap-2 bg-base-300 rounded-md border border-base-content/20 text-sm text-base-content/80 cursor-pointer
                hover:bg-base-100 hover:text-base-content active:bg-base-100/20 
                `
            }
        >
            {text}
            {icon && (<Icon icon={icon}/>)}
        </button>
    );
};

export default Button

interface NavigateButtonProps {
    text?: string;
    type: 'rectangle' | 'square';
    className?: string;
    icon?: string;
    href: string;
    otherSite?: boolean;
}

export const NavigateButton = ({ text, type, icon, className, href, otherSite = false }: NavigateButtonProps) => {
  const router = useRouter();

  return (
    <Button
      text={text}
      type={type}
      icon={icon}
      className={className}
      onClick={() => otherSite ? window.open(href) : router.push(href)}
    />
  );
}