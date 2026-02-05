import React from "react";
import { experiencias } from "../data/content";

const Experiencia: React.FC = () => (
  <section id="experiencia" className="secao-centralizada">
    <div className="secao-wrapper">
      <h2>Experiência</h2>
      <div className="timeline">
        {experiencias.map((item) => (
          <div className="timeline-item" key={item.titulo}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.titulo}</h3>
              <span>{item.periodo}</span>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiencia;
