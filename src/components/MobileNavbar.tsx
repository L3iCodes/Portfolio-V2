'use client'

import { Icon } from "@iconify/react"
import { useState } from "react"
import SideNavbar from "./SideNavbar"

const MobileNavbar = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <nav 
            className="md:hidden w-full h-20 flex items-center gap-2 p-3 bg-base-200 rounded-t-sm border border-base-content/20 sticky top-0 left-0 z-100">
            <div className="w-10 h-10 ring-0 bg-base-content rounded-full"/>
            <h1 
                className={
                    `
                    text-md text-base-content/80 font-semibold font-bricolage
                    hover:text-base-content active:text-base-content/10 cursor-pointer
                    `
                }
            >
                Wilhelm
            </h1>

            <div 
                onClick={() => setOpenNav(s => !s)}
                className={
                    `
                    ml-auto flex p-2 border border-base-content/20 rounded-xs cursor-pointer
                    transition-all ease-in duration-100
                    hover:bg-base-100 
                    ${openNav ? "rotate-90" : "rotate-0"}
                    `
                }
            >
                <Icon icon="stash:burger-classic" width="24" height="24" />
            </div>

            <SideNavbar
                onNavigate={() => setOpenNav(false)}
                className={
                    `
                    flex! fixed top-0 bg-base-100 border border-base-content/20 h-screen
                    transition-all ease-in-out duration-300
                    ${openNav ? "right-0" : "-right-100"}
                    `
                }
            />
        </nav>
    )
}

export default MobileNavbar