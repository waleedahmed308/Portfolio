import React from "react";

interface Props {
  languages: string;
  projectName: string;
  project_description: string;
}

const SmallProjects: React.FC<Props> = ({
  languages,
  projectName,
  project_description,
}) => {
  return (
    <div className="border border-gray-400 xl:w-[331px] pb-4">
      <p className="w-full border-b border-gray-400 py-2 font-fira_code px-2 text-gray-400">
        {languages}
      </p>
      <div className="px-3 mt-2">
        <p className="text-2xl font-fira_code font-medium">{projectName}</p>
        <p className="font-fira_code text-base text-gray-400 mt-2">
         {project_description}
        </p>
      </div>
    </div>
  );
};

export default SmallProjects;
