// Executives.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaWhatsapp } from "react-icons/fa";
import "./Executives.css";

const executivesData = [
  { name: "Mr Salaudeen Afeez Flenjo", position: "Chairman", phone: "08012345678", image: "/oo.jpg", address: "No. 1 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Ejo", position: "Vice Chairman", phone: "08023456789", image: "/excopix/ejo.jpg", address: "No. 2 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Mustapha Ismahil Adewale", position: "Secretary", phone: "07038937441", image: "/excopix/small.jpg", address: "Oganla compound, Ilobu, Osun State" },
  { name: "Mr. Oseni Munirudeen Adesanjo", position: "Auditor", phone: "07037877975", image: "/excopix/san.jpg", address: "Ajankanawon's compound, Ilobu, Osun State" },
  { name: "Mr. Ademola Satar", position: "Financial Secretary", phone: "08056789012", image: "/excopix/demola.jpg", address: "No. 5 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Jimoh Mutiu Adepoju", position: "Assistant Welfare", phone: "08169744773", image: "/excopix/mutiu.jpg", address: "Ogunkeye compound, Ilobu, Osun State" },
  { name: "Mr. Akanmu Toheeb Olamilekan ", position: "PRO", phone: "09164337902", image: "/excopix/toheeb.jpg", address: "Ajegunle area, Ilobu, Osun State" },
  { name: "Mr. Adelaja Taoheed Adelaja", position: "Sport Director", phone: "08062203316", image: "/excopix/laja.jpg", address: "jagun area, Ilobu, Osun State" },
  { name: "Mr. Adedeji Saheed", position: "Chief Task Officer", phone: "08102784645", image: "/excopix/saheed.jpg", address: "Gbegede's compound, Ilobu, Osun State" },
  { name: "Mr. Jimoh Saheed", position: "Assistant Secretary", phone: "08140928987", image: "/excopix/irun.jpg", address: "Alayan compound, Ilobu, Osun State" },
  { name: "Mr. Aasa Ifagbemileke ", position: "Welfare", phone: "08161353962", image: "/excopix/ifa.jpg", address: "Agbedemo compound, Ilobu, Osun State" },
  { name: "Mr. Olaniran Lukman", position: "Store Keeper", phone: "09036646889", image: "/excopix/lukuk.jpg", address: "Ologele compound Ilobu Osun state" },
  { name: "Mr. Adekunle Nureni Adewale", position: "Assistant Secretary", phone: "08140928987", image: "/excopix/nurain.jpg", address: "Alayan compound, Ilobu, Osun State" },
  { name: "Mr. Osunwale Lukman Olamilekan", position: "Treasurer", phone: "07030056953", image: "/excopix/luk.jpg", address: "Gbobamu compound, Ilobu, Osun State" },
  { name: "Mr.Ibrahim Najeem Adeyemi", position: "Assistant Sports Director", phone: "08167037434", image: "/excopix/yemi.jpg", address: "Ajibike compound, Ilobu, Osun State" }
];

const positions = ["All", ...new Set(executivesData.map((e) => e.position))];

function formatPhoneForWhatsApp(phone = "") {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) return "234" + digits.slice(1);
  if (digits.startsWith("234")) return digits;
  return digits;
}

export default function Executives() {
  const topRef = useRef(null);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayed, setDisplayed] = useState([]);

  const execsPerPage = 6;

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

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1);
      return;
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (topRef.current) {
      // Smooth scroll to top of the section
      window.scrollTo({
        top: topRef.current.offsetTop - 20, // adjust for navbar height if needed
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="exe-preview" ref={topRef}>
      <div className="exe-intro">
        <h2 className="exe-title">
          <FaUsers style={{ marginRight: 10 }} /> Executive Members
        </h2>
        <p>
          Meet the dedicated leadership team of the <strong>Ilobu Tilers Association</strong> — 
          committed professionals who uphold our values of excellence, craftsmanship, and trust.
        </p>
      </div>

      <div className="exe-controls" style={{ maxWidth: 980, margin: "0 auto 24px", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <div className="exe-filter-container">
          <label htmlFor="filter" style={{ marginRight: 8, fontWeight: 600 }}>Filter by Position:</label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            {positions.map((pos, idx) => (
              <option key={idx} value={pos}>{pos}</option>
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

      <div className="exe-grid">
        {displayed.length > 0 ? (
          displayed.map((exec, index) => {
            const message = `Hello ${exec.name}, I'm interested in your tiling services from the Ilobu Tilers Association.`;
            const waUrl = `https://wa.me/${formatPhoneForWhatsApp(exec.phone)}?text=${encodeURIComponent(message)}`;

            return (
              <div className="exe-card" key={`${exec.name}-${index}`}>
                <div className="exe-media" aria-hidden>
                  <img src={exec.image} alt={exec.name} className="exe-img" />
                </div>
                <div className="exe-info">
                  <h4>{exec.name}</h4>
                  <p>{exec.position}</p>
                  <p className="exe-address" style={{ fontSize: "0.9rem", opacity: 0.8 }}>{exec.address}</p>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="exe-whatsapp" aria-label={`WhatsApp ${exec.name}`}>
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

      {totalPages > 1 && (
        <div className="exe-pagination" style={{ marginTop: 28 }}>
          <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} aria-label="Previous page" style={{ opacity: currentPage === 1 ? 0.5 : 1 }}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => handlePageChange(i + 1)} aria-label={`Page ${i + 1}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} aria-label="Next page" style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}>
            Next
          </button>
        </div>
      )}
    </section>
  );
}
