import { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-auto w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
