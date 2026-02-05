import foto from '../assets/foto.jpeg'


export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <div className="hero-photo">
          <img src={foto} alt="Foto de William Almeida" />
        </div>
        <div className="hero-text">
          <span className="eyebrow">Desenvolvedor Full Stack</span>
          <h1>William Almeida</h1>
          <p>
            Construo interfaces modernas, sistemas eficientes e soluções reais usando tecnologia de forma prática e objetiva.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Ver projetos</a>
            <a href="#about" className="btn-outline">Minha trajetória</a>
          </div>
        </div>
      </div>
    </section>
  )
}
