import React, { useEffect, useRef, useState } from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Sobre: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { aboutGallery } = getContent(lang);
  const [imgIndex, setImgIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const currentItem = aboutGallery[imgIndex];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleGalleryChange(index: number) {
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
            <div className="gallery-main-media">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className={`gallery-main-image${isFading ? " fade" : ""}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="gallery-main-badges">
              <span className="gallery-badge">{currentItem.badge}</span>
              <span className="gallery-year">{currentItem.year}</span>
            </div>
            <p className={`gallery-caption${isFading ? " fade" : ""}`}>
              <span className="gallery-caption-title">{currentItem.alt}</span>
              {currentItem.description}
              <br />
              {currentItem.link && (
                <a
                  href={currentItem.link}
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
              <button
                key={img.alt}
                type="button"
                className={`gallery-thumb-button${i === imgIndex ? " is-active" : ""}`}
                onClick={() => handleGalleryChange(i)}
                aria-label={img.alt}
              >
                <img src={img.src} className="gallery-thumb-image" alt={img.alt} loading="lazy" decoding="async" />
                <span className="gallery-thumb-meta">
                  <span>{img.alt}</span>
                  <span>{img.year}</span>
                </span>
              </button>
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
