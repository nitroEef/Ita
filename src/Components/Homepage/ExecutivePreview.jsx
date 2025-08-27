import React from "react";
import { Link } from "react-router-dom";

import { FaUsers } from "react-icons/fa";
import "./ExecutivePreview.css";

const executives = [
  { 
    name: "Mr Salaudeen Afeez Flenjo", 
    position: "Chairman", 
    phone: "08012345678", 
    image: "/ilobu.png", 
    address: "No. 1 Tilers Street, Ilobu, Osun State" 
  },
  { 
    name: "Mr. Ayo", 
    position: "Vice Chairman", 
    phone: "08023456789", 
    image: "/luk.jpg", 
    address: "No. 2 Tilers Street, Ilobu, Osun State" 
  },
  { 
    name: "Mr. Mustapha Ismahil Adewale", 
    position: "Secretary", 
    phone: " 07038937441", 
    image: "/small.jpg", 
    address: "Oganla compound, Ilobu, Osun State" 
  },
    { 
    name: "Mr. Jimoh Saheed", 
    position: "Chief Task Force", 
    phone: " 07066007989", 
    image: "/ikuun.jpg", 
    address: "Ibigbami compound, Ilobu, Osun State" 
  }
 
];

const ExecutivePreview = () => {
  return (
    <section className="exco-preview" data-aos="fade-right">
      <h2 data-aos="fade-up">
        <FaUsers style={{ marginRight: "10px" }} />
        Meet Our Executives
      </h2>
      <div className="exco-gridd" data-aos="fade-right">
        {executives.map((exec, index) => (
          <div className="executive-card" key={index} data-aos="fade-right">
            <img src={exec.image} alt={exec.name} />
            <div className="executive-info">
              <h4>{exec.name}</h4>
              <p>{exec.position}</p>
              <p>{exec.phone}</p>
            </div>
          </div>
        ))}
      </div>
    <Link to="./exco">  <button className="view-all" data-aos="fade-right">View All Executives</button> </Link>
    </section>
  );
};

export default ExecutivePreview;
