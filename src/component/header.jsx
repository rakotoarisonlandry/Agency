import React, { useState } from "react";
import logo from "../assets/image/logo.png";
import { useThemeContext } from "../Tool/ThemeContext";
import { motion } from "framer-motion";
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
      <motion.div
        className="flex items-center text-xl  md:text-2xl pt-6 text-[#00f] font-bold space-x-2"
        style={{ marginLeft: "14%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <img src={logo} alt="Logo" style={{ width: "40px" }} />
        <span>Agency</span>
      </motion.div>
      {isButtonVisible && (
        <button
          onClick={toggleListVisibility}
          className="bg-[#4842c8] font-bold text-white px-6 py-2 rounded-md md:hidden"
        >
          Menu
        </button>
      )}
      <ul
        className={`flex flex-col mx-[40%] pt-[30px] px-[30px] md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-bold opacity-80 text-[#fff] ${
          isLightTheme ? "text-light" : "text-dark"
        } ${isListVisible ? "md:flex" : "hidden"}`}
      >
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <a href="#">Home</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <a href="#">About</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <a href="#">Service</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <a href="#">Team</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <a href="#">Contact</a>
        </motion.li>
      </ul>
    </div>
  );
}

export default Header;
