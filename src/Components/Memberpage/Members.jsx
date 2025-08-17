// Members.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaWhatsapp } from "react-icons/fa";
import "./Members.css";

const membersData = [
    { name: "Mr Salaudeen Afeez Flenjo", position: "Chairman", phone: "08012345678", image: "/oo.jpg", address: "No. 1 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Ejo", position: "Vice Chairman", phone: "08023456789", image: "/Ita/ejo.jpg", address: "No. 2 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Mustapha Ismahil Adewale", position: "Secretary", phone: "07038937441", image: "/Ita/small.jpg", address: "Oganla compound, Ilobu, Osun State" },
  { name: "Mr. Oseni Munirudeen Adesanjo", position: "Auditor", phone: "07037877975", image: "/Ita/san.jpg", address: "Ajankanawon's compound, Ilobu, Osun State" },
  { name: "Mr. Ademola Satar", position: "Financial Secretary", phone: "08056789012", image: "/Ita/demola.jpg", address: "No. 5 Tilers Street, Ilobu, Osun State" },
  { name: "Mr. Jimoh Mutiu Adepoju", position: "Assistant Welfare", phone: "08169744773", image: "/Ita/mutiu.jpg", address: "Ogunkeye compound, Ilobu, Osun State" },
  { name: "Mr. Akanmu Toheeb Olamilekan ", position: "PRO", phone: "09164337902", image: "/Ita/toheeb.jpg", address: "Ajegunle area, Ilobu, Osun State" },
  { name: "Mr. Adelaja Taoheed Adelaja", position: "Sport Director", phone: "08062203316", image: "/Ita/laja.jpg", address: "jagun area, Ilobu, Osun State" },
  { name: "Mr. Adedeji Saheed", position: "Chief Task Officer", phone: "08102784645", image: "/Ita/saheed.jpg", address: "Gbegede's compound, Ilobu, Osun State" },
  { name: "Mr. Jimoh Saheed", position: "Assistant Secretary", phone: "08140928987", image: "/Ita/irun.jpg", address: "Alayan compound, Ilobu, Osun State" },
  { name: "Mr. Aasa Ifagbemileke ", position: "Welfare", phone: "08161353962", image: "/Ita/ifa.jpg", address: "Agbedemo compound, Ilobu, Osun State" },
  { name: "Mr. Olaniran Lukman", position: "Store Keeper", phone: "09036646889", image: "/Ita/lukuk.jpg", address: "Ologele compound Ilobu Osun state" },
  { name: "Mr. Adekunle Nureni Adewale", position: "Assistant Secretary", phone: "08140928987", image: "/Ita/nurain.jpg", address: "Alayan compound, Ilobu, Osun State" },
  { name: "Mr. Osunwale Lukman Olamilekan", position: "Treasurer", phone: "07030056953", image: "/Ita/luk.jpg", address: "Gbobamu compound, Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. Ajibade Lateef O. ", position: "Member", phone: "08136340736", image: "/Ita/ilobu.png", address: "Ibikunle estate, Okinni, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },
  { name: "Mr. ", position: "Member", phone: "07030056953", image: "/Ita/luk.jpg", address: ", Ilobu, Osun State" },

];

const filterTypes = ["Exco", "Member"];

function formatPhoneForWhatsApp(phone = "") {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) return "234" + digits.slice(1);
  if (digits.startsWith("234")) return digits;
  return digits;
}

export default function Members() {
  const topRef = useRef(null);
  const [filter, setFilter] = useState("Member");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayed, setDisplayed] = useState([]);

  const perPage = 12;

  const filtered = membersData.filter((m) => {
    const q = search.trim().toLowerCase();
    const matchesType = filter === "Member" ? true : false;
    const matchesSearch = !q || m.name.toLowerCase().includes(q) || m.phone.includes(q) || m.position.toLowerCase().includes(q) || m.address.toLowerCase().includes(q);
    return matchesType && matchesSearch;
  });

  const total = Math.ceil(filtered.length / perPage);

  useEffect(() => {
    if (total > 0 && currentPage > total) {
      setCurrentPage(1);
      return;
    }
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    setDisplayed(filtered.slice(start, end));
  }, [filtered, currentPage, total]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePage = (p) => {
    setCurrentPage(p);
    if (topRef.current) {
      window.scrollTo({ top: topRef.current.offsetTop - 20, behavior: "smooth" });
    }
  };

  return (
    <section className="mem-preview" ref={topRef}>
      <div className="mem-intro">
        <h2 className="mem-title">
          <FaUsers style={{ marginRight: 10 }} /> Members Page
        </h2>
        <p>Registered members of the Ilobu Tilers Association.</p>
      </div>

      

      <div className="mem-controls"><input type="search" placeholder="Search members by name, number or position..." value={search} onChange={handleSearch} className="mem-search" /></div>

<div className="mem-grid">
        {displayed.map((m, i) => {
          const url = `https://wa.me/${formatPhoneForWhatsApp(m.phone)}?text=${encodeURIComponent(`Hello ${m.name}`)}`;
          return (
            <div className="mem-card" key={i}>
              <div className="mem-media"><img src={m.image} alt={m.name} /></div>
              <div className="mem-info">
                <h4>{m.name}</h4>
                <p>{m.position}</p>
                <p className="mem-address">{m.address}</p>
                <a href={url} target="_blank" rel="noreferrer"><FaWhatsapp /> {m.phone}</a>
              </div>
            </div>
          );
        })}
      </div>

      {total > 1 && (
        <div className="mem-pagination">
          <button disabled={currentPage===1} onClick={()=>handlePage(currentPage-1)}>Prev</button>
          {Array.from({length:total},(_,i)=>(<button key={i} className={currentPage===i+1?"active":""} onClick={()=>handlePage(i+1)}>{i+1}</button>))}
          <button disabled={currentPage===total} onClick={()=>handlePage(currentPage+1)}>Next</button>
        </div>
      )}
    </section>
  );
}
/* Members.css */
