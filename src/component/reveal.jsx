import React, { useEffect, useRef } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView =useInView(ref, {once :true})
  const mainControls =useAnimation();
  useEffect(()=>{
    if(isInView){
        mainControls.start("visible")
    }
  })
    return (
    <motion.div ref={ref}
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}  
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5 ,delay :0.25}}
    >   
      {children}
    </motion.div>
  );
};

export default Reveal;





