import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Projetos: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { projects } = getContent(lang);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

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
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-controls="projects-carousel"
              >
                {strings.carousel.prev}
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-controls="projects-carousel"
              >
                {strings.carousel.next}
              </button>
            </div>
          </div>
          <div className="embla" id="projects-carousel">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {projects.map((proj) => (
                  <div className="embla__slide" key={proj.title}>
                    <div className="project-card">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
