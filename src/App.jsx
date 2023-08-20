import React, { useState, useEffect } from "react";
import Header from "./component/header";
import Home from "./component/homePage";
import Sponsor from "./component/sponsor";
import Team from "./component/teampage";
import Form from "./component/form";
import { ThemeProvider } from "./Tool/ThemeContext";
import bg from "../src/assets/image/bg.png";
import illu from "../src/assets/image/illu.png";
import ServiceParent from "./component/ServiceParent";

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen bg-[#f7f7f7]"
        style={{
          backgroundImage: `url(${illu})`,
          backgroundPosition: "0 -280px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <Header/>
        <Home />
      </div>

      <div>
        <Sponsor />
      </div>

      <div>
        <ServiceParent />
      </div>

      <div className="min-h-screen bg-[#f7f7f7]">
        <Team />
      </div>

      <div
        className="min-h-screen bg-[#f7f7f7] "
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
