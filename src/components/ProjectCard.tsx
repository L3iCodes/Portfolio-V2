import Image, { StaticImageData } from "next/image";
import { projectCoverColors, projectCoverStyles } from "../lib/styles";

interface ProjectCardProps {
  _id: string;
  title: string;
  subtitle: string;
  coverImg?: string | StaticImageData;
  coverBg: projectCoverColors
}

const ProjectCard = ({ _id, title, subtitle, coverImg, coverBg }: ProjectCardProps) => {
  return(
    <div 
      className={
        `
          h-[400px] min-w-[250px] w-[250px] md:w-full p-2 flex flex-col gap-1 bg-base-200 border border-base-content/20 rounded-md cursor-pointer
          transition-all ease-in
          hover:scale-105 hover:bg-base-100
        `
      }
    >
      {/* Cover Image */}
      <div className="border border-base-content/20 h-[80%] rounded-xs  relative"> 
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0" style={{background: projectCoverStyles[coverBg]}}
        />
        {coverImg && (
          <div className={`absolute h-[85%] w-[85%] border border-base-content/30 inset-0 m-auto z-20 shadow-xl shadow-${coverBg}-300`}>
            <Image
              src={coverImg}
              alt="Profile"
              fill
              className="object-cover rounded-xs"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xs text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;