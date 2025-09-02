import React, { useState } from "react";
import "./AdsSlider.css";

const adsData = [
  {
    id: 1,
    image: "/ugo.jpg",
    title: "Ugo City Homes and Buildings Materials",
    description: "Best quality tiles, any sorts of plumbing materials with affordable prices in the community{for both wholesales and retails }.",
    phone: "2348106586926", // use international format (without +)
    address: "Opposite Bovas Filling Station,Ilobu  road, Agunbelewo, Osogbo",
  },
  {
    id: 2,
    image: "/ads2.jpg",
    title: "Olu Tilers & Traders",
    description: "Trusted supplier with years of experience in tiling.",
    phone: "2348034567890",
    address: "45 Tilers Avenue, Osogbo",
  },
  {
    id: 3,
    image: "/ads3.jpg",
    title: "Classic Tiles Hub",
    description: "Premium designs and top-notch customer service.",
    phone: "2347012345678",
    address: "78 Builder Street, Ilorin",
  },
];

export default function AdsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAd = () => {
    setCurrentIndex((prev) => (prev + 1) % adsData.length);
  };

  const prevAd = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? adsData.length - 1 : prev - 1
    );
  };

  const openWhatsApp = (phone) => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <div className="ads-container">
      <div className="ads-card">
        <img
          src={adsData[currentIndex].image}
          alt={adsData[currentIndex].title}
          className="ads-image"
        />
        <div className="ads-content">
          <h2>{adsData[currentIndex].title}</h2>
          <p>{adsData[currentIndex].description}</p>
          <p className="ads-address">
            📍 {adsData[currentIndex].address}
          </p>
       <p>
  <button
    className="ads-phone-btn"
    onClick={() => openWhatsApp(adsData[currentIndex].phone)}
  >
    📞 Chat on WhatsApp
  </button>
</p>

        </div>
      </div>

      {/* Navigation */}
      <button className="ads-btn left" onClick={prevAd}>
        ❮
      </button>
      <button className="ads-btn right" onClick={nextAd}>
        ❯
      </button>
    </div>
  );
}
