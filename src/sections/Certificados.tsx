import React from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Certificados: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { certificates } = getContent(lang);

  return (
    <section id="certificates" className="section section-center">
      <div className="section-wrapper">
        <h2>{strings.certificates.title}</h2>
        <div className="certificates-grid">
          {certificates.map((c) => (
            <div className="certificate-card" key={c.description}>
              <img src={c.img} alt={c.description} loading="lazy" decoding="async" />
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificados;
