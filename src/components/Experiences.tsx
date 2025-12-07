import { experiences, type ExperienceItems } from "../lib/constants";

const Experiences = () => {
    return (
        <div className="ml-5 md:ml-0 space-y-10">
            {experiences.map((experience, index) => (
                <Experience 
                    key={`experience-${index}`}
                    company={experience.company}
                    location={experience.location}
                    role={experience.role}
                    date={experience.date}
                    desc={experience.desc}
                    contributions={experience.contributions}
                />
            ))}
        </div>
    );
};

export default Experiences;


const Experience = ({ company, location, role, date, desc, contributions }: ExperienceItems) => {
    return(
        <div className="flex flex-col w-full text-base-content/80 text-sm font-me">
            {/* Company */}
            <div>
                <h3 className="text-[16px] text-base-content mr-2 font-semibold">
                    {company}
                    <span className=" ml-2 text-base-content/80 text-sm font-medium">
                        | {location}
                    </span>
                </h3>
            </div>

            {/* Role */}
            <h4>{role}</h4>
            <h4>{date}</h4>

            <h4 className="mt-5 mb-5">
                {desc}
            </h4>

            {/* Contributions */}
            {contributions && (
                <ul className="list-disc pl-5 text-[14px]">
                    {contributions.map((contribution, index) => (
                        <li key={`contribution-${index}`}>{contribution}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
