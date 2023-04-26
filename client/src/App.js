import { Landing, Home, Detail, Create, About } from "./views";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const location = useLocation();


  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      {location.pathname !== "/" && <Footer />}

    </div>
  );
}

export default App;
