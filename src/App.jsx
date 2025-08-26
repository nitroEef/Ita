import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/HomePage.jsx";
import "./App.css";
import Members from "./Components/Memberpage/Members.jsx";
import Executives from "./Components/Executives/Executives.jsx";

function App() {
  
  return (
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/members" element={<Members />} />
      <Route path="/exco" element={<Executives />} />
    </Routes>
  );
}

export default App;
