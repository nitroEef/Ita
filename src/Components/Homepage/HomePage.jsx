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
import Faq from "../FAQ/Faq";

import  AdsSlider from "./AdsSlider";
function Home() {
  return (
 <div className="home-container">


<HeroSection />

<History />

      <About />
   <Service />

      {/* Video Hero Section */}
      <section className="hero" data-aos="fade-in">
        <video autoPlay muted loop className="hero-video">
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay" data-aos="fade-right">
          <h1 >Building Better Spaces, One Tile at a Time</h1>
          <p>Professional tilers united to serve your needs in style and durability.</p>
          <Link to="/members"  data-aos="fade-right"> <button className="cta-btn">Meet Our Members</button> 
          </Link>
        </div>
      </section>

    
    

<ExecutivePreview />
    
    <PatronMatron />
  
{/* <TilerGallery /> */}

<AdsSlider /> 
      <Contact />

   
<Faq />




   
      
      <MenuIcon />
    </div>
  );
}

export default Home;
