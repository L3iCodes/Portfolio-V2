import { Icon } from "@iconify/react";
import QuickAccess from "../components/QuickAccess";
import TechStack from "../components/TeckStack";
import Projects from "../components/Projects";
import { NavigateButton } from "../components/Button";
import ImageHolder from "../components/ImageHolder";
import { profileImage } from "../lib/constants";

export default function HomePage() {
  return (
    <div className={`min-h-full space-y-30`}>
      {/* Introduction Section*/}
      <section className="flex flex-col md:flex-row gap-30">
        <div className="space-y-15">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold">Hey, I'm Wilhelm!</h1>
            <p className="text-sm text-base-content/70 font-medium">
              Fresh graduate and aspiring full-stack developer with skills in React, backend technologies, and AI. Experience includes deep learning and NLP projects developed during research and applied work.
            </p>
          </div>

          {/* TechStack */}
          <div className="space-y-5">
            <h1 className="text-sm text-base-content/80 font-bricolage font-semibold ">MY MAIN STACK</h1>
            <div className="flex">
              <TechStack option="featured"/>
            </div>
          </div>

          {/* Quick Access (Personal Info) */}
          <QuickAccess />
        </div>

        {/* Profile Image */}
        <ImageHolder 
          src={profileImage} 
          className="hidden xl:flex shrink-0 w-[300px]"
        />
      </section>

      {/* Featured Project Section */}
      <section className="w-full space-y-15">
          <div className="flex gap-2 items-center">
            <div className="w-11 h-11 p-1 flex items-center justify-center bg-base-200 border border-base-content/20 rounded-md">
              <Icon icon="material-symbols:work" width="30" height="30" />
            </div>
            
            <div className="space-y-0">
              <h1 className="text-xl font-semibold font-bricolage ">MY PROJECTS</h1>
              <p className="text-sm text-base-content/50">Collection of personal projects of web applications</p>
            </div>

            <NavigateButton 
              text="More Projects"
              type="rectangle"
              icon="bxs:right-arrow"
              className="hidden lg:flex"
              href="/projects"
            />

            <NavigateButton 
              type="square"
              icon="bxs:right-arrow"
              className="lg:hidden"
              href="/projects"
            />
          </div>

          <Projects option="featured"/>
      </section>
    </div>
  );
};