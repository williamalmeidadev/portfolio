import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Certificados: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { certificates } = getContent(lang);
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
    <section id="certificates" className="section section-center">
      <div className="section-wrapper">
        <div className="carousel certificates-carousel">
          <div className="carousel-header">
            <h2>{strings.certificates.title}</h2>
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-controls="certificates-carousel"
              >
                {strings.carousel.prev}
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-controls="certificates-carousel"
              >
                {strings.carousel.next}
              </button>
            </div>
          </div>
          <div className="embla" id="certificates-carousel">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {certificates.map((c) => (
                  <div className="embla__slide" key={c.description}>
                    <div className="certificate-card">
                      <img src={c.img} alt={c.description} loading="lazy" decoding="async" />
                      <p>{c.description}</p>
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

export default Certificados;
