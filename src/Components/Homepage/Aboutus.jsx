import React, { useState } from "react";
import "./Aboutus.css";

// Using images from your public folder. Because your GitHub Pages site sits at /Ita, we prefix each path with /Ita/
const tabs = [
  {
    id: "who",
    label: "Who We Are",
    content:
      "Ilobu Tilers Association is a collective of skilled professionals committed to delivering exceptional tiling services throughout Ilobu and neighboring regions. With over 70 members, we stand for excellence, unity, and development in the tiling industry.",
    img: "/ilobu.png"
  },
  {
    id: "mission",
    label: "Our Mission",
    content:
      "To promote quality craftsmanship, ensure fair practices among members, and contribute to the socio-economic development of our community through training and collaboration.",
    img: "/tile.avif"
  },
  {
    id: "impact",
    label: "Community Impact",
    content:
      "We actively engage in community-driven projects such as school renovations, youth training, and city beautification through artistic and functional tiling.",
    img: "/group.jpg"
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("who");
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="about-wrapper" data-aos="fade-right" >
      <b data-aos="fade-up">About Us</b>

      {/* Tab Buttons */}
      <div className="tab-buttons" data-aos="fade-right">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Displayed Content */}
      <div className="tab-content" data-aos="fade-right">
        <img src={current.img} alt={current.label} />
        <p>{current.content}</p>
      </div>
    </div>
  );
}

export default About;
