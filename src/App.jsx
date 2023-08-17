import React, { useState } from "react";

import Header from "./component/header";
import Home from "./component/homePage";
import Sponsor from "./component/sponsor";
import Service from "./component/Service";
import Team from "./component/teampage";
import Form from "./component/form";
import { ThemeProvider } from "./Tool/ThemeContext";
import bg from "../src/assets/image/svg.png";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen ">
        <Header />
        <Home />
      </div>
      <div>
        <Sponsor />
      </div>

      <div
        className="min-h-screen bg-gradient-to-b from-[#e0eeef] to-white service"
        style={{ width: "100%" }}
      >
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
          backgroundRepeat:"no-repeat"
        }}
      >
        <Form />
         <p style={{textAlign:"center" ,color:"white" ,marginBottom:"0px",paddingTop:"100px",fontSize:"16px"}}>2023 <a href="https://github.com/rakotoarisonlandry/Agency" style={{fontSize:"15px"}}> @rakotoarisonlandry</a></p>
      </div>
    </ThemeProvider>
  );
}

export default App;
