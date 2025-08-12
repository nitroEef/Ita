import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/HomePage.jsx";
import "./App.css";
import Members from "./Components/Memberpage/Members.jsx";
import Executives from "./Components/Executives/Executives.jsx";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <Router>
      {/* <Homepage /> */}
        
      <Routes>
        <Route path="/" element={<Homepage />} /> */
        <Route path="/members" element={<Members/>} />
      
        <Route path="/exco" element={<Executives />} /> 
      </Routes>
        </Router>
  );
}

export default App;
