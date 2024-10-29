import Image from "next/image";
import React from "react";

interface Props{
    image:string;
    language:string;
    appName:string;
    hosting:string;
    handleClick:() => void;
}

const ProjectCard:React.FC<Props> = ({image,language,appName,hosting,handleClick}) => {
  return (
    <div className="w-full border border-gray-500">
      <Image
        src={image}
        alt=""
        width={330}
        height={201}
        className="lg:w-[350px] w-full object-cover h-[201px]"
      />
      <div className="border-t border-b h-[37px] font-fira_code text-base text-gray-400 flex items-center px-3">
        {language}
      </div>
      <div className="px-3 mt-3">
        <p className="font-fira_code text-white font-medium text-2xl">{appName}</p>
        <p className="font-fira_code mt-2 text-gray-400 text-base">{hosting}</p>
        <button 
        onClick={handleClick}
        className="w-[109px] h-[37px] my-4 font-fira_code text-base border border-gray-500 hover:border-[#C778DD] hover:font-bold">
            Live {"<"}~{">"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
