import React from "react";
import ServicePage from "./ServicePage";
import "../assets/styles/app.css";

function Service() {
  return (
    <React.Fragment>
      <div className="text-center">
        <div className="w-1/2 mx-auto pt-16 pb-10 relative">
          <h1 className="text-2xl font-bold" style={{ background: "linear-gradient(45deg, #e0559e, #32a7df)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
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
