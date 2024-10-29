import React from "react";
import Logo from "./icons/logo";
import Github from "./icons/Github";
import Driggabble from "./icons/Driggable";
import Figma from "./icons/Figma";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`border-t border-gray-500  bg-[#292C37] w-full flex flex-col items-center ${className}`}
    >
      <div className="w-[80%] mt-5 flex sm:flex-row flex-col sm:justify-between sm:items-start items-center ">
        <div>
          <div className="flex sm:flex-row flex-col gap-2 md:h-12 items-center">
            <Logo />
            <p className="font-fira_code font-bold text-base text-white">
              Waleed Ahmed
            </p>
            <p className="font-fira_code  text-base text-gray-400 ml-2">
              waleedahmed520276@gmail.com
            </p>
          </div>
          <p className="sm:text-base text-xs font-fira_code text-white">
            Web designer and front-end developer
          </p>
        </div>
        <div className="sm:mt-0 mt-6">
          <p className="text-2xl font-fira_code font-medium mt-2">Media</p>
          <div className="flex gap-2 mt-1 ">
            <span className="mt-[6px]">
              <Github />
            </span>
            <Driggabble />
            <Figma />
          </div>
        </div>
      </div>
      <div className="w-full text-gray-400 text-sm font-fira_code mt-20 mb-6 flex justify-center">
      © Copyright {new Date().getFullYear()}. Made by Waleed Ahmed
      </div>
    </div>
  );
};

export default Footer;
