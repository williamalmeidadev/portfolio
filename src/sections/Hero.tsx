import foto from '../assets/foto.webp'
import { useLanguage } from '../hooks/useLanguage'

export default function Hero() {
  const { strings } = useLanguage()
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <div className="hero-photo">
          <img
            src={foto}
            alt={strings.hero.photoAlt}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="hero-text">
          <span className="eyebrow">{strings.hero.eyebrow}</span>
          <h1>{strings.hero.title}</h1>
          <p>
            {strings.hero.description}
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">{strings.hero.ctaProjects}</a>
            <a href="#about" className="btn-outline">{strings.hero.ctaAbout}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
