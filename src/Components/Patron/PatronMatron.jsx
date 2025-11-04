import React from "react";
import "./PatronMatron.css";

const PatronMatron = () => {
  return (
    <div className="newspaper-section" data-aos="fade-right">
      <h2 className="headline" data-aos="fade-up">Words from Our Chairman, Patron & Matron  </h2>

      {/* Patron Section */}
      <div className="article" data-aos="fade-right">
        <div className="photo-block">
                   <img src="/chairman.jpg"  className="pati" />

          <h3> Mr Salaudeen Afeez</h3>
          <p className="title">Chairman</p>
          <p>08164586149</p>

        </div>
        <div className="article-text">
          <p>  “Leading the Ilobu Tilers Association has been one of the 
            greatest honors of my life. Our mission is built not only 
            on expertise, but also on integrity and mutual respect.
            Every member of this association is a reflection of the 
            values we uphold—honesty, discipline, craftsmanship,
             and service.
            My commitment remains steadfast: to protect the dignity
             of our profession, expand opportunities for our members,
              and serve the people of Ilobu with excellence. 
              To our supporters and clients — thank you for trusting us. 
              To our members — let’s keep laying the foundation of a better 
              future, Up tiler : God work to our clients.”</p>
      
        </div>
      </div>

      {/* Matron Section */}
      <div className="article reverse" data-aos="fade-right">
        <div className="photo-block">
          <img src="/BABA.jpg" alt="Tiler at work" className="patimage" />

          <h3>Barrister Ogunjide Adeniyi</h3>
          <p className="title">Patron</p>
          <p>08036256403</p>


        </div>
        <div className="article-text">
          <p>
            “Being a Patron isn’t just a title; it’s a duty to nurture, empower, and guide.
The tilers have demonstrated unity, professionalism, and heart—values that set the foundation 
for progress and excellence. As a Patron, it is both an honor
 and a responsibility to support this vibrant community, ensuring 
 that every member feels valued, heard, and equipped to grow.
Together, we can elevate standards, promote innovation in craftsmanship,
 and build a network that thrives on collaboration and mutual respect. Let this journey 
 be one of mentorship, shared vision, and collective success—because when tilers rise, the entire industry shines brighter.
          </p>
        

        </div>
      </div>



      <div className="article">
        <div className="photo-block" data-aos="fade-right">
          <img src="/small.jpg" alt="Tiler at work" className="patimage" />

          <h3>MrS. Kolawole Tijani</h3>
          <p className="title">Matron</p>
          <p>08036256403</p>
        </div>
        <div className="article-text">
          <p>
         As Matron, my heart rests in service, compassion, and encouragement.
The tilers embody strength, creativity, and unity, and it’s an honor to support
 them with care and understanding. Together, we’ll continue to build not just
  structures, but lasting bonds and a legacy of excellence.
          </p>
        </div>
      </div>



      <div className="relationship" data-aos="fade-right">
        <p>
          The collaboration between our Patron, Matron, and Chairman has 
          fostered harmony, progress, and credibility
          within the association. Their leadership reflects wisdom, 
          encouragement, and unwavering support,
          making them pillars of our success story.
        </p>
      </div>
    </div>
  );
};

export default PatronMatron;
