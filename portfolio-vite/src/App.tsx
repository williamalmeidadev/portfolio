
import { CanvasBG } from './CanvasBG'
import { Galeria } from './sections/Galeria'
import Hero from './sections/Hero'


const imagensGaleria = [
  {
    src: '/src/assets/galeria/bd.png',
    descricao: 'Apresentação de projeto de banco de dados',
    premiacao: undefined
  },
  {
    src: '/src/assets/galeria/ecoacao.png',
    descricao: 'Projeto EcoAção - Sustentabilidade',
    premiacao: 'https://ecoacao-premio.com'
  },
  {
    src: '/src/assets/galeria/google.png',
    descricao: 'Certificado Google Ateliê Digital',
    premiacao: 'https://ateliedigital.withgoogle.com/'
  },
  {
    src: '/src/assets/galeria/maratonatech.jpg',
    descricao: 'Maratona Tech - Evento de programação',
    premiacao: undefined
  },
  {
    src: '/src/assets/galeria/obt.jpeg',
    descricao: 'Olimpíada Brasileira de Tecnologia',
    premiacao: 'https://obt.org.br/'
  },
  {
    src: '/src/assets/galeria/placas.png',
    descricao: 'Projeto de placas eletrônicas',
    premiacao: undefined
  },
  {
    src: '/src/assets/galeria/portfolioreact.png',
    descricao: 'Portfólio feito em React',
    premiacao: undefined
  },
  {
    src: '/src/assets/galeria/solyd.png',
    descricao: 'Certificado Solyd',
    premiacao: 'https://solyd.com.br/'
  },
  {
    src: '/src/assets/galeria/tecnico.png',
    descricao: 'Formação Técnica',
    premiacao: undefined
  },
]


import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Scroll suave para navegação
    const pillLinks = document.querySelectorAll('.nav-pill a');
    pillLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Observer para navegação ativa
    const navLinks = document.querySelectorAll('.nav-pill a');
    const sections = document.querySelectorAll('main section');
    function resetNav() {
      navLinks.forEach(link => link.classList.remove('ativo'));
    }
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const navLink = document.querySelector(`.nav-pill a[href="#${id}"]`);
        if (entry.isIntersecting && navLink) {
          resetNav();
          navLink.classList.add('ativo');
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Pill bar navigation */}
      <nav className="nav-pill">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        {/* Adicione outros links conforme necessário */}
      </nav>
      <CanvasBG />
      <main>
        <Hero />
        <section id="sobre">
          <Galeria imagens={imagensGaleria} />
        </section>
      </main>
    </>
  );
}

export default App
