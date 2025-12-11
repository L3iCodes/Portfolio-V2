import Projects from "@/src/components/Projects";

export default function AdminPage(){
    return(
        <>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>

            <Projects option="all"/>
        </>
    );
}