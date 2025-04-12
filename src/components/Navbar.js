import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { GoHome, GoHomeFill, GoPerson, GoPersonFill, GoProject } from "react-icons/go";
import { BsSendPlus, BsSendPlusFill } from "react-icons/bs";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons"; 
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, icon, activeIcon, className = "" }) => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
          const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
          if (visibleSection) {
              setActiveSection(visibleSection.id);
              console.log(visibleSection.id)
          }
      }, {threshold:0.2});

      const sections = document.querySelectorAll('[data-section]');

      sections.forEach((section) => {
          observer.current.observe(section);
      });

      return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    }
  }, []);

  return (
    <Link
      href={`#${href}`}
      className={`${className}  rounded relative group`}
    >
      <span className="xs:hidden">{title}</span> <span className={`hidden xs:flex text-2xl`}>{(activeSection === href ? activeIcon : icon)}</span>
      <span
        className={`
              inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                activeSection === href ? "w-full" : "w-0"
              } bg-light dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  

  return (
    <>
    <header className="fixed w-full xs:bottom-5 z-50 items-center justify-between font-medium dark:text-light">
      <div className="xs:w-11/12 xs:mx-auto dark:xs:bg-darkGreen xs:bg-primary xs:bg-opacity-50 px-32 lg:px-16 z-1 md:px-12 sm:px-8 py-8 xs:py-5 xs:rounded-full flex xs:justify-around justify-between items-center">
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-3" href="home" title="Home" icon={<GoHome />} activeIcon={<GoHomeFill />} />
          <CustomLink className="mx-3" href="about" title="About" icon={<GoPerson />} activeIcon={<GoPersonFill />} />
          <CustomLink className="mx-3" href="project" title="Projects" icon={<GoProject />} activeIcon={<AiFillProject />} />
          <CustomLink className="ml-3" href="contact" title="Contact" icon={<BsSendPlus />} activeIcon={<BsSendPlusFill />} />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            target={"_blank"}
            className="w-7 mr-3"
            href="https://github.com/QueenFathi"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my GitHub profile"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3 bg-light rounded-full"
            href="https://www.linkedin.com/in/fathiat-odutayo-94259323a/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my LinkedIn profile"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-7 h-7 ease ml-3 flex items-center justify-center rounded-full p-1  ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}`}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
    </header>
    <nav className="w-11/12 mx-auto">
            <div className="h-5 bg-primary fixed z-50 bott"></div>
    </nav>
    </>
  );
};

export default Navbar;
