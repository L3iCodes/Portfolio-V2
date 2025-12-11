'use client'

import { Icon } from "@iconify/react"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

interface DesktopNavbarProps {
    className?: string;
    onNavigate?: () => void;
}

const AdminNavbar = ({ className, onNavigate }: DesktopNavbarProps) => {
    const pathName = usePathname();
    const router = useRouter();
    const navigation = [ 
        {name: "Dashboard", href: "/admin", icon: "bx:home-alt-2"},
        {name: "Projects", href: "/admin/projects", icon: "material-symbols:work-outline"},
        {name: "Tech Stack", href: "/admin/tech-stack", icon: "iconamoon:profile"},
    ]

    return (
        <nav className={`${className}  md:flex items-center w-full bg-base-200 rounded-sm border border-base-content/20 p-1 sticky top-0 left-0 z-100`}>
            {/* Profile */}
            <div 
                className={
                    `
                    flex cursor-pointer rounded-md border border-transparent
                    hover:bg-base-200 hover:border-base-content/20
                    `
                }
            >
            </div>

            {/* Navigation Buttons */}
            <ul className="flex w-full flex-row gap-4">
                {navigation.map(nav => (
                    <li 
                        key={nav.href}
                        onClick={() => {
                            onNavigate?.();
                            router.push(nav.href);
                        }}
                        className={
                            `
                            w-30 flex items-center p-2 gap-2 text-xs text-base-content/80 cursor-pointer rounded-xs border border-transparent
                            ${pathName === nav.href && 'bg-base-200 border border-base-content/20! text-base-content!  '}
                            hover:font-bold hover:text-base-content
                            `
                        }
                    >
                        <Icon icon={nav.icon} width="24" height="24" />
                        {nav.name}
                    </li>
                ))}
                    <li 
                        onClick={() => {
                            onNavigate?.();
                            router.push('/');
                        }}
                        className={
                            `
                            ml-auto
                            flex items-center p-2 gap-2 text-xs text-base-content/80 cursor-pointer rounded-xs border border-transparent
                            hover:bg-base-200 hover:border-base-content/20 hover:text-base-content active:bg-base-100
                            `
                        }
                    >
                        <Icon icon={"carbon:return"} width="24" height="24" />
                        Go to Portfolio
                    </li>
            </ul>
        </nav>
    );
};

export default AdminNavbar