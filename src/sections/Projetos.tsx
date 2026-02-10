import React from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Projetos: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { projects } = getContent(lang);
  const viewportRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const scrollAmount = Math.round(viewport.clientWidth * 0.85);
    viewport.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section section-center">
      <div className="section-wrapper">
        <div className="carousel projects-carousel">
          <div className="carousel-header">
            <h2>{strings.projects.title}</h2>
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-button"
                onClick={() => handleScroll(-1)}
                aria-controls="projects-carousel"
              >
                {strings.carousel.prev}
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => handleScroll(1)}
                aria-controls="projects-carousel"
              >
                {strings.carousel.next}
              </button>
            </div>
          </div>
          <div className="carousel-viewport" id="projects-carousel" ref={viewportRef}>
            <div className="carousel-track">
              {projects.map((proj) => (
                <div className="project-card" key={proj.title}>
                  <img src={proj.img} alt={proj.title} loading="lazy" decoding="async" />
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="project-actions">
                    {proj.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={link.primary ? "btn-primary" : "btn-outline"}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
