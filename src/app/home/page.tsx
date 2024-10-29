"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  FaFacebookF,
  FaHome,
  FaLinkedinIn,
  FaServicestack,
  FaUser,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
import { ImHtmlFive } from "react-icons/im";
import {
  SiApollographql,
  SiBootstrap,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SignupFormDemo } from "@/components/SignupForm";
import { GrProjects } from "react-icons/gr";

export default function BackgroundBeamsWithCollisionDemo() {
  const projects = [
    {
      title: "Tracker",
      description:
        "Tracker App is a streamlined task management and productivity tool designed to help users organize, prioritize, and track their day-to-day activities efficiently. With a clean and intuitive interface, the app enables users to manage tasks based on priority, deadlines, and project categories, making it easy to stay on top of goals and deadlines.",
      link: "https://www.emp.alimcosoft.com/",
    },
    {
      title: "E-commerce",
      description:
        "An E-commerce App project is a comprehensive digital platform designed for users to browse, purchase, and review a variety of products seamlessly. The app provides a personalized shopping experience with features such as product search, category filtering, and recommendations based on user preferences. Key functionalities include a secure checkout process, payment integration, and order tracking, making the shopping journey smooth and secure",
      link: "/",
    },
    {
      title: "NEECA",
      description:
        "NEECA Project: The National Energy Efficiency and Conservation Authority (NEECA) project is a government-led initiative in Pakistan focused on improving energy efficiency in the electrical and industrial sectors. By setting standards and promoting the use of energy-efficient products, NEECA aims to reduce energy consumption, support sustainability, and lower the nation’s carbon footprint, ultimately contributing to a more energy-resilient Pakistan.",
      link: "https://client-v3.neerspk.com/",
    },
    {
      title: "Mobile",
      description:
        "This mobile app project features an all-in-one solution with a custom-built music player, contact manager, camera, gallery, and weather module. The music player allows seamless browsing and playback of local music files, while the contact manager provides an easy-to-navigate interface for managing contacts. The camera and gallery functions offer quick access to capture, store, and view photos. Additionally, a weather feature updates real-time weather conditions, making this app a comprehensive toolkit for everyday needs.",
      link: "/",
    },
    {
      title: "BurnHall College WebSite",
      description:
        "BurnHall College is dedicated to fostering a nurturing and engaging learning environment for students. Our comprehensive curriculum encourages creativity, critical thinking, and academic excellence. We value community involvement and offer diverse extracurricular activities. Join us in shaping the future of our students!",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  const navItems = [
    {
      name: "Home",
      targetId: "home",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      targetId: "about",
      icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      targetId: "contact",
      icon: <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      targetId: "skills",
      icon: (
        <FaServicestack className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      targetId: "projects",
      icon: (
        <GrProjects className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const data = [
    {
      title: "2024",
      content: (
        <div className="">
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
            In 2024, I continued to grow and expand my skills at Alimcosoft,
            taking on new challenges and responsibilities in web development.
            This year, I deepened my expertise in front-end frameworks, focusing
            on optimizing application performance and enhancing user
            interactivity. I also collaborated closely with UX designers and
            back-end developers, which helped me better understand full-stack
            workflows and create even more seamless, responsive applications.
            Each project has strengthened my problem-solving abilities and
            attention to detail, fueling my passion for developing digital
            experiences that are not only functional but also engaging and
            intuitive for users.
          </p>
        </div>
      ),
    },
    {
      title: "August, 2023",
      content: (
        <div className="">
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-3xl  font-bold mb-3">
            Alimcosoft
          </p>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
            I started my journey at Alimcosoft, where I quickly immersed myself
            in the art of designing and developing for the web. Through hands-on
            experience, I honed my skills in front-end development, creating
            visually appealing and user-friendly interfaces for several
            applications. Working alongside a talented team, I learned how to
            bring ideas to life through responsive design, ensuring a seamless
            experience across devices. My work at Alimcosoft has not only
            strengthened my technical expertise but has also deepened my passion
            for creating digital experiences that leave a lasting impact.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Feb-Jul 2023",
      content: (
        <div className="w-full">
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-3xl font-bold mb-4">
            TechVision Solutions
          </p>
          <div className="">
            I completed an internship at TechVision Solutions where I gained
            hands-on experience in designing and developing web applications.
            During my time there, I focused on front-end development, working on
            several projects that enhanced my skills in creating clean,
            user-friendly interfaces. Collaborating with a skilled team, I
            learned how to design responsive layouts, ensuring that the
            applications functioned seamlessly across devices. This internship
            was an invaluable experience, deepening my technical knowledge and
            sparking my passion for crafting engaging digital experiences
          </div>
        </div>
      ),
    },
  ];
  const technologies = [
    {
      name: "HTML",
      icon: <ImHtmlFive className="text-6xl mt-5" />,
      color: "text-red-500",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-6xl" />,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-6xl" />,
      color: "text-yellow-500",
    },
    {
      name: "React.js",
      icon: <SiReact className="text-6xl" />,
      color: "text-blue-400",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-6xl" />,
      color: "text-gray-800",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-6xl" />,
      color: "text-blue-600",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-6xl" />,
      color: "text-teal-400",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-6xl" />,
      color: "text-black",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-6xl" />,
      color: "text-purple-600",
    },
    {
      name: "Apollo GraphQL",
      icon: <SiApollographql className="text-6xl" />,
      color: "text-indigo-600",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-6xl" />,
      color: "text-purple-700",
    },
    {
      name: "Storyblock",
      icon: <SiStorybook className="text-6xl" />,
      color: "text-orange-500",
    },
  ];
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/WaleedAhmed.pdf'; // Path to your PDF file
    link.download = 'WaleedAhmed.pdf'; // Name for the downloaded file
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
};

  return (
    <div className="w-full ">
      <FloatingNav navItems={navItems} />
      <BackgroundBeamsWithCollision className="pt-10">
        <div className="w-full lg:px-28 px-10 flex lg:flex-row flex-col justify-between items-center" id="home">
          <div className="">
            <div className="text-3xl relative sm:text-start text-center z-20 md:text-4xl text-white xl:text-6xl font-bold dark:text-white font-sans ">
              Hi, I m
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Waleed Ahmed</span>
              </div>
              {/* passionate <br /> */}
              <span className="typing-effect">Front End Developer</span>
            </div>
            <div className="flex sm:flex-row flex-col gap-14 mt-8 items-center">
              <button className="button flex gap-2 items-center" onClick={handleDownload}>
               Download CV{" "}
                <span>
                  <GoDownload className="text-base font-normal" />
                </span>
              </button>
              <div className="flex gap-2">
                <Link
                  href="https://www.linkedin.com/in/waleed-ahmed-931522202"
                  className="w-[40px] h-[40px] rounded-full bg-gray-500 flex justify-center items-center"
                >
                  <FaLinkedinIn className="text-lg" />
                </Link>
                <Link
                  href="https://web.facebook.com/profile.php?id=100008441946598"
                  className="w-[40px] h-[40px] rounded-full bg-gray-500 flex justify-center items-center"
                >
                  <FaFacebookF className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:w-[400px] sm:h-[400px] lg:block hidden border-4 border-white rounded-full lg:mt-0 mt-20">
            <Image
              src={"/images/profile.jpg"}
              alt=""
              width={500}
              height={500}
              className="w-full h-full rounded-full object-cover object-top   "
            />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <h1 className="md:text-5xl px-20 font-bold mt-10" id="projects">Projects</h1>
      <div className="max-w-5xl mx-auto px-8 ">
        <HoverEffect items={projects} />
      </div>
      <h1 className="md:text-5xl px-20 font-bold md:mt-20 mt-10" id="skills">Skills</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap md:w-3/5 w-11/12 justify-center items-center space-x-10 space-y-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col py-2 items-center">
              <span className={`${tech.color}`}>{tech.icon}</span>
              <span className="mt-2 font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center md:mt-20 mt-10" id="about">
        <Timeline data={data} />
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between mt-20 px-20 " id="contact">
        <div className=" lg:w-1/3">
          <h1 className="md:text-5xl font-bold md:mt-20 mt-10">Contact</h1>
          <p className="mt-2">
            Feel free to explore the various web development projects I’ve
            created, showcasing my skills in modern technologies and design.I’d
            love to hear from you! Whether you have a question, want to discuss
            a project, or just want to connect, feel free to reach out.
          </p>
        </div>
        <div className="mt-16 lg:w-[40%]" >
        <SignupFormDemo />
        </div>
      </div>
      <div className="w-full flex justify-center text-gray-600 mt-10 mb-2">
        Waleed Ahmed @ Copy right {new Date().getFullYear()}
      </div>
    </div>
  );
}
