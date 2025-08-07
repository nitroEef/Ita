import React, { useState, useEffect } from "react";
import { FaUsers, FaWhatsapp } from "react-icons/fa";
import "./Executives.css";

const executivesData = [
  { name: "Tiler Musa", position: "Chairman", phone: "08012345678", image: "/oo.jpg" },
  { name: "Tiler Ayo", position: "Vice Chairman", phone: "08023456789", image: "/oo.jpg" },
  { name: "Tiler Sola", position: "Secretary", phone: "08034567890", image: "/oo.jpg" },
  { name: "Tiler Bayo", position: "Treasurer", phone: "08045678901", image: "/oo.jpg" },
  { name: "Tiler Kunle", position: "Financial Secretary", phone: "08056789012", image: "/oo.jpg" },
  { name: "Tiler Bola", position: "Welfare Officer", phone: "08067890123", image: "/oo.jpg" },
  { name: "Tiler Seun", position: "PRO", phone: "08078901234", image: "/oo.jpg" },
  { name: "Tiler Tope", position: "Chief Whip", phone: "08089012345", image: "/oo.jpg" },
  { name: "Tiler Tunde", position: "Auditor", phone: "08090123456", image: "/oo.jpg" },
  { name: "Tiler Dayo", position: "Legal Adviser", phone: "08101234567", image: "/oo.jpg" },
  { name: "Tiler Segun", position: "Technical Supervisor", phone: "08112345678", image: "/oo.jpg" },
  { name: "Tiler Segun", position: "Technical Supervisor", phone: "08112345678", image: "/oo.jpg" },
  { name: "Tiler Segun", position: "Technical Supervisor", phone: "08112345678", image: "/oo.jpg" },
  { name: "Tiler Segun", position: "Technical Supervisor", phone: "08112345678", image: "/oo.jpg" },
  { name: "Tiler Segun", position: "Technical Supervisor", phone: "08112345678", image: "/oo.jpg" },
  { name: "Tiler Segun", position: "Technical Supervisor", phone: "08112345678", image: "/oo.jpg" },

];

const positions = ["All", ...new Set(executivesData.map((e) => e.position))];

const Executives = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayed, setDisplayed] = useState([]);

  const execsPerPage = 6;

  const filteredExecs =
    filter === "All"
      ? executivesData
      : executivesData.filter((e) => e.position === filter);

  const totalPages = Math.ceil(filteredExecs.length / execsPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * execsPerPage;
    const end = start + execsPerPage;
    setDisplayed(filteredExecs.slice(start, end));
  }, [filter, currentPage]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="exe-preview">
      <h2>
        <FaUsers style={{ marginRight: "10px" }} />
        Executive Members
      </h2>

      <div className="exe-filter-container">
        <label htmlFor="filter">Filter by Position:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          {positions.map((pos, idx) => (
            <option key={idx} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      <div className="exe-grid">
        {displayed.map((exec, index) => (
          <div className="exe-card fade-in" key={index}>
            <img src={exec.image} alt={exec.name} />
            <div className="exe-info">
              <h4>{exec.name}</h4>
              <p>{exec.position}</p>
              <a
                href={`https://wa.me/${exec.phone.replace(/^0/, "234")}?text=${encodeURIComponent(
                  `Hello ${exec.name}, I'm interested in your tiling services from the Ilobu Tilers Association.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="exe-whatsapp"
              >
                <FaWhatsapp style={{ marginRight: "6px" }} />
                {exec.phone}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="exe-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Executives;
