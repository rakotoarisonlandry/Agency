import React, { useState, useEffect } from "react";
import blob from "../assets/image/blob.svg";
import blob1 from "../assets/image/blob1.svg";
import blob2 from "../assets/image/blob2.svg";
import blob3 from "../assets/image/blob3.svg";
import { motion } from "framer-motion";
import Service from "./Service";
function ServiceParent(){
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
  
    return(
        <div className="min-h-screen " style={{ width: "100%" }}>
        {/* <motion.img
          src={blob}
          className="absolute top-[110%] left-[5%] w-[20%]"
          style={{ zIndex: "0" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: [1], // L'opacité change de 0 à 1
            y: [0, 20, 0], // L'animation commence à y = 0, monte à y = 20, puis revient à 0
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        /> */}

        {/* <motion.img
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
        <motion.img
          src={blob2}
          className="absolute top-[180%] left-[5%] w-[20%] "
          style={{ zIndex: "0" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: [1], // L'opacité change de 0 à 1
            y: [0, 20, 0], // L'animation commence à y = 0, monte à y = 20, puis revient à 0
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.img>
        <motion.img
          src={blob3}
          className="absolute top-[190%] left-[40%] w-[29%] "
          style={{ zIndex: "0" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: [1], // L'opacité change de 0 à 1
            y: [0, 20, 0], // L'animation commence à y = 0, monte à y = 20, puis revient à 0
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.img> */}
        <Service />
      </div>
    )
}

export default ServiceParent;