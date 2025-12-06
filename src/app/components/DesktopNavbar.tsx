'use client'

import { Icon } from "@iconify/react"
import { usePathname } from "next/navigation"

const navigation = [
    {name: "Home", href: "/", icon: "bx:home-alt-2"},
    {name: "Projects", href: "/projects", icon: "material-symbols:work-outline"},
    {name: "About", href: "/about", icon: "iconamoon:profile"},
];

const socials = [
    {icon: "ri:github-fill", href: "www.github.com"},
    {icon: "mdi:linkedin", href: "www.linkedin.com"},
    {icon: "ic:baseline-facebook", href: "www.facebook.com"},
];

const DesktopNavbar = () => {
    const pathName = usePathname();

    return (
        <nav className="hidden md:flex flex-col w-60 p-2">
            {/* Profile */}
            <div 
                className={
                    `
                        flex p-2 gap-3 cursor-pointer rounded-md
                        hover:bg-base-300
                    `
                }
            >
                <div className="w-10 h-10 ring-0 bg-base-content rounded-full "/>
                <div className="">
                    <h1 className="text-sm font-semibold font-bricolage">Jan Wilhelm Sy</h1>
                    <p className="text-xs font-light">Full Stack Developer</p>
                </div>
            </div>

            {/* Navigation Buttoms */}
            <ul className="space-y-2 mt-10">
                {navigation.map(nav => (
                    <li 
                        key={nav.href}
                        className={
                            `
                                flex items-center p-2 gap-2 text-xs text-base-content/80 cursor-pointer rounded-xs border border-transparent
                                ${pathName === nav.href && 'bg-base-200 border border-base-content/20! text-base-content!  '}
                                hover:bg-base-200 hover:border-base-content/20 hover:text-base-content active:bg-base-100
                            `
                        }
                    >
                        <Icon icon={nav.icon} width="24" height="24" />
                        {nav.name}
                    </li>
                ))}
            </ul>
            
            {/* Socials */}
            <div className="mt-auto flex flex-col gap-1 ">
                <p className="text-xs text-base-content/80">SOCIALS</p>
                <ul className="flex gap-1">
                    {socials.map(social => (
                        <li 
                            key={social.href}
                            className={
                                `
                                    w-fit h-fit p-1 cursor-pointer text-base-content/80
                                    border border-transparent rounded-md'
                                    hover:scale-105 hover:bg-base-200 hover:text-base-content hover:border-base-content/20 hover
                                    active:bg-base-100/20
                                `
                            }
                        >
                            <Icon icon={social.icon} width="20" height="20" />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default DesktopNavbar