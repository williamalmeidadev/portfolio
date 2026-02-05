import React from "react";
import { projetos } from "../data/content";

const Projetos: React.FC = () => (
  <section id="projetos" className="secao-centralizada">
    <div className="secao-wrapper">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projetos.map((proj) => (
          <div className="project-card" key={proj.titulo}>
            <img src={proj.img} alt={proj.titulo} />
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
            <div className="project-botoes">
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
        ))}
      </div>
    </div>
  </section>
);

export default Projetos;
