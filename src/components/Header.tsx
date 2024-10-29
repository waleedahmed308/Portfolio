"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./icons/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [hightLight, setHighLight] = useState("home");
  const [open, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const titleArray = [
    {
      link: "#home",
      title: "home",
    },
    {
      link: "#work",
      title: "work",
    },
    {
      link: "#about-me",
      title: "about-me",
    },
    {
      link: "#contact",
      title: "contact",
    },
  ];

  const router = useRouter()

  // const handleClick = (item: { title: string }) => {
  //   setHighLight(item.title);
  //   setIsOpen(false); // Close dropdown on selection in mobile view
  // };

  const handleOpen = () => {
    setIsOpen(!open); // Toggle open state
    console.log("button is Clicked");
  };

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    if( targetId === "home"){
      router.replace('#home')
    }
    else{
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
        setHighLight(targetId);
        setIsOpen(false); 
        setTimeout(() => {
          router.replace(`#${targetId}`,);
        }, 500); // Wait for the scroll animation to complete before updating the URL
      }

    }
  };

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div className="w-full flex justify-between md:px-28 px-10">
      <div className="flex gap-2 h-12 items-center">
        <Logo />
        <p className="font-fira_code font-bold text-base text-white">
          Waleed Ahmed
        </p>
      </div>
      <div className="flex justify-between items-center h-12 xl:w-[35%] lg:w-1/2 md:w-3/5 ">
        {/* Desktop Menu */}
        {titleArray.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`${
              hightLight === item.title ? "font-bold" : ""
            } font-fira_code  md:flex hidden`}
            onClick={(e) => handleScroll(e, item.title)}
          >
            <span className="text-[#C778DD] text-base font-normal">#</span>
            {item.title}
          </Link>
        ))}

        {/* Mobile Menu */}
        <div className="md:hidden block relative" ref={dropdownRef}>
          <button className="text-white mr-1" onClick={handleOpen}>
            ☰
          </button>
          {open && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md w-[230px] p-3 z-10">
              {titleArray.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${
                    hightLight === item.title ? "font-bold" : ""
                  } block py-2 px-2 font-fira_code hover:bg-gray-100 text-black`}
                  onClick={(e) => handleScroll(e, item.title)}
                >
                  <span className="text-[#C778DD] text-base font-normal">
                    #
                  </span>
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Language Dropdown */}
        <select className="bg-transparent font-fira_code font-semibold text-sm h-9 focus:outline-none">
          <option className="bg-black" value="">
            EN
          </option>
          <option className="bg-black" value="">
            UA
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
