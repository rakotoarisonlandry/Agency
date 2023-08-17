import React, { useState } from "react";
import logo from "../assets/image/logo.png";
import { useThemeContext } from "../Tool/ThemeContext";

function Header() {
  const { toggleTheme, theme } = useThemeContext();

  const isLightTheme = theme === "light";

  const [isButtonVisible, setButtonVisibility] = useState(false);
  const [isListVisible, setListVisibility] = useState(true);

  const toggleButtonVisibility = () => {
    setButtonVisibility(!isButtonVisible);
  };

  const toggleListVisibility = () => {
    setListVisibility(!isListVisible);
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${
        isLightTheme ? "bg-light" : "bg-dark"
      }`}
    >
      <div className="flex items-center text-xl  md:text-2xl pt-6 text-[#00f] font-bold space-x-2" style={{marginLeft:"16%"}}>
        <img src={logo} alt="Logo" style={{ width: "60px" }} />
        <span>Agency</span>
      </div>
      {isButtonVisible && (
        <button
          onClick={toggleListVisibility}
          className="bg-[#4842c8] font-bold text-white px-6 py-2 rounded-md md:hidden"
        >
          Menu
        </button>
      )}
      <ul
        className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-bold opacity-80 text-[#fff] ${
          isLightTheme ? "text-light" : "text-dark"
        } ${isListVisible ? "md:flex" : "hidden"}`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <a href="#">
        <button
          onClick={toggleButtonVisibility}
          className={`bg-[#4842c8] font-bold text-white px-6 py-2 rounded-md ${
            isButtonVisible ? "hidden md:block" : "md:hidden"
          }`}
        >
          Get A Queue
        </button>
      </a>
    </div>
  );
}

export default Header;
