import Educations from "@/src/components/Educations";
import Experiences from "@/src/components/Experiences";
import QuickAccess from "@/src/components/QuickAccess";
import TechStack from "@/src/components/TeckStack";
import { Icon } from "@iconify/react";

export default function AboutPage() {
    return(
        <div className={`min-h-full space-y-30 md:space-y-40`}>
            {/* Introduction */}
            <section className="flex flex-col md:flex-row gap-30">
                <div className="space-y-20 md:space-y-30">
                    <div className="space-y-5">
                        <h1 className="text-4xl font-bold">ME!</h1>
                        <p className="text-sm text-base-content/70">
                            Hi, I’m Jan Wilhelm Sy, a Computer Science graduate from Bicol University with a strong drive to become a full-stack developer. 
                            I’m passionate about web development (and artificial intelligence), 
                            and I’m actively expanding my skills in React and various React-based frameworks, along with other backend technologies.
                            <br/><br/>
                            My experience includes hands-on work with deep learning and natural language processing, both through research and applied projects.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <QuickAccess />
                </div>

                {/* Image Placeholder */}
                <div className="hidden xl:flex gap-2">
                    <div className="w-15 h-20 bg-base-200 border border-base-content/20 rounded-md"/>
                    <div className="shrink-0 w-[300px] h-[430px] bg-base-300 rounded-md">
                        Image here
                    </div>
                    <div className="mt-auto w-10 h-15 bg-base-100 border border-base-content/20 rounded-md"/>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="flex flex-col md:flex-row gap-30">
                <div className="flex gap-2 justify-center">
                    <div className=" shrink-0 w-[300px] h-[450px] bg-base-300 rounded-md">
                        Image here
                    </div>
                </div>

                <div className="space-y-15">
                    <div className="space-y-5">
                        <h2 className="text-xl text-base-content/80 font-bold font-bricolage">MY TECH STACK</h2>
                        <p className="text-sm text-base-content/70">
                            I specialize in building responsive, user-focused web applications using JavaScript, React, and modern React frameworks. 
                            I also work with Node.js, Express, and various backend tools. 
                            On the AI side, I have experience with Python, deep learning libraries, and NLP toolkits.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <TechStack 
                        className="xl:grid-cols-3! 2xl:grid-cols-5"
                    />
                </div>
            </section>

            {/* Experience */}
            <section className="flex flex-col xl:flex-row gap-10 xl:gap-30">
                <div className="flex flex-row w-full items-center md:flex-col md:items-start  shrink-0 md:w-[300px] gap-5">
                    <div className="space-y-0">
                        <h2 className="text-xl font-semibold font-bricolage">MY EXPERIENCE</h2>
                        <p className="text-xs text-base-content/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                    <button className={
                        `
                            ml-auto w-fit h-fit p-2 px-4 flex items-center gap-2 bg-base-300 rounded-md border border-base-content/20 text-sm text-base-content/80 cursor-pointer
                            hover:bg-base-100 hover:text-base-content active:bg-base-100/20 
                            md:ml-0
                        `
                        }
                    >
                        Resume
                        <Icon icon="bxs:right-arrow"  />
                    </button>
                </div>

                <Experiences/>
            </section>

            <section className="flex flex-col xl:flex-row gap-10 xl:gap-30">
                <div className="flex flex-row w-full items-center md:flex-col md:items-start  shrink-0 md:w-[300px] gap-5">
                    <div className="space-y-0">
                        <h2 className="text-xl font-semibold font-bricolage">EDUCATION</h2>
                        <p className="text-xs text-base-content/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                
                <Educations/>
            </section>
        </div>
    );
};