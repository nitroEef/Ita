import React, { useState } from "react";
import "./History.css";

const HistoryWithToggle = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="history-container">
      <h2>📜 History of the Ilobu Tilers Association</h2>

      <div className={`history-text ${expanded ? "expanded" : "collapsed"}`}>
        <p>
          The Ilobu Tilers Association was founded out of a shared vision among a small group of hardworking artisans who sought unity, professionalism, and growth within their craft. In the early 2000s, tilers in Ilobu, Osun State, worked independently, often facing challenges such as poor pricing, lack of recognition, and limited access to quality materials or advanced training. The need to build a stronger, more structured community among tilers became increasingly evident.
        </p>
        <p>
          In 2008, a significant step was taken when three visionary tilers — Mr. Ganiyu Adebayo, Mr. Abdulmalik Ismail, and Mr. Ibrahim Sodiq — met at a construction site in the Konda area of Ilobu. Though they had worked individually for years, this meeting sparked deep conversations about the future of tiling as a skilled profession in the town. They agreed that something had to change.
        </p>
        <p>
          They began to hold informal meetings under a mango tree beside the old community hall. At first, there were only five members, but word spread quickly among other tilers in town. Within a few months, the number of regular attendees grew to over twenty. These meetings focused on standardizing service charges, sharing job opportunities, mentoring new apprentices, and encouraging ethical work practices.
        </p>
        <p>
          The association was formally registered in 2010 and soon became known for its commitment to quality craftsmanship, professional integrity, and community development.
        </p>
        <p>
          Leadership played a vital role in the growth of the association. Regular elections ensured fresh ideas and active participation, while mentorship programs helped new tilers develop the necessary skills to succeed.
        </p>
        <p>
          Today, the Ilobu Tilers Association stands as a proud symbol of unity, excellence, and perseverance — built from the ground up by people who believed in the power of working together.
        </p>
      </div>

      <button className="toggle-btn" onClick={toggleReadMore}>
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
};

export default HistoryWithToggle;
