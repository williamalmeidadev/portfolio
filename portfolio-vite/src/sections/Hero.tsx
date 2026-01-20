import './Hero.css'
import foto from '../assets/foto.jpeg'


export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-foto">
          <img src={foto} alt="Foto de William Almeida" />
        </div>
        <div className="hero-texto">
          <span className="eyebrow">Desenvolvedor Full Stack</span>
          <h1>William Almeida</h1>
          <p>
            Construo interfaces modernas, sistemas eficientes e soluções reais usando tecnologia de forma prática e objetiva.
          </p>
          <div className="hero-botoes">
            <a href="#projetos" className="btn-primary">Ver projetos</a>
            <a href="#sobre" className="btn-outline">Minha trajetória</a>
          </div>
        </div>
      </div>
    </section>
  )
}
