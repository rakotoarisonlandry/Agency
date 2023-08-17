import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./component/header";
import Home from "./component/homePage";
import Sponsor from "./component/sponsor";
import Service from "./component/Service";
import Team from "./component/teampage";
import Form from "./component/form";
import { ThemeProvider } from "./Tool/ThemeContext";
import bg from "../src/assets/image/bg.png";
import illu from "../src/assets/image/illu.png";
import blob from "../src/assets/image/blob.svg";
import blob1 from "../src/assets/image/blob1.svg";
import blob2 from "../src/assets/image/blob2.svg";
import blob3 from "../src/assets/image/blob3.svg";

function App() {
  const [animationVariant, setAnimationVariant] = useState("animate");

  useEffect(() => {
    const animateInfiniteLoop = () => {
      setTimeout(() => {
        setAnimationVariant((prev) =>
          prev === "animate" ? "animateAlt" : "animate"
        );
        animateInfiniteLoop();
      }, 1000); // 2000ms = 2 seconds
    };

    animateInfiniteLoop();
  }, []);

  return (
    <ThemeProvider>
      <div
        className="min-h-screen bg-[#f7f7f7] "
        style={{
          backgroundImage: `url(${illu})`,
          backgroundPosition: "top",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Home />
      </div>
      <div className=" ">
        <Sponsor />
      </div>

      <div className="min-h-screen bg-[#f7f7f7]" style={{ width: "100%" }}>
        <motion.img
          src={blob}
          className="absolute top-[110%] left-[5%] w-[20%]"
          style={{ zIndex: "0" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: [1], // L'opacité change de 0 à 1
            y: [0, 20, 0], // L'animation commence à y = 0, monte à y = 20, puis revient à 0
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.img
          src={blob1}
          className="absolute top-[160%] left-[79%] w-[20%] "
          style={{ zIndex: "0" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: [1], // L'opacité change de 0 à 1
            y: [0, 20, 0], // L'animation commence à y = 0, monte à y = 20, puis revient à 0
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.img>
        <img
          src={blob2}
          className="absolute top-[180%] left-[5%] w-[20%] "
          style={{ zIndex: "0" }}
        ></img>
        <img
          src={blob3}
          className="absolute top-[190%] left-[40%] w-[29%] "
          style={{ zIndex: "0" }}
        ></img>
        <Service />
      </div>

      <div className="min-h-screen ">
        <Team />
      </div>

      <div
        className="min-h-screen bg-gradient-to-t from-[#e0eeef] to-white "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "bottom",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Form />
        <p
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "0px",
            paddingTop: "300px",
            fontSize: "16px",
          }}
        >
          2023
          <a
            href="https://github.com/rakotoarisonlandry/Agency"
            style={{ fontSize: "15px", textDecoration: "underline" }}
          >
            @rakotoarisonlandry
          </a>
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
