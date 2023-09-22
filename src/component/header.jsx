import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import { useThemeContext } from "../Tool/ThemeContext";
import { motion } from "framer-motion";
function Header() {
  const [theme,setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
   )
  const element = document.documentElement;
  const darkQuery =   window.matchMedia("(prefers-color-scheme : dark)");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  function onWindowsMatch(){
    if(localStorage.theme === "dark" || (!("theme" in localStorage ) && darkQuery.matches) ){
      element.classList.add("dark")
    }else{
      element.classList.remove("dark")
    }
  }
  useEffect(() => {
    
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem("theme" ,"dark")
        break;
        case 'light':
          element.classList.remove('dark')
          localStorage.setItem("theme" ,"light")
          break;
      default:
        localStorage.removeItem("theme")
        onWindowsMatch()
        break;
    }
  },[theme]);

  darkQuery.addEventListener("change" , (e) =>{
    if(!("theme" in localStorage)){
      if(e.matches){
        element.classList.add("dark")
      }else{
        element.classList.remove('dark')
      }
    }
  })
  const { toggleTheme, utheme } = useThemeContext();

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
      className={`dark:bg-slate-900 dark:Text-slate-900  flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${
        isLightTheme ? "bg-light" : "bg-dark"
      }`}
    >
      <motion.div
        className="flex items-center text-xl  md:text-2xl pt-6 text-[#00f] font-bold space-x-2"
        style={{ marginLeft: "14%", marginBottom: "0%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        dark:text-gray-100
        dark:bg-scale-900
      >
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
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
        className={`flex flex-col mx-[40%] pt-[30px] text-[19px] px-[30px] md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-bold opacity-80 text-[#fff] ${
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
        <li className="fixed top-[26px] right-10 duration-100  dark:bg-[#1c4e71] bg-[#5c45c3] rounded-full">
          {options?.map((opt) => (
            <button
              key={opt.text} 
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"} `}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Header;
