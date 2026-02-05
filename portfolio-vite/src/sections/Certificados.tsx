import React from "react";
import { certificados } from "../data/content";

const Certificados: React.FC = () => (
  <section id="certificados" className="secao-centralizada">
    <div className="secao-wrapper">
      <h2>Estudos & Certificados</h2>
      <div className="certificados-grid">
        {certificados.map((c) => (
          <div className="certificado-card" key={c.desc}>
            <img src={c.img} alt={c.desc} />
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificados;
