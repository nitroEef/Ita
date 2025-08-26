import React from "react";
import { FaWhatsapp, FaEnvelope , FaPhone} from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="popo">
      <div className="popo-content-container">
        
        {/* Left - Text */}
        <div className="popo-content">
          <h1 data-aos="fade-left">Osun State Tilers Association <span>[ILOBU ZONE] </span></h1>
          <p data-aos="fade-left">UP TILERS : GOOD WORKS TO OUR CLIENTS !!!</p>

          <div className="hero-description">
            <p data-aos="fade-left">
 Welcome to the official website of the Ilobu Tilers Association! 
 Here you’ll find our recognized members and dedicated executives. If someone isn’t listed here, 
 they are not part of our association. Together, 
 we are committed to promoting quality tiling and building a stronger Ilobu town and beyond.”
            </p>
          
          </div>

          {/* Buttons */}
          <div className="hero-buttons" data-aos="fade-left">
            <a href="#contact" className="icon-btn email">
              <FaEnvelope /> 
            </a>
             {/* <a href="#contact" className="icon-btn phone">
              <FaPhone /> 
            </a> */}
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
        <div className="popo-image-container" data-aos="fade-left">
          <img src="/ilotiler.png" alt="Tiler at work" className="popo-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
