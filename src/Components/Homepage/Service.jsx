import "./Service.css";
import React from "react";

const Service = () => {
  return (
    <div className="services-section" data-aos="fade-right">
      <h2 data-aos="fade-up">Our Services</h2>
      <div className="services-grid" data-aos="fade-right">
        <div className="service-card">
          <h3 >Professional Tiling</h3>
          <p>
            We specialize in delivering top-tier wall and floor tiling solutions
            tailored for residential, commercial, and industrial spaces. Our experienced
            tilers are trained to handle various tile types including ceramic, marble, 
            mosaic, and more. 
          </p>
        </div>

        <div className="service-card">
          <h3>Training & Mentorship</h3>
          <p>
            We are committed to nurturing the next generation of tiling professionals.
            Through hands-on training, workshops, and one-on-one mentorship, we help
            upcoming tilers develop both the practical skills and the technical knowledge
            needed to excel in the industry. 
          </p>
        </div>

        <div className="service-card">
          <h3>Material Consultation</h3>
          <p>
            Choosing the right tiling materials can make all the difference in both
            appearance and longevity. 
             We consider factors like texture, color, moisture resistance, and budget to ensure the
            final result is not only beautiful but also built to last. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
