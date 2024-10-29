import React from "react";

interface Props {
    title:string;
    languages:string;
    className?:string;
}

const SkillsCard:React.FC<Props> = ({ title,languages,className}) => {
  return (
    <div className={`w-full border border-gray-500 rounded overflow-hidden ${className}`}>
      <p className="w-full border-b border-gray-500 font-semibold font-fira_code text-base px-2 py-2">
        {title}
      </p>
      <p className="text-gray-400 text-base px-2 py-2 font-fira_code">{languages}</p>
    </div>
  );
};

export default SkillsCard;
