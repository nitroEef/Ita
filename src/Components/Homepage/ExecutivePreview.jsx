import React from "react";
import { Link } from "react-router-dom";

import { FaUsers } from "react-icons/fa";
import "./ExecutivePreview.css";

const executives = [
  { 
    name: "Mr Salaudeen Afeez Flenjo", 
    position: "Chairman", 
    phone: "08012345678", 
    image: "/Ita/ilobu.png", 
    address: "No. 1 Tilers Street, Ilobu, Osun State" 
  },
  { 
    name: "Mr. Ayo", 
    position: "Vice Chairman", 
    phone: "08023456789", 
    image: "/Ita/luk.jpg", 
    address: "No. 2 Tilers Street, Ilobu, Osun State" 
  },
  { 
    name: "Mr. Mustapha Ismahil Adewale", 
    position: "Secretary", 
    phone: " 07038937441", 
    image: "/Ita/small.jpg", 
    address: "Oganla compound, Ilobu, Osun State" 
  },
    { 
    name: "Mr. Mustapha Ismahil Adewale", 
    position: "Secretary", 
    phone: " 07038937441", 
    image: "/Ita/irun.jpg", 
    address: "Oganla compound, Ilobu, Osun State" 
  }
 
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
    <Link to="./exco">  <button className="view-all">View All Executives</button> </Link>
    </section>
  );
};

export default ExecutivePreview;
