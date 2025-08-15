import React from "react";
import "./PatronMatron.css";

const PatronMatron = () => {
  return (
    <div className="newspaper-section">
      <h2 className="headline">Words from Our Chairman, Patron & Matron  </h2>

      {/* Patron Section */}
      <div className="article">
        <div className="photo-block">
          <h3> Alabi Adebayo</h3>
          <p className="title">Chairman</p>
        </div>
        <div className="article-text">
          <p>
            “Over the years, I’ve had the privilege of watching the Ilobu Tilers Association evolve from a handful of hardworking craftsmen into a recognized body of excellence...
            {/* Truncated for brevity */}
          </p>
        </div>
      </div>

      {/* Matron Section */}
      <div className="article reverse">
        <div className="photo-block">
          <img src={matronImage} alt="Matron of the Association" />
          <h3>Mr Yetunde Oladimeji</h3>
          <p className="title">Patron</p>
        </div>
        <div className="article-text">
          <p>
            “Being a Matron isn’t just a title; it’s a duty to nurture, empower, and guide. The tilers have demonstrated unity, professionalism, and heart...
            {/* Truncated for brevity */}
          </p>
        </div>
      </div>

      {/* Chairman Section */}
      <div className="article">
        <div className="photo-block">
          <img src={chairmanImage} alt="Chairman of the Association" />
          <h3>MrS. Kolawole Tijani</h3>
          <p className="title">Matron</p>
        </div>
        <div className="article-text">
          <p>
            “Leading the Ilobu Tilers Association has been one of the greatest honors of my life. Our mission is built not only on expertise, but also on integrity and mutual respect.
            <br /><br />
            Every member of this association is a reflection of the values we uphold—honesty, discipline, craftsmanship, and service. I have seen young tilers grow into community leaders, lifting others as they climb.
            <br /><br />
            From organizing training workshops to resolving disputes, our journey has taught me that unity is the foundation of progress. I am especially proud of how we’ve blended traditional skill with modern precision.
            <br /><br />
            My commitment remains steadfast: to protect the dignity of our profession, expand opportunities for our members, and serve the people of Ilobu with excellence. To our supporters and clients — thank you for trusting us. To our members — let’s keep laying the foundation of a better future, one tile at a time.”
          </p>
        </div>
      </div>

      {/* Relationship Summary */}
      <div className="relationship">
        <p>
          The collaboration between our Patron, Matron, and Chairman has fostered harmony, progress, and credibility
          within the association. Their leadership reflects wisdom, encouragement, and unwavering support,
          making them pillars of our success story.
        </p>
      </div>
    </div>
  );
};

export default PatronMatron;
