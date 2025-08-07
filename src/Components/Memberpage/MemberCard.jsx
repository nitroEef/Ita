import React from "react";
import "./MemberCard.css"; // if you have styles


function MemberCard({ name, phone, address, specialty, image }) {
//   const formattedPhone = phone.replace(/^0/, "234"); // Converts "080123..." to "23480123..."

  return (
    <div className="member-card">
      <img src={image} alt={name} className="member-image" />
      <h3>{name}</h3>
      <p><strong>Specialty:</strong> {specialty}</p>
      <p><strong>Address:</strong> {address}</p>
      <p>
        <strong>Phone:</strong>{" "}
        <a
        //   href={`https://wa.me/${formattedPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          {phone}
        </a>
      </p>
    </div>
  );
}

export default MemberCard;
