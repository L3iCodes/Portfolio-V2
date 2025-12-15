import { NavigateButton } from "@/src/components/Button";
import Projects from "@/src/components/Projects";

export default function AdminProjectPage(){
    return(
        <>
            <div className="flex items-center">
                <div className="space-y-0">
                    <h1 className="text-2xl font-bold">PROJECT MANAGER</h1>
                    <p className="text-sm text-base-content/50">
                        Manage your entire portfolio content
                    </p>
                </div>

                <NavigateButton 
                    text="New Project"
                    type="rectangle"
                    icon="bxs:right-arrow"
                    className="hidden lg:flex bg-base-100! hover:bg-base-200!"
                    href="/admin/projects/new-project"
                />
            </div>
            

            <Projects option="all" href="/admin/projects/edit-project"/>
        </>
    );
};