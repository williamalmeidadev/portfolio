import React, { useState } from "react";
import { tecnologias } from "../data/content";

const Tecnologias: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <section id="tecnologias" className="secao-centralizada">
      <div className="secao-wrapper">
        <h2>Tecnologias</h2>
        <div className="tech-focus">
          <div className="tech-descricao">
            <h3 id="techTitulo">{tecnologias[index].titulo}</h3>
            <p id="techTexto">{tecnologias[index].texto}</p>
          </div>
          <div className="skills-grid tech-stack">
            {tecnologias.map((tech, i) => (
              <div
                key={tech.titulo}
                className={`skill${i === index ? " ativo" : ""}`}
                data-titulo={tech.titulo}
                data-texto={tech.texto}
                onClick={() => setIndex(i)}
                style={{ cursor: "pointer" }}
              >
                <img src={tech.img} alt={tech.titulo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
