import React from "react";
import ServicePage from "./ServicePage";
import "../assets/styles/app.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Service() {
  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </span>
      </section>
    );
  }
  return (
    <React.Fragment>
      <div className="text-center">
        <div className="w-1/2 mx-auto pt-16 pb-10 relative">
          <h1 className="text-[40px] font-bold text-[#e0559e]">
            Our Best Services
          </h1>
          <div className="absolute bottom-5 m left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#c77852]"></div>
        </div>
      </div>
      <div>
        <ServicePage />
      </div>
    </React.Fragment>
  );
}

export default Service;
