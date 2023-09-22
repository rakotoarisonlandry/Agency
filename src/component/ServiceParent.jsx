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
        <Service />
      </div>
    )
}

export default ServiceParent;