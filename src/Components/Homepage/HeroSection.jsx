import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="popo">
      <div className="popo-content-container">
   
  <div className="popo-content-container"></div>
        <div className="popo-content">
          <h1>Welcome to Ilobu Tilers Association</h1>
          <p>UP TILERS : GOOD WORKS TO OUR CLIENTS !!!.</p>

          <div className="hero-description">
            <p>
              You are welcome to our Official website for the Ilobu tilers. You will meet all the bonafide members here and our exectives.
              know that whoever you dont find here is not part of us 
            
            </p>
            <p>
              Our association aims to nurture talent, uphold industry standards, and bring you top-tier 
              tiling solutions that stand the test of time. Join us in building a future where tiling is both an art and a craft.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary">Contact Us</a>
            <a href="#members" className="hero-btn secondary">View Our Members</a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="popo-image-container">
          <img src="/RR.png" alt="Tiler at work" className="popo-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
