import React, { useEffect, useRef, useState } from "react";
import { aboutGallery } from "../data/content";

const Sobre: React.FC = () => {
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
                  Ver Notícia
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
          <h2>Sobre mim</h2>
          <p>
            Sou estudante de Desenvolvimento de Sistemas, cearense, com 17 anos, movido pela curiosidade e pelo interesse constante em tecnologia. Tenho afinidade com olimpíadas científicas e tecnológicas, nas quais já representei o Ceará em competições nacionais e conquistei medalhas.
          </p>
          <p>
            Sou autodidata e foco meus estudos no desenvolvimento web full stack, criando interfaces modernas e sistemas bem estruturados, sempre buscando boas práticas e eficiência.
          </p>
          <p>
            Também tenho grande interesse por áreas como Inteligência Artificial, Machine Learning e Visão Computacional, que encaro como parte essencial do futuro da tecnologia e da inovação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
