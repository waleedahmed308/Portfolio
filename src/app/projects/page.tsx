"use client";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SmallProjects from "@/components/smallProjects";

export default function Projects() {
  const projects = [
    {
      imageUrl: "/images/istockphoto-1479472849-612x612.jpg",
      language: "Next.js CSS Graphql",
      appName: "Tracker App",
      hosting: "Minecraft servers hosting",
    },
    {
      imageUrl: "/images/istockphoto-1479472849-612x612.jpg",
      language: "Next.js CSS Graphql",
      appName: "Tracker App",
      hosting: "Minecraft servers hosting",
    },
    {
      imageUrl: "/images/istockphoto-1479472849-612x612.jpg",
      language: "Next.js CSS Graphql",
      appName: "Tracker App",
      hosting: "Minecraft servers hosting",
    },
  ];

  const smallProjectsData = [
    {
      languages: "Discord.js Ts Js",
      projectName: "Bot boilerplate",
      project_description:
        " Start creating scalable discord.js bot with typescript in seconds",
    },
    {
        languages: "Discord.js Ts Js",
        projectName: "Bot boilerplate",
        project_description:
          " Start creating scalable discord.js bot with typescript in seconds",
      },
      {
        languages: "Discord.js Ts Js",
        projectName: "Bot boilerplate",
        project_description:
          " Start creating scalable discord.js bot with typescript in seconds",
      },
  ];
  return (
    <Layout>
      <div className="lg:px-28 md:px-10 px-4 mt-24">
        <div className="w-full">
          <p className="font-fira_code font-medium text-3xl">
            <span className="text-[#C778DD]">/</span>projects
          </p>
          <p className="font-fira_code text-base text-gray-400 mt-2">
            List of my projects
          </p>
        </div>
      </div>
      <div className="w-full lg:pl-28 md:pl-10 pl-4 mt-20 relative ">
        <p className="font-fira_code font-medium text-3xl">
          <span className="text-[#C778DD]">#</span>complete-apps
        </p>
        <Image
          src={"/images/Rectangle 26.png"}
          className="absolute right-0 top-0 w-[60px] h-[155px] md:block hidden"
          alt=""
          width={155}
          height={155}
        />
      </div>
      <div className="w-full mt-12 flex relative">
        <Image
          src={"/images/projectDots.png"}
          className="absolute -left-10 top-10 md:block hidden "
          alt=""
          width={109}
          height={49}
        />
        <div className="lg:px-28 w-full md:px-10 px-4 grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.imageUrl}
              language={item.language}
              appName={item.appName}
              hosting={item.hosting}
              handleClick={() => {}}
            />
          ))}
        </div>
      </div>
      <div className="w-full  mt-10 h-[500px] relative">
        <p className="font-fira_code font-medium text-3xl lg:px-28 md:px-10 px-4 pt-10">
          <span className="text-[#C778DD]">#</span>small-projects
        </p>
        <Image
          src={"/images/Rectangle 26.png"}
          className="absolute -left-8 top-0 w-[60px] h-[155px] md:block hidden rotate-180"
          alt=""
          width={155}
          height={155}
        />
        <Image
          src={"/images/profile (3).png"}
          className="absolute right-0 top-40 w-[60px] h-[70px] lg:block hidden rotate-180"
          alt=""
          width={155}
          height={155}
        />
        <Image
          src={"/images/profile (3).png"}
          className="absolute -left-10 top-[400px] w-[60px] h-[70px] md:block hidden rotate-180"
          alt=""
          width={155}
          height={155}
        />
        <div className="lg:px-28 md:px-10 px-4 w-full mt-10 grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {smallProjectsData.map((item, index) => (
            <SmallProjects
              key={index}
              languages={item.languages}
              projectName={item.projectName}
              project_description={item.project_description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
