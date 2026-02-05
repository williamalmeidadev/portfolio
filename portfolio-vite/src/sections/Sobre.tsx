import React, { useState } from "react";
import { sobreGaleria } from "../data/content";

const Sobre: React.FC = () => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <section id="sobre">
      <div className="sobre-content">
        <div className="sobre-galeria-focus">
          <div className="galeria-principal">
            <img
              id="imagemPrincipal"
              src={sobreGaleria[imgIndex].src}
              alt={sobreGaleria[imgIndex].alt}
            />
            <p id="descricaoImagem" className="descricao-imagem">
              {sobreGaleria[imgIndex].descricao}
              <br />
              {sobreGaleria[imgIndex].link && (
                <a
                  id="btnPremiacao"
                  href={sobreGaleria[imgIndex].link}
                  target="_blank"
                  className="btn-primary"
                  rel="noopener noreferrer"
                >
                  Ver Notícia
                </a>
              )}
            </p>
          </div>
          <div className="galeria-stack">
            {sobreGaleria.map((img, i) => (
              <img
                key={img.alt}
                src={img.src}
                className={i === imgIndex ? "ativo" : ""}
                alt={img.alt}
                onClick={() => setImgIndex(i)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
        <div className="sobre-texto">
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
