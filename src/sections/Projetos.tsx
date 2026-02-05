import React from "react";
import { getContent } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const Projetos: React.FC = () => {
  const { lang, strings } = useLanguage();
  const { projects } = getContent(lang);

  return (
    <section id="projects" className="section section-center">
      <div className="section-wrapper">
        <h2>{strings.projects.title}</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="project-card" key={proj.title}>
              <img src={proj.img} alt={proj.title} loading="lazy" decoding="async" />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-actions">
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
};

export default Projetos;
