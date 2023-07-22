import React, { useState } from "react";
import './assets/styles/animation.css'
import Header from "./component/header";
import Home from "./component/homePage";
import Sponsor from "./component/sponsor";
import Service from "./component/Service";
function App() {
  return (
    <React.Fragment>
      <div style={{
        backgroundImage: "linear-gradient(rgb(54 197 240) ,#fff )",/*rgb(54 197 240)*/ 
        minHeight: "100vh", 
      }}>
        <Header />
        <Home />
      </div>
      <div>
        <Sponsor/>
      </div>

      <div style={{
        backgroundImage: "linear-gradient(#fff, #f7fce6)",
        minHeight: "100vh"
      }}>
        <Service/>
      </div>
    </React.Fragment>
  );
}

export default App;

