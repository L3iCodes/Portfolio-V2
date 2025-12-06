import { Icon } from "@iconify/react";
import QuickAccess from "./components/QuickAccess";
import TechStack from "./components/TeckStack";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className={`min-h-full space-y-30`}>
      {/* Introduction Section*/}
      <section className="flex flex-col md:flex-row gap-30">
        <div className="space-y-15">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold">Hey, I'm Wilhelm!</h1>
            <p className="text-sm text-base-content/50 font-medium">
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
        <div className="hidden xl:flex shrink-0 w-[300px] bg-base-300 rounded-md">
          Image here
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="w-full space-y-15">
          <div className="flex gap-2 items-center">
            <div className="w-11 h-11 p-1 flex items-center justify-center bg-base-200 border border-base-content/20 rounded-md">
              <Icon icon="material-symbols:work" width="30" height="30" />
            </div>
            
            <div className="space-y-0">
              <h1 className="text-xl text-base-content font-bricolage font-bold ">MY PROJECTS</h1>
              <p className="text-sm text-base-content/50">Collection of personal projects of web applications</p>
            </div>

            <button className={
                `
                  p-2 px-4 ml-auto md:flex items-center gap-2 bg-base-300 rounded-md border border-base-content/20 text-base-content/80 cursor-pointer
                  hover:bg-base-100 hover:text-base-content active:bg-base-100/20\
                  hidden
                `
              }
            >
              More Projects
              <Icon icon="bxs:right-arrow"  />
            </button>
            
            <button className={
                `
                  p-2 ml-auto md:hidden items-center gap-2 bg-base-300 rounded-md border border-base-content/20 text-base-content/80 cursor-pointer
                  hover:bg-base-100 hover:text-base-content active:bg-base-100/20\
                `
              }
            >
              <Icon icon="bxs:right-arrow"  />
            </button>
          </div>

          <Projects />
      </section>
    </div>
  );
}
