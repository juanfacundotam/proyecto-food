import { Landing, Home, Detail, Create, About } from "./views";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [loadNavs, setLoadNavs] = useState(false)
  const location = useLocation();

  const handleLoadNavs = (bool) => {
    setLoadNavs(bool)
  }
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home handleLoadNavs={handleLoadNavs}/>} />
        <Route path="/detail/:id" element={<Detail handleLoadNavs={handleLoadNavs}/>} />
        <Route path="/create" element={<Create handleLoadNavs={handleLoadNavs}/>} />
        <Route path="/about" element={<About handleLoadNavs={handleLoadNavs}/>} />
      </Routes>
      {location.pathname !== "/" && loadNavs && <Footer />}

    </div>
  );
}

export default App;
