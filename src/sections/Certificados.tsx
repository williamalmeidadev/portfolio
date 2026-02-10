import React from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Certificados: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { certificates } = getContent(lang);
  const viewportRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const scrollAmount = Math.round(viewport.clientWidth * 0.85);
    viewport.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="certificates" className="section section-center">
      <div className="section-wrapper">
        <div className="carousel certificates-carousel">
          <div className="carousel-header">
            <h2>{strings.certificates.title}</h2>
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-button"
                onClick={() => handleScroll(-1)}
                aria-controls="certificates-carousel"
              >
                {strings.carousel.prev}
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => handleScroll(1)}
                aria-controls="certificates-carousel"
              >
                {strings.carousel.next}
              </button>
            </div>
          </div>
          <div className="carousel-viewport" id="certificates-carousel" ref={viewportRef}>
            <div className="carousel-track">
              {certificates.map((c) => (
                <div className="certificate-card" key={c.description}>
                  <img src={c.img} alt={c.description} loading="lazy" decoding="async" />
                  <p>{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificados;
