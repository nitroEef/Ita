// Executives.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaWhatsapp } from "react-icons/fa";
import "./Executives.css";
import Menuicon from "../Homepage/Menuicon";


const executivesData = [
  { name: "Mr Salaudeen Afeez Flenjo", position: "Chairman", phone: "08164586149", image: "/chairman.jpg", address: "No. 1 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Olan Muhideen", position: "Vice Chairman", phone: "08023456789", image: "/ejo.jpg", address: "No. 2 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Mustapha Ismahil Adewale", position: "Secretary", phone: "07038937441", image: "/small.jpg", address: "Oganla compound, Ilobu, Osun State" },
  { name: "Mr. Osunwale Lukman Olamilekan", position: "Treasurer", phone: "07030056953", image: "/luk.jpg", address: "Gbobamu compound, Ilobu, Osun State" },
  { name: "Mr. Adekunle Nureni Adewale", position: "Pro 1", phone: "08140928987", image: "/nurain.jpg", address: "Alayan compound, Ilobu, Osun State" },
  { name: "Mr. Oseni Munirudeen Adesanjo", position: "Auditor", phone: "07037877975", image: "/san.jpg", address: "Ajankanawon's compound, Ilobu, Osun State" },
  { name: "Mr. Muftar Satar Ademola", position: "Assistant Secretary", phone: "09067995103", image: "/demola.jpg", address: "Alayan compound, Ilobu, Osun State" },
  { name: "Mr. Olaonipekun Mutiu", position: "Financial Secretary ", phone: "08167037434", image: "/finsec.jpg", address: "Ajibike compound, Ilobu, Osun State" },
  { name: "Mr. Aasa Ifagbemileke ", position: "Welfare", phone: "08161353962", image: "/ifa.jpg", address: "Agbedemo compound, Ilobu, Osun State" },
  { name: "Mr. Jimoh Mutiu Adepoju", position: "Assistant Welfare", phone: "08169744763", image: "/mutiu.jpg", address: "Ogunkeye compound, Ilobu, Osun State" },
  { name: "Mr. Akanmu Toheeb Olamilekan ", position: "PRO 2", phone: "09164337902", image: "/toheeb.jpg", address: "Ajegunle area, Ilobu, Osun State" },
  { name: "Mr. Rasheed Taoheed Adelaja", position: "Sport Director", phone: "08062203316", image: "/laja.jpg", address: "jagun area, Ilobu, Osun State" },
  { name: "Mr. Ibraheem Najeem", position: "Assistant Sport Director", phone: "08167037434", image: "/yemi.jpg", address: "Ajibike compound, Ilobu, Osun State" },
  { name: "Mr. Jimoh Saheed", position: "Chief Task Officer", phone: "07066007989", image: "/irun.jpg", address: "Alayan compound, Ilobu, Osun State" },
  { name: "Mr. Adedeji Saheed", position: "Assistant Chief Task Officer", phone: "08102784645", image: "/saheed.jpg", address: "Gbegede's compound, Ilobu, Osun State" },
  { name: "Mr. Raheem Sarafa OLalekan", position: "Task Officer", phone: "08163827108", image: "/yemi.jpg", address: "Jagun compound, Ilobu, Osun State" },
  { name: "Mr. Yinusa Sarafadeen Ayinde", position: "Task Officer", phone: "09034956737", image: "/sarafa.jpg", address: "Alagba compound, Ilobu, Osun State" },
  { name: "Mr. Olaniran Lukman", position: "Store Keeper", phone: "09036646889", image: "/lukuk.jpg", address: "Ologele compound Ilobu Osun state" },
  { name: "Mr. Aremu Taiwo", position: "Fine collector", phone: "08107468935", image: "/aro.jpg", address: "Ajibike compound, Ilobu, Osun State" },
  { name: "Mr. Jimoh Ridwan Olalekan", position: "Officer", phone: "07063666812", image: "/olopa.jpg", address: "Oluawo compound, Ilobu, Osun State" },


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

  const execsPerPage = 8;

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
  const start = (currentPage - 1) * execsPerPage;
  const end = start + execsPerPage;
  setDisplayed(filteredExecs.slice(start, end));
}, [currentPage, filter, search]);

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
      <Menuicon />
    </section>
  );
}
