import React from "react";
import { certificates } from "../data/content";

const Certificados: React.FC = () => (
  <section id="certificates" className="section section-center">
    <div className="section-wrapper">
      <h2>Estudos & Certificados</h2>
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

export default Certificados;
