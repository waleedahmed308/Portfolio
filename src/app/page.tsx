"use client";
import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdArrowRightAlt, MdEmail } from "react-icons/md";

export default function Home() {
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

  const skillData = [
    {
      title: "Languages",
      className: "lg:h-[250px]",
      description:
        "HTML, CSS,Javascript, React.js,Next.js, Typscript, StoryBlock,Redux, Zustand,Github, GraphQL(Apollo-Client)",
    },
    {
      title: "Tools",
      description: "VSCode,Linux,Figma, Git, Font Awesome,",
      className: "lg:h-[110px]",
    },
    {
      title: "Frameworks",
      description: "Next.js,Vue js",
      className: "lg:h-[80px]",
    },
  ];

  const  router = useRouter();

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <Layout>
      <div className="bg-[#292C37] text-white ">
        {/* Hero Section */}
        <div className="mt-24 flex lg:flex-row flex-col lg:px-28 md:px-10 px-4">
          <div className="lg:w-3/5 w-full">
            <h1 className="sm:text-3xl text-xl font-fira_code fade-in">
              Waleed Ahmed is a{" "}
              <span className="text-[#C778DD]">web designer</span> and{" "}
              <span className="text-[#C778DD]">front-end-developer</span>
            </h1>
            <p className="text-gray-400 text-base font-fira_code mt-10">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Link href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            <button 
            className="w-[148px] h-[37px] border border-gray-500 hover:border-[#C778DD] font-fira_code text-white font-medium hover:font-bold text-base mt-8">
              Contact me!!
            </button>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full lg:bg-[url('/images/Style=Outline.png')] bg-none bg-contain lg:h-[200px] bg-no-repeat ">
            <div className="relative">
              <Image
                src={"/images/profile (1).png"}
                className="w-full h-[355px] object-contain "
                alt=""
                width={355}
                height={355}
              />
              <Image
                src={"/images/profile (3).png"}
                alt=""
                width={84}
                height={84}
                className="absolute bottom-10 right-14"
              />
            </div>
            <div className="w-[350px] mx-auto h-[37px] border border-gray-400 flex gap-2 items-center px-2">
              <span className="w-4 h-4 bg-[#C778DD]"></span>
              <p className="font-fira_code text-base text-gray-400">
                Currently working on{" "}
                <span className="font-bold text-white">Portfolio</span>
              </p>
            </div>
          </div>
        </div>
        {/* Quote */}
        <div className="w-full mt-72 sm:flex hidden justify-center relative">
          <Image
            src={"/images/Rectangle 26.png"}
            alt=""
            width={91}
            height={91}
            className="absolute right-0 top-6"
          />
          <div className="lg:w-[55%] w-3/5 lg:h-[95px] border border-gray-400 flex items-center justify-center relative">
            <Image
              src={"/images/Frame 49.png"}
              alt=""
              width={41}
              height={28}
              className="absolute left-4 -top-4"
            />
            <Image
              src={"/images/Frame 49.png"}
              alt=""
              width={41}
              height={28}
              className="absolute right-4 -bottom-4"
            />
            <p className="font-fira_code text-white text-2xl font-medium typing-effect">
              With great power comes great electricity bill
            </p>
          </div>
        </div>
        {/* Projects */}
        <div className="lg:px-28 md:px-10 px-4 mt-24 flex justify-between" id="work">
          <div className="flex items-center gap-2 w-3/5">
            <p className="font-fira_code font-medium text-3xl">
              <span className="text-[#C778DD]">#</span>projects
            </p>
            <div className="border-t border-[#C778DD] w-full h-0.5"></div>
          </div>
          <button className="flex gap-1 pr-16 items-center font-fira_code text-base"
          onClick={()=>router.push('/projects')}>
            view all <MdArrowRightAlt className="text-white text-2xl" />{" "}
          </button>
        </div>
        <div className="relative w-full flex ">
          <Image
            src={"/images/Frame 28.png"}
            className="absolute -left-12 md:block hidden"
            alt=""
            width={54}
            height={54}
          />
          <Image
            src={"/images/Rectangle 26.png"}
            className="absolute right-0 top-[150px] w-[60px] h-[155px] md:block hidden"
            alt=""
            width={155}
            height={155}
          />
          <div className="lg:px-28 w-full md:px-10 px-4 mt-12 grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
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
        {/* Skills */}
        <div className="lg:px-28 md:px-10 px-4 mt-24 flex items-center gap-2 lg:w-3/5 w-full">
          <p className="font-fira_code font-medium text-3xl">
            <span className="text-[#C778DD]">#</span>skills
          </p>
          <div className="border-t border-[#C778DD] lg:w-1/2 w-full h-0.5"></div>
        </div>
        <div className="lg:px-28 md:px-10 px-4 flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[37%] px-4">
            <div className="w-full flex justify-between mt-3">
              <Image
                src={"/images/profile (3).png"}
                className="w-[63px] h-[63px] mt-10"
                alt=""
                width={63}
                height={63}
              />
              <div className="w-[86px] h-[86px] border border-gray-500"></div>
            </div>
            <div className="flex justify-between mt-10">
              <Image
                src={"/images/Style=Outline.png"}
                alt=""
                className="w-[113px] h-[113px] mt-10"
                width={113}
                height={113}
              />
              <Image
                src={"/images/profile (3).png"}
                className="w-[63px] h-[63px] "
                alt=""
                width={63}
                height={63}
              />
              <div className="w-[52px] h-[52px] mt-20 border border-gray-500"></div>
            </div>
          </div>
          <div className="lg:w-[55%] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 lg:mt-0 mt-8">
            {skillData.map((item, index) => (
              <SkillCard
                key={index}
                title={item.title}
                languages={item.description}
                className={` w-full ${item.className}`}
              />
            ))}
          </div>
        </div>
        {/* about-me */}
        <div className="lg:px-28 md:px-10 px-4 mt-24 flex items-center gap-2 lg:w-3/5" id="about-me">
          <p className="font-fira_code font-medium text-3xl">
            <span className="text-[#C778DD]">#</span>about-me
          </p>
          <div className="border-t border-[#C778DD] w-1/2 h-0.5"></div>
        </div>
        <div className="relative flex">
          <Image
            src={"/images/Rectangle 26.png"}
            className="absolute -left-10 rotate-180 top-20 w-[60px] h-[155px] md:block hidden"
            alt=""
            width={155}
            height={155}
          />
          <div className="lg:pl-28 mt-6 flex md:flex-row flex-col justify-between">
            <div className="md:w-[45%] lg:px-0 md:px-10 px-4 w-full text-justify font-fira_code text-gray-400">
              <p>
                {" "}
                Hello, i’m Waleed Ahmed!
                <br />
                <br />
                I’m a self-taught front-end developer based in Islamabad,
                Pakistan. I can develop responsive websites from scratch and
                raise them into modern user-friendly web experiences. <br />
                <br />
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p>
              <button className="w-[148px] h-[37px] border border-gray-500 flex gap-1 justify-center items-center hover:border-[#C778DD] font-fira_code text-white font-medium hover:font-bold text-base mt-8">
                Read More <MdArrowRightAlt className="text-white text-2xl" />
              </button>
            </div>
            <div className="bg-[url('/images/about.png')] md:w-1/2 w-full h-[430px] bg-no-repeat bg-center">
              <Image
                src={"/images/profile (3).png"}
                className="w-[63px] h-[63px] mt-10 ml-36"
                alt=""
                width={63}
                height={63}
              />
              <div className="flex justify-end">
                <div className="flex justify-between w-[37%]">
                  <Image
                    src={"/images/profile (3).png"}
                    className="w-[73px] h-[43px] mt-36"
                    alt=""
                    width={63}
                    height={63}
                  />
                  <Image
                    src={"/images/profile (3).png"}
                    className="w-[63px] h-[63px] mt-40 "
                    alt=""
                    width={63}
                    height={63}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="lg:px-28 md:px-10 px-4 mt-24 flex items-center gap-2 lg:w-3/5" id="contact">
          <p className="font-fira_code font-medium text-3xl">
            <span className="text-[#C778DD]">#</span>contacts
          </p>
          <div className="border-t border-[#C778DD] w-1/3 h-0.5"></div>
        </div>
        <div className="relative w-full flex ">
          <Image
            src={"/images/Frame 28.png"}
            className="absolute -left-12 md:block hidden"
            alt=""
            width={54}
            height={54}
          />
          <div className="lg:px-28 md:px-10 px-4 flex md:justify-between md:items-start items-center md:flex-row flex-col">
            <p className="font-fira_code font-medium text-base md:w-[45%] text-gray-400 mt-8">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
            <div className="p-4 border border-gray-500 md:mt-0 mt-6">
              <div className="flex gap-2 items-center">
                <MdEmail className="text-gray-300 text-2xl" />
                <p className="font-fira_code text-base text-gray-400">
                  waleedahmed520276@gmail.com
                </p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <FaPhone className="text-gray-300 text-xl" />
                <p className="font-fira_code text-base text-gray-400">
                  +923340559040
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-28 md:px-10 px-4 pb-20 mt-10 w-full">
         <ContactForm/>
        </div>
      </div>
    </Layout>
  );
}
