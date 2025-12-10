'use client'

interface SectionProps {
    name: string;
    children: React.ReactNode;
}

const Section = ({ name, children }: SectionProps) => {
    const id = name.toLowerCase().replace(/\s+/g, "-");

    return (
        <section 
            id={id}
            className="flex flex-col lg:flex-row gap-5 lg:gap-20 xl:gap-30 border-t border-base-content/20 py-20"
        >
            <h1 className="shrink-0 w-18 font-semibold font-bricolage">{name}</h1>
            { children }
        </section>
    )
}

export default Section

export const SectionNavigation = () => {
    const sections = ['Overview', 'Features', 'Stack', 'Gallery'];

    return (
        <div className="hidden lg:block w-40 sticky top-10 self-start">
            <p className="text-sm font-bricolage font-semibold text-base-content">NAVIGATE</p>
            <ul className="mt-2 space-y-1 text-xs text-base-content/50">
                {sections.map(section => {
                    return(
                        <li 
                            key={section} 
                            className="hover:text-base-content/90 hover:font-medium cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                const id = section.toLowerCase().replace(/\s+/g, "-");
                                const el = document.getElementById(id);
                                if (el) {
                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }
                            }}
                        >
                           {section}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
