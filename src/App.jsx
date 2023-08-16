import React, { useState } from "react";
import './assets/styles/animation.css'
import Header from "./component/header";
import Home from "./component/homePage";
import Sponsor from "./component/sponsor";
import Service from "./component/Service";
import Team from "./component/teampage";
import Form from "./component/form";
import {ThemeProvider } from "./Tool/ThemeContext"
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white">
        <Header />
        <Home />
      </div>
      <div>
        <Sponsor/>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-[#e0eeef] to-white">
        <Service/>
      </div>

      <div className="min-h-screen ">
        <Team/>
      </div>

      <div className="min-h-screen bg-gradient-to-t from-[#e0eeef] to-white ">
        <Form/>
      </div>
    </ThemeProvider>
  );
}

export default App;
