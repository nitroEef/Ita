import React from "react";
import { FaWhatsapp, FaEnvelope , FaPhone} from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="popo">
      <div className="popo-content-container">
        
        {/* Left - Text */}
        <div className="popo-content">
          <h1>Osun State Tilers Association <span>[ILOBU ZONE] </span></h1>
          <p>UP TILERS : GOOD WORKS TO OUR CLIENTS !!!</p>

          <div className="hero-description">
            <p>
              You are welcome to our official website for the Ilobu tilers. You will
              meet all the bonafide members here and our executives. Know that whoever
              you don't find here is not part of us.
            </p>
          
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="icon-btn email">
              <FaEnvelope /> 
            </a>
             <a href="#contact" className="icon-btn phone">
              <FaPhone /> 
            </a>
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="popo-image-container">
          <img src="/we.png" alt="Tiler at work" className="popo-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
