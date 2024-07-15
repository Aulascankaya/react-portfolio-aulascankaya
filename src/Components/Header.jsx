/* eslint-disable react/prop-types */
import { useDarkMode } from "../Context/DarkMode";
import { dataTR } from "../Datas/tr";
import { dataEN } from "../Datas/en";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { dataDE } from "../Datas/de";
import tr from "../assets/tr.png";
import en from "../assets/en.png";
import de from "../assets/de.png";

export const Header = ({lang,setLang}) => {

  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleClickTR = () => {
    setLang(dataTR);
  };
  const handleClickEN = () => {
    setLang(dataEN);
  };
  const handleClickDE = () => {
    setLang(dataDE);
  };

  const {lightModeSwitch,darkModeSwitch,skills,projects,hireMe} = lang.header

  return (
    <header className="flex flex-col max-w-[80%] xl:max-w-6xl m-auto justify-between">
      <div className="flex items-center space-x-2 ml-auto my-8">
        <div
          className="relative w-10 h-5 flex items-center cursor-pointer transition-colors duration-300 rounded-full bg-toggle-purple dark:bg-toggle-gray"
          onClick={toggleDarkMode}
        >
          <div
            className="w-4 h-4 cursor-pointer transition-transform duration-300 transform"
            style={{
              transform: darkMode ? "translateX(30%)" : "translateX(125%)",
            }}
          >
            {darkMode ? <img src={moon} /> : <img src={sun} />}
          </div>
        </div>

        <span className="dark:text-light-mode text-gray-dark font-medium tracking-wider">
          {darkMode ? lightModeSwitch : darkModeSwitch}
        </span>

        <span className="text-gray-dark">|</span>

        <a
          href="#"
          className="dark:text-lilac text-toggle-purple font-medium tracking-wider"
          onClick={handleClickTR}
        >
          <img className="w-5 h-5" src={tr} />
        </a>
        <a
          href="#"
          className="dark:text-lilac text-toggle-purple font-medium tracking-wider"
          onClick={handleClickEN}
        >
          <img className="w-5 h-5" src={en} />
        </a>
        <a
          href="#"
          className="dark:text-lilac text-toggle-purple font-medium tracking-wider"
          onClick={handleClickDE}
        >
         <img className="w-5 h-5" src={de} />
        </a>
      </div>

      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-logo-lilac dark:bg-toggle-purple mr-auto">
          <span className="dark:text-dark-logo-font text-logo-purple transform rotate-45">
            AUC
          </span>
        </div>
        <nav className="flex items-center space-x-2 lg:space-x-16 ml-auto">
          <a href="#" className="text-gray">
            {skills}
          </a>
          <a href="#" className="text-gray">
            {projects}
          </a>
          <a
            href="#"
            className="text-navy-blue px-4 py-2 border border-navy-blue rounded-md dark:bg-white"
          >
            {hireMe}
          </a>
        </nav>
      </div>
    </header>
  );
};
