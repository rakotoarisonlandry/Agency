import React, { useState } from "react";
import './assets/styles/animation.css'
import Header from "./component/header";
import Home from "./component/homePage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
