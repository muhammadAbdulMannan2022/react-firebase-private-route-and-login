import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <h1>react firebase fullstack</h1>
      <Outlet />
    </div>
  );
}

export default App;
