import React from "react";
import { FaHome, FaUsers, FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MenuIcon.css";

const MenuIcon = () => {
  return (
    <div className="menu-bar-container">
      <Link to="/" className="menu-icon-button">
        <FaHome size={20} />
        <span>Home</span>
      </Link>

      <Link to="/members" className="menu-icon-button">
        <FaUsers size={20} />
        <span>Members</span>
      </Link>

      <Link to="/exco" className="menu-icon-button">
        <FaHistory size={20} />
        <span>Excos</span>
      </Link>
    </div>
  );
};

export default MenuIcon;
