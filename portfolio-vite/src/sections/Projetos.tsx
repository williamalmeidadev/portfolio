import React from "react";
import { projects } from "../data/content";

const Projetos: React.FC = () => (
  <section id="projects" className="section section-center">
    <div className="section-wrapper">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.title}>
            <img src={proj.img} alt={proj.title} />
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

export default Projetos;
