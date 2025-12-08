import Projects from "@/src/components/Projects";

export default function ProjectsPage() {
    return(
        <div className={`min-h-full space-y-10`}>
            <div className="space-y-2">
                <h1 className="text-4xl font-bold">PROJECTS</h1>
                <p className="text-sm text-base-content/50">
                    Collection of personal projects of web applications 
                </p>
            </div>

            <Projects option="all"/>
        </div>
    );
};