/* eslint-disable react/prop-types */

import githubLight from "../assets/github.svg";
import LinkedInLight from "../assets/LinkedIn.svg";
import githubDark from "../assets/githubDark.svg";
import LinkedInDark from "../assets/LinkedInDark.svg";
import profil from "../assets/ulas3.jpg"


import { useSelector } from "react-redux";

export const Intro = (/*{lang}*/) => {
  const darkMode = useSelector((state) => state.darkMode);
  const lang = useSelector((state) => state.language);

  const {
    name,
    heading1,
    heading2,
    description,
    hireMe,
    github,
    linkedin,
    links,
  } = lang.introduction;

 // Scroll ile smooth geçiş
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-8 max-w-[80%] xl:max-w-6xl m-auto py-16 place-content-between">
      {/*İntro bilgiler */}
      <div className="text-left">
        <p className="mb-8 text-dark-purple dark:text-dark-mode-name">
          ————— {name}
        </p>
        <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">
          {heading1}
        </h1>
        <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">
          {heading2}
        </h1>
        <p className="mt-8 text-gray text-wrap dark:text-white lg:max-w-lg">
          {description}
        </p>
        <nav className="flex flex-wrap place-content-evenly xl:place-content-between max-w-md mt-8">
          <button onClick={scrollToFooter}
            className={
              "text-white bg-navy-blue m-2 xl:m-0 h-14 pt-3 px-4 lg:pl-4 w-32 xl:w-36 border border-navy-blue rounded-md dark:text-black-heading dark:bg-dark-mode-hire hover:shadow-md hover:shadow-dark-project-name"
            }
          >
            {hireMe}
          </button>
          <a
            href={links.github}
            className={
              "text-navy-blue m-2 xl:m-0 pt-4 px-4 h-14 lg:pl-6 w-32 xl:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button hover:shadow-md hover:shadow-dark-project-name"
            }
            target="_blank"
          >
            {darkMode ? (
              <img src={githubDark} className="inline mr-2" />
            ) : (
              <img src={githubLight} className="inline mr-2" />
            )}
            {github}
          </a>
          <a
            href={links.linkedin}
            className={
              "inline-flex text-navy-blue m-2 xl:m-0 pt-4 px-4 h-14 lg:pl-6 w-30 xl:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button hover:shadow-md hover:shadow-dark-project-name"
            }
            target="_blank"
          >
            {darkMode ? (
              <img src={LinkedInDark} className="inline-flex mr-2 mb-4" />
            ) : (
              <img src={LinkedInLight} className="inline-flex mr-2 mb-4" />
            )}
            {linkedin}
          </a>
        </nav>
      </div>
      {/*İntro fotoğraf */}
      <img
        className="rounded-2xl mt-8 lg:mt-0 max-w-[476px] max-h-[375px] shadow-2xl  dark:shadow-lg dark:shadow-dark-project-name"
        src={profil}
      />
    </div>
  );
};
