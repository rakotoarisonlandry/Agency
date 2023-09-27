import React, { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView =useInView(ref, {once :true})
    return (
    <motion.div
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}  
        initial="hidden"
        animate="visible"
    >   
      {children}
    </motion.div>
  );
};

export default Reveal;





