import { Landing, Home, Detail, Form, About } from "./views";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [loadNavs, setLoadNavs] = useState(false)
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home setLoadNavs={setLoadNavs}/>} />
        <Route path="/detail/:id" element={<Detail setLoadNavs={setLoadNavs}/>} />
        <Route path="/create" element={<Form setLoadNavs={setLoadNavs}/>} />
        <Route path="/about" element={<About setLoadNavs={setLoadNavs}/>} />
      </Routes>
      {location.pathname !== "/" && loadNavs && <Footer />}

    </div>
  );
}

export default App;
