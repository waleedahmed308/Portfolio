import React from "react";
import Github from "./icons/Github";
import Driggabble from "./icons/Driggable";
import Figma from "./icons/Figma";

const SideIcon = () => {
  return (
    <div className="sm:block hidden">
      <div className="border-r w-4 h-[181px]"></div>
      <div className="flex flex-col gap-2 mt-4 items-center w-8">
      <Github/>
       <Driggabble/>
       <Figma/>
      </div>
    </div>
  );
};
export default SideIcon;
