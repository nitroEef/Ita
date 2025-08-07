import React from "react";
import { FaUsers } from "react-icons/fa";
import "./ExecutivePreview.css";

const executives = [
  {
    name: "Tiler Musa",
    position: "Chairman",
    phone: "08012345678",
    image: "/oo.jpg",
  },
  {
    name: "Tiler Ayo",
    position: "Vice Chairman",
    phone: "08023456789",
    image: "/oo.jpg",
  },
  {
    name: "Tiler Sola",
    position: "Secretary",
    phone: "08034567890",
    image: "/oo.jpg",
  },
];

const ExecutivePreview = () => {
  return (
    <section className="members-preview">
      <h2>
        <FaUsers style={{ marginRight: "10px" }} />
        Meet Our Executives
      </h2>
      <div className="members-gridd">
        {executives.map((exec, index) => (
          <div className="executive-card" key={index}>
            <img src={exec.image} alt={exec.name} />
            <div className="executive-info">
              <h4>{exec.name}</h4>
              <p>{exec.position}</p>
              <p>{exec.phone}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all">View All Executives</button>
    </section>
  );
};

export default ExecutivePreview;
