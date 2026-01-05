'use client'

import { Icon } from "@iconify/react"
import { useState } from "react"
import SideNavbar from "./SideNavbar"
import Image from "next/image"
import Profile from "./img/Profile.jpg";
import { useRouter } from "next/navigation"

const MobileNavbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const router = useRouter();

    return (
        <nav 
            className="md:hidden w-full h-20 flex items-center gap-2 p-3 bg-base-200 rounded-t-sm border border-base-content/20 sticky top-0 left-0 z-100">
            
            <div className="h-full flex items-center gap-2" onClick={() => router.push('/')}>
                <button 
                    className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-base-content/20">
                    <Image
                        src={Profile}
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                        priority 
                    />
                </button>
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
            </div>
            

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

            {openNav && (
                <div 
                    className="absolute w-screen h-screen top-0 left-0 bg-transparent"
                    onClick={() => setOpenNav(false)}
                >
                </div>
            )}

            <SideNavbar
                onNavigate={() => setOpenNav(false)}
                className={
                    `
                    flex! fixed top-0 bg-base-100 border border-base-content/20 h-screen
                    transition-all ease-in-out duration-300 pt-4
                    ${openNav ? "right-0" : "-right-100"}
                    `
                }
            />
        </nav>
    )
}

export default MobileNavbar