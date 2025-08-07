import React from "react";
import "./PatronMatron.css";
import patronImage from "/public/ilobu.png";   // Replace with your actual image path
import matronImage from "/public/oo.jpg";   // Replace with your actual image path

const PatronMatron = () => {
  return (
    <div className="newspaper-section">
      <h2 className="headline">Words from Our Patron & Matron</h2>

      <div className="article">
        <div className="photo-block">
          <img src={patronImage} alt="Patron of the Association" />
          <h3>Chief Alabi Adebayo</h3>
          <p className="title">Patron</p>
        </div>
        <div className="article-text">
          <p>
“Over the years, I’ve had the privilege of watching the Ilobu Tilers Association evolve from a handful of hardworking craftsmen into a recognized body of excellence. One of the most inspiring parts of this journey has been hearing testimonials from satisfied clients—homeowners, business owners, even contractors—who speak highly of our tilers’ professionalism, neatness, and attention to detail.

Their services go beyond basic wall and floor tiling. They provide consultation for material selection, design layout planning, precision cutting, grouting, and even tile restoration. Whether it's a luxurious marble floor in a hotel lobby or intricate mosaic art in a kitchen backsplash, these men and women carry out their work with artistry and pride.

I’ve seen clients bring photos of finished works, send thank-you letters, and even refer others based solely on the craftsmanship they received. That is the real reward of mentorship—seeing those you support making an impact that spreads beyond your immediate reach.

As a Patron, I consider this association more than just a group. They are my extended family. I’ve watched apprentices turn into masters. I’ve seen challenges turned into innovations. I’ve witnessed unity even in competition, and progress despite all odds.

Supporting them isn’t just a duty—it is an honor. I see them not just as tilers but as architects of beauty and durability, laying every tile like a seed of legacy. Their growth, their loyalty to standards, and their commitment to community upliftment are things I hold in the highest regard.

This association is not just building floors and walls. They’re building trust, dignity, and opportunity.”
          </p>
        </div>
      </div>

      <div className="article reverse">
        <div className="photo-block">
          <img src={matronImage} alt="Matron of the Association" />
          <h3>Mrs. Yetunde Oladimeji</h3>
          <p className="title">Matron</p>
        </div>
        <div className="article-text">
          <p>
            “Being a Matron isn’t just a title; it’s a duty to nurture, empower, and guide. The tilers
            have demonstrated unity, professionalism, and heart. Together, we’ve built more than structures—
            we’ve built a family.”
          </p>
        </div>
      </div>

      <div className="relationship">
        <p>
          The collaboration between our Patron and Matron has fostered harmony, progress, and credibility
          within the association. Their leadership reflects wisdom, encouragement, and unwavering support,
          making them pillars of our success story.
        </p>
      </div>
    </div>
  );
};

export default PatronMatron;
