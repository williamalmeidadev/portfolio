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
        <div className="tech-web tech-orbit" aria-label={strings.technologies.title} role="list">
          <div className="orbit-ring orbit-ring-one" aria-hidden="true" />
          <div className="orbit-ring orbit-ring-two" aria-hidden="true" />
          <div className="orbit-ring orbit-ring-three" aria-hidden="true" />
          <div className="tech-nodes">
            {technologies.map((tech, i) => (
              <button
                type="button"
                key={tech.title}
                className={`tech-node${i === index ? " is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                aria-label={tech.title}
                role="listitem"
              >
                <img src={tech.img} alt={tech.title} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Tecnologias;
