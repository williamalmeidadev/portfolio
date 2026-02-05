import React, { useEffect, useRef, useState } from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Sobre: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { aboutGallery } = getContent(lang);
  const [imgIndex, setImgIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleThumbClick(index: number) {
    if (index === imgIndex) return;
    setIsFading(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setImgIndex(index);
      setIsFading(false);
    }, 180);
  }

  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="about-gallery">
          <div className="gallery-main">
            <img
              src={aboutGallery[imgIndex].src}
              alt={aboutGallery[imgIndex].alt}
              className={isFading ? "fade" : ""}
              loading="lazy"
              decoding="async"
            />
            <p className={`gallery-caption${isFading ? " fade" : ""}`}>
              {aboutGallery[imgIndex].description}
              <br />
              {aboutGallery[imgIndex].link && (
                <a
                  href={aboutGallery[imgIndex].link}
                  target="_blank"
                  className="btn-primary btn-small"
                  rel="noopener noreferrer"
                >
                  {strings.about.galleryCta}
                </a>
              )}
            </p>
          </div>
          <div className="gallery-thumbs">
            {aboutGallery.map((img, i) => (
              <img
                key={img.alt}
                src={img.src}
                className={i === imgIndex ? "is-active" : ""}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                onClick={() => handleThumbClick(i)}
              />
            ))}
          </div>
        </div>
        <div className="about-text">
          <h2>{strings.about.title}</h2>
          {strings.about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
