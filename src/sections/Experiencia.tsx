import React from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Experiencia: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { experience } = getContent(lang);

  return (
    <section id="experience" className="section section-center">
      <div className="section-wrapper">
        <h2>{strings.experience.title}</h2>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span>{item.period}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
