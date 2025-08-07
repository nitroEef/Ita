import { useState } from "react";
// Correct import
import MemberCard from "./MemberCard.jsx";

import "./Members.css";

const membersData = [

  {
    name: "Tiler Musa",
    phone: "08087654321",
    address: "Ilobu Estate",
    specialty: "Bathroom Tiling",
    image: "/assets/musa.jpg",
  },
  {
    name: "Tiler Sade",
    phone: "08123456789",
    address: "Tilers Lane, Ilobu",
    specialty: "Kitchen & Mosaic",
    image: "/assets/sade.jpg",
  }
,

  {
    name: "Tiler Sade",
    phone: "08123456789",
    address: "Tilers Lane, Ilobu",
    specialty: "Kitchen & Mosaic",
    image: "/assets/sade.jpg",
  },{
    name: "Tiler Ayo",
    phone: "08012345678",
    address: "Main Street, Ilobu",
    specialty: "Wall & Floor Tiling",
    image: "/public/oo.jpg",
  },
  {
    name: "Tiler Musa",
    phone: "08087654321",
    address: "Ilobu Estate",
    specialty: "Bathroom Tiling",
    image: "/assets/musa.jpg",
  },
  {
    name: "Tiler Sade",
    phone: "08123456789",
    address: "Tilers Lane, Ilobu",
    specialty: "Kitchen & Mosaic",
    image: "/assets/sade.jpg",
  }
,

  {
    name: "Tiler Sade",
    phone: "08123456789",
    address: "Tilers Lane, Ilobu",
    specialty: "Kitchen & Mosaic",
    image: "/assets/sade.jpg",
  },{
    name: "Tiler Ayo",
    phone: "08012345678",
    address: "Main Street, Ilobu",
    specialty: "Wall & Floor Tiling",
    image: "/public/oo.jpg",
  },
  {
    name: "Tiler Musa",
    phone: "08087654321",
    address: "Ilobu Estate",
    specialty: "Bathroom Tiling",
    image: "/assets/musa.jpg",
  },
  {
    name: "Tiler Sade",
    phone: "08123456789",
    address: "Tilers Lane, Ilobu",
    specialty: "Kitchen & Mosaic",
    image: "/assets/sade.jpg",
  }
,

  {
    name: "Tiler Sade",
    phone: "08123456789",
    address: "Tilers Lane, Ilobu",
    specialty: "Kitchen & Mosaic",
    image: "/assets/sade.jpg",
  },{
    name: "Tiler Ayo",
    phone: "08012345678",
    address: "Main Street, Ilobu",
    specialty: "Wall & Floor Tiling",
    image: "/public/oo.jpg",
  },
  {
    name: "Tiler Musa",
    phone: "08087654321",
    address: "Ilobu Estate",
    specialty: "Bathroom Tiling",
    image: "/assets/musa.jpg",
  },
 

  {
    name: "Tiler Sade",
    phone: "08123456789",
    address: "Tilers Lane, Ilobu",
    specialty: "Kitchen & Mosaic",
    image: "/assets/sade.jpg",
  }
  // Add more tilers as needed
];

function Members() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = membersData.filter((member) =>
    `${member.name} ${member.address} ${member.specialty}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="members-page">
      <h1>Our Registered Tilers</h1>
      <p className="intro">
        We are over 70 dedicated and experienced tilers, committed to quality work across Ilobu and beyond.
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Search by name, address, or specialty..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="members-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((tiler, index) => (
            <MemberCard key={index} {...tiler} />
          ))
        ) : (
          <p>No matching tilers found.</p>
        )}
      </div>
    </div>
  );
}

export default Members;
