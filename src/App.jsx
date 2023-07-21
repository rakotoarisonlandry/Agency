import React, { useState } from "react";
import './assets/styles/animation.css'
import Header from "./component/header";
import Home from "./component/homePage";

function App() {
  return (
    <React.Fragment>
      <div style={{
        backgroundImage: "linear-gradient(#fff, #f7fce6)",
        minHeight: "100vh", 
      }}>
        <Header />
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;

