import React, { useState } from "react";
import './assets/styles/animation.css'
import Header from "./component/header";
import Home from "./component/homePage";
import Sponsor from "./component/sponsor";
import Service from "./component/Service";

function App() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white">
        <Header />
        <Home />
      </div>
      <div>
        <Sponsor/>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-white to-yellow-200">
        <Service/>
      </div>
    </React.Fragment>
  );
}

export default App;
