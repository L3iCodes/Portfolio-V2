import { EducationItems, educations } from "../lib/constants";

const Educations = () => {
    return (
        <div className="ml-5 space-y-5 md:ml-0 md:space-y-10 text-base-content/50 text-sm">
            {educations.map((education, index) => (
                <Education 
                    key={`education-${index}`}
                    school={education.school}
                    course={education.course}
                    date={education.date}
                />
            ))}
        </div>
    );
};

export default Educations;


const Education = ({ school, course, date }: EducationItems) => {
    return(
        <div>
            <h3 className="text-[16px] text-base-content mr-2 font-semibold">
                {school}
            </h3>
            <h4>{course}</h4>
            <h4>{date}</h4>
        </div>
    );
};