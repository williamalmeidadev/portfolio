import React, { useState } from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Tecnologias: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { technologies } = getContent(lang);
  const [index, setIndex] = useState(0);

  return (
  <section id="technologies" className="section section-center">
    <div className="section-wrapper">
      <h2>{strings.technologies.title}</h2>
      <div className="tech-layout">
        <div className="tech-description">
          <h3>{technologies[index].title}</h3>
          <p>{technologies[index].description}</p>
        </div>
        <div className="skills-grid tech-stack">
          {technologies.map((tech, i) => (
            <div
              key={tech.title}
              className={`skill${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            >
                <img src={tech.img} alt={tech.title} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
