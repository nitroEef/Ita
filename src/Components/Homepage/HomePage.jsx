import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBriefcase, FaQuoteLeft, FaPhoneAlt } from "react-icons/fa";
import "./HomePage.css";

import About from "./Aboutus";

import Service from "./Service";
import MenuIcon from "./Menuicon";
import ExecutivePreview from "./ExecutivePreview";
import HeroSection from "./HeroSection";
import Contact from "../Contact/Contact";
import History from "./History";
import PatronMatron from "../Patron/PatronMatron";
import Faq from "../FAQ/Faq"

function Home() {
  return (
 <div className="home-container">


<HeroSection />

<History />

      <About />

      {/* Video Hero Section */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/watermarked_preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1>Building Better Spaces, One Tile at a Time</h1>
          <p>Professional tilers united to serve your needs in style and durability.</p>
          <button className="cta-btn">Meet Our Members</button>
        </div>
      </section>

    
   <Service />
    

<ExecutivePreview />
    
    <PatronMatron />
  

      <Contact />

   
<Faq />




   
      
      <MenuIcon />
    </div>
  );
}

export default Home;
