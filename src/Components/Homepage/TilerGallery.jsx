import React, { useState, useEffect, useRef } from "react";
import "./TilerGallery.css";

const images = [
  { src: "/oo.jpg", title: "Project One", desc: "Beautiful floor tiling" },
  { src: "/oo.jpg", title: "Project Two", desc: "Modern wall design" },
  { src: "/oo.jpg", title: "Project Three", desc: "Elegant bathroom tiling" },
  { src: "/oo.jpg", title: "Project Four", desc: "Luxury kitchen space" },
  { src: "/oo.jpg", title: "Project Five", desc: "Outdoor tiling" },
  { src: "/oo.jpg", title: "Project Six", desc: "Custom patterns" },
  { src: "/oo.jpg", title: "Project Seven", desc: "Mosaic beauty" }
];

export default function GridGallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const modalRef = useRef(null);
  const lastActiveRef = useRef(null);

  // Keyboard navigation for modal
  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  // Focus trap / restore focus
  useEffect(() => {
    if (openIndex !== null) {
      lastActiveRef.current = document.activeElement;
      // small timeout to let modal render
      setTimeout(() => modalRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      lastActiveRef.current?.focus?.();
    }
  }, [openIndex]);

  const openModal = (index) => setOpenIndex(index);
  const closeModal = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setOpenIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="grid-gallery-wrap">
      <div className="grid-gallery">
        {images.map((img, idx) => (
          <button
            key={idx}
            className="thumb-btn"
            onClick={() => openModal(idx)}
            aria-label={`Open ${img.title}`}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="thumb-overlay">
              <span>{img.title}</span>
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${images[openIndex].title} — image viewer`}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex="-1"
            ref={modalRef}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            <div className="modal-main">
              <button className="modal-nav prev" onClick={prev} aria-label="Previous">
                ‹
              </button>

              <div className="modal-image-wrap">
                <img
                  src={images[openIndex].src}
                  alt={images[openIndex].title}
                  loading="eager"
                />
                <div className="modal-caption">
                  <h3>{images[openIndex].title}</h3>
                  <p>{images[openIndex].desc}</p>
                </div>
              </div>

              <button className="modal-nav next" onClick={next} aria-label="Next">
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
