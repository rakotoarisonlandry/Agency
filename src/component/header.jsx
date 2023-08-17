import React from "react";
import logo from "../assets/image/logo.png";
import { useThemeContext } from "../Tool/ThemeContext";

function Header() {
  const { toggleTheme, theme } = useThemeContext();

  const isLightTheme = theme === "light";

  return (
    <div
      className={`flex justify-center space-x-44 space-y-[15px] ${
        isLightTheme ? "bg-light" : "bg-dark"
      }`}
    >
      <div className="items-center text-[22px] pt-[30px] text-[#00f] font-bold flex space-x-[10px]">
        <img src={logo} alt="Logo" style={{ width: "40px" }} />
        <span>Agency</span>
      </div>
      <div
        className={`items-center pt-[18px] ${
          isLightTheme ? "text-light" : "text-dark"
        }`}
      >
        <ul className="flex space-x-[50px] font-bold opacity-[0.8] text-[#fff]">
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
      </div>
      <div className="items-center">
        <a href="#">
          <button className="bg-[#4842c8] my-[0px] font-bold text-[#fff] px-[30px] py-[11px] rounded-[7px]">
            Get A Queue
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
