import React, { useState, useRef } from "react";
import "./History.css";
import {  FaUsers, FaHandshake, FaBuilding, FaCertificate, FaCrown, FaGlobeAfrica } from "react-icons/fa";

const HistoryWithToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const topRef = useRef(null);

  const toggleReadMore = () => {
    setExpanded(!expanded);
    // when closing, scroll to the top of the component
    if (expanded && topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="history-container" ref={topRef} data-aos="fade-down">
      <b data-aos="fade-up">Our History</b>

      <div className={`history-text ${expanded ? "expanded" : "collapsed"}`}>
        <p>
          The Ilobu Tilers Association, was formed in <strong>2010</strong> by a small but 
            determined group of tilers in Ilobu, Osun State. The vision was clear — to unite skilled professionals, 
          promote high-quality craftsmanship, and create a support system for members in an increasingly competitive construction industry.
        </p>

        <p>
          In its early days, the association consisted of about <strong>12 founding members</strong>, including:
        </p>
        <ul>
          <li>Ogunmodede Azeez (First Chairman)</li>
          <li>Hazan Abideen</li>
          <li>Salam Muwaliu</li>
          <li>Oseni Munirudeen Adesanjo</li>
          <li>Olatoye Teslim</li>
          <li>Olatunji Wakeel</li>
          <li>Ibrahim Ridwan</li>
          <li>Oseni Kozeem</li>
          <li>Aasa Ifagbenleke</li>
          <li>Badmus Hammed</li>
          <li>Olagunju Asimiyu</li>
        </ul>

        <p>
          The group’s first meetings were held every Sunday at <strong>L.A. Gbobamu Primary School, Ilobu</strong>.
           Over the years, the meeting venues changed several times — from <strong>Dagbolu area</strong> to <strong>Balogun’s compound</strong>, 
           then to the <strong>Ilobu House</strong>, and later to the <strong>Bricklayers House</strong>, before we now later moved to our own building
           in Konda Area, Ilobu.
        </p>

        <h3><FaUsers /> Leadership Timeline</h3>
        <p>
          - <strong>2010–2013:</strong> Ogunmodede Azeez served as the first Chairman until relocating out of state.<br />
          - <strong>2013–2015:</strong> Hazan Abideen took over leadership.<br />
          - <strong>2015–2020:</strong> Salam Muwaliu was elected through the first official vote.<br />
          - <strong>2020–2023:</strong> Salawudeen Afeez assumed leadership after a democratic election.<br />
          - <strong>2023–Present:</strong> Salawudeen Afeez was re-elected and continues to serve.
        </p>

        <h3><FaCertificate /> Official Registration</h3>
        <p>
          In <strong>2011</strong>, Ilobu Tilers Association was officially registered with the <strong>Osun State Ministry of Commerce, Abere</strong>. 
          Members were issued both a TETICEAP certificate and identification cards — a 
          milestone that established the association as a recognized professional body in Ilobu.
        </p>

        <h3><FaHandshake /> Partnership with Osun State Tilers Association</h3>
        <p>
          While TETICEAP was our beginning, our journey reached new heights in <strong>2014</strong>
           when the <strong>Osun State Tilers Association (Interior & Exterior Decorators)</strong> invited to join them as they have met others town too,
            Their mission then was quite simple and understandable , to form a uniform body throughout the state, 
             we proudly decided to join their ranks — a decision that reshaped our identity and broadened our horizons.
        </p>

        <p>
          <strong><FaCrown /> The Osun State Tilers Association</strong> is more than just a union —
           it is the <em>prestigious umbrella body</em> representing tilers across the state,
            and one of the most respected tiling associations in Nigeria. Their reputation for excellence,
             fairness, and professional unity is unmatched. Through them, our work and our name travel far beyond Ilobu,
              carrying weight and recognition in every corner of Nigeria’s tiling and construction industry.
        </p>

        <ul>
          <li><FaGlobeAfrica /> Recognized across Nigeria as a standard of tiling excellence.</li>
          <li><FaHandshake /> Opens doors to major projects and government opportunities.</li>
          <li><FaBuilding /> Strengthens our credibility before clients and contractors.</li>
          <li><FaUsers /> Connects us to a powerful network of artisans and professionals.</li>
        </ul>

        <p>
          Today, while we cherish our TETICEAP roots,
           we proudly operate under the banner of the <strong>Osun State Tilers Association</strong>.
            They are our voice, our shield, and our bridge to the wider world — and we honor them with the highest respect.
        </p>

        <h3><FaBuilding /> Our Purpose</h3>
        <p>
          Ilobu Tilers Association was created to:
        </p>
        <ul>
          <li>Promote excellence in tiling services</li>
          <li>Standardize service charges and protect members from exploitation.</li>
          <li>Encourage ethical practices and professional integrity.</li>
          <li>Mentor and train new artisans in modern tiling techniques.</li>
          <li>Provide a strong, united voice for tilers in Ilobu and beyond.</li>
        </ul>

        <p>
          Together with the Osun State Tilers Association,
           we are building not only better floors and walls tiling services —
            but a stronger, united, and respected profession for generations to come.
        </p>
      </div>

      <button className="toggle-btn" onClick={toggleReadMore} data-aos="fade-up">
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
};

export default HistoryWithToggle;
