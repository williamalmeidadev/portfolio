import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Certificados: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { certificates } = getContent(lang);
  const loopCertificates =
    certificates.length > 1 ? [...certificates, ...certificates] : certificates;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(true);
    setCanScrollNext(true);
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
                <span className="carousel-button-icon carousel-button-icon-left" aria-hidden="true" />
                <span>{strings.carousel.prev}</span>
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-controls="certificates-carousel"
              >
                <span>{strings.carousel.next}</span>
                <span className="carousel-button-icon carousel-button-icon-right" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="embla" id="certificates-carousel">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {loopCertificates.map((c, index) => (
                  <div className="embla__slide" key={`${c.description}-${index}`}>
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
