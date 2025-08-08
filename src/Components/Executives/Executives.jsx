// Executives.jsx
import React, { useState, useEffect } from "react";
import { FaUsers, FaWhatsapp } from "react-icons/fa";
import "./Executives.css";

const executivesData = [
  { name: "Mr Salaudeen Afeez Flenjo", position: "Chairman", phone: "08012345678", image: "/oo.jpg" },
  { name: "Mr. Ayo", position: "Vice Chairman", phone: "08023456789", image: "/oo.jpg" },
  { name: "Mr. Sola", position: "Secretary", phone: "08034567890", image: "/oo.jpg" },
  { name: "Mr. Bayo", position: "Treasurer", phone: "08045678901", image: "/oo.jpg" },
  { name: "Mr. Kunle", position: "Financial Secretary", phone: "08056789012", image: "/oo.jpg" },
  { name: "Mr. Bola", position: "Welfare Officer", phone: "08067890123", image: "/oo.jpg" },
  { name: "Mr. Seun", position: "PRO", phone: "08078901234", image: "/oo.jpg" },
  { name: "Mr. Adelaja Taoheed Nani", position: "Auditor", phone: "08090123456", image: "/oo.jpg" },
  { name: "Mr. Dayo", position: "Legal Adviser", phone: "08101234567", image: "/oo.jpg" },
  { name: "Mr. Segun", position: "Technical Supervisor", phone: "08112345678", image: "/oo.jpg" },
];

const positions = ["All", ...new Set(executivesData.map((e) => e.position))];

function formatPhoneForWhatsApp(phone = "") {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) return "234" + digits.slice(1); // Nigerian local -> international
  if (digits.startsWith("234")) return digits;
  return digits; // fallback (already international or short)
}

export default function Executives() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayed, setDisplayed] = useState([]);

  const execsPerPage = 6;

  // Apply filter + search
  const filteredExecs = executivesData.filter((exec) => {
    const q = search.trim().toLowerCase();
    const matchesFilter = filter === "All" ? true : exec.position === filter;
    const matchesSearch =
      !q ||
      exec.name.toLowerCase().includes(q) ||
      exec.position.toLowerCase().includes(q) ||
      exec.phone.includes(q);
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredExecs.length / execsPerPage);

  // Keep displayed in sync with currentPage and filtered results
  useEffect(() => {
    // if current page is out of range (e.g. after filtering), reset to 1
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1);
      return; // next render will slice page 1
    }
    const start = (currentPage - 1) * execsPerPage;
    const end = start + execsPerPage;
    setDisplayed(filteredExecs.slice(start, end));
  }, [filteredExecs, currentPage, totalPages]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="exe-preview">
      {/* Intro */}
      <div className="exe-intro">
         <h2 className="exe-title">
        <FaUsers style={{ marginRight: 10 }} /> Executive Members
      </h2>

        <p>
          Meet the dedicated leadership team of the <strong>Ilobu Tilers Association</strong> — 
          committed professionals who uphold our values of excellence, craftsmanship, and trust.
        </p>
      </div>

      {/* Title */}
     
      {/* Controls (filter + search) */}
      <div className="exe-controls" style={{ maxWidth: 980, margin: "0 auto 24px", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <div className="exe-filter-container">
          <label htmlFor="filter" style={{ marginRight: 8, fontWeight: 600 }}>Filter by Position:</label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            {positions.map((pos, idx) => (
              <option key={idx} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>

        <div className="exe-search-container">
          <input
            type="search"
            placeholder="Search name, position or phone..."
            value={search}
            onChange={handleSearchChange}
            className="exe-search"
            aria-label="Search executives"
            style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)", color: "inherit" }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="exe-grid">
        {displayed.length > 0 ? (
          displayed.map((exec, index) => {
            const message = `Hello ${exec.name}, I'm interested in your tiling services from the Ilobu Tilers Association.`;
            const waUrl = `https://wa.me/${formatPhoneForWhatsApp(exec.phone)}?text=${encodeURIComponent(message)}`;

            return (
              <div className="exe-card" key={`${exec.name}-${index}`}>
                {/* media wrapper — fixed height to prevent stretching */}
                <div className="exe-media" aria-hidden>
                  <img src={exec.image} alt={exec.name} className="exe-img" />
                </div>

                <div className="exe-info">
                  <h4>{exec.name}</h4>
                  <p>{exec.position}</p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exe-whatsapp"
                    aria-label={`WhatsApp ${exec.name}`}
                  >
                    <FaWhatsapp /> <span style={{ marginLeft: 6 }}>{exec.phone}</span>
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ gridColumn: "1 / -1", padding: 40 }}>
            <p style={{ color: "rgba(255,255,255,0.8)", textAlign: "center", margin: 0 }}>
              No executives found — try clearing the search or selecting "All".
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="exe-pagination" style={{ marginTop: 28 }}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
              aria-label={`Page ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
