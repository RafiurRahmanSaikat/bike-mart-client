import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import heroshape1 from "./assets/hero-shape-1.svg";
import heroshape2 from "./assets/hero-shape-2.svg";
const App = () => {
  return (
    <div className="App">
      {/* <img className="absolute  top-0" src={heroshape1} alt="" />
      <img className="absolute   top-0  right-0" src={heroshape2} alt="" /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
