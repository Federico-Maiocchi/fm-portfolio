import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <div className="h-100 flex flex-column">
        <Navbar />
        {/* tutte le pagine verranno indirizzate qui */}
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
