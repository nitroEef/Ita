import React from "react";
import { FaHome, FaUsers, FaPhone, FaHistory } from "react-icons/fa";
import "./MenuIcon.css";

const MenuIcon = () => {
  const handleClick = (section) => {
    console.log(`Navigating to ${section}`);
    // TODO: Use react-router or scroll into view
  };

  return (
    <div className="menu-bar-container">
      <button className="menu-icon-button" onClick={() => handleClick("home")}>
        <FaHome size={20} />
        <span>Home</span>
      </button>
      <button className="menu-icon-button" onClick={() => handleClick("members")}>
        <FaUsers size={20} />
        <span>Members</span>
      </button>
      <button className="menu-icon-button" onClick={() => handleClick("contact")}>
        <FaPhone size={20} />
        <span>Contact</span>
      </button>
      <button className="menu-icon-button" onClick={() => handleClick("history")}>
        <FaHistory size={20} />
        <span>Excos</span>
      </button>
    </div>
  );
};

export default MenuIcon;
