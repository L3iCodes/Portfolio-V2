import Button from "@/src/components/Button";
import Educations from "@/src/components/Educations";
import Experiences from "@/src/components/Experiences";
import ImageHolder from "@/src/components/ImageHolder";
import QuickAccess from "@/src/components/QuickAccess";
import SectionHeader from "@/src/components/SectionHeader";
import TechStack from "@/src/components/TeckStack";
import { profileImage } from "@/src/lib/constants";

export default function AboutPage() {
    return(
        <div className={`min-h-full space-y-25 xl:space-y-40 m-5 md:m-10 xl:m-15`}>
            {/* Introduction */}
            <section className="flex items-center flex-col xl:flex-row gap-20">
                <div className="space-y-20">
                    <div className="space-y-5">
                        <h1 className="text-4xl font-bold">ME!</h1>
                        <p className="text-sm text-base-content/70">
                            Hi, I’m <span className="font-semibold text-base-content">Jan Wilhelm Sy</span>, Hi, I’m Jan Wilhelm Sy. I am a Full Stack Developer specializing in React, Next.js, and Node.js.
                            <br/><br/>
                            I recently graduated Cum Laude from Bicol University with a degree in Computer Science. While my academic background is rooted in AI and Deep Learning research, I channel that rigorous problem-solving mindset into building clean, scalable web applications. I am currently focused on shipping products and mastering the modern JavaScript ecosystem.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <QuickAccess />
                </div>

                {/* Profile Image */}
                <div className="flex gap-2">
                    <div className="w-15 h-20 bg-base-200 border border-base-content/20 rounded-md"/>
                    <ImageHolder 
                        src={profileImage} 
                        className="shrink-0 w-[300px] h-[400px]"
                        title="(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
                    />
                    <div className="mt-auto w-10 h-15 bg-base-100 border border-base-content/20 rounded-md"/>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="flex flex-col xl:flex-row gap-30">
                
                <div className="hidden xl:flex gap-2 justify-center">
                    <div className="shrink-0 w-[300px] bg-base-100 rounded-md">
                        
                    </div>
                </div>

                <div className="space-y-15">
                    <div className="space-y-5">
                        <h2 className="text-xl text-base-content/80 font-bold font-bricolage">MY TECH STACK</h2>
                        <p className="text-sm text-base-content/70">
                            Specializing in responsive web applications using React, Next.js, and Node.js. My background also includes technical experience with Python, Deep Learning, and NLP.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <TechStack 
                        className="xl:grid-cols-3! 2xl:grid-cols-5"
                        technology={
                            [
                                "react","nextjs","tailwind","daisyui","nodejs","express","mongodb","mysql","zustand","socketio","python","tensorflow","github","vscode","figma"
                            ]
                        }
                    />
                </div>
            </section>

            {/* Experience */}
            <section className="flex flex-col xl:flex-row gap-10 xl:gap-30">
                <SectionHeader 
                    title="EXPERIENCE"
                    subtitle="Applied skills and contributions in the field."
                >
                    {/* <Button 
                        text="Resume"
                        type="rectangle"
                        className="ml-auto xl:ml-0!"
                        icon="bxs:right-arrow"
                    /> */}
                </SectionHeader>
                <Experiences/>
            </section>

            <section className="flex flex-col xl:flex-row gap-10 xl:gap-30">
                <SectionHeader 
                    title="EDUCATION"
                    subtitle="Foundational knowledge and academic achievements."
                />
                <Educations/>
            </section>
        </div>
    );
};