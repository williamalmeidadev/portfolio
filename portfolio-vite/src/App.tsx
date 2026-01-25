
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

function App() {
  return (
    <>
      <CanvasBG />
      <main>
        <Hero />
        <section id="sobre">
          <Galeria imagens={imagensGaleria} />
        </section>
      </main>
    </>
  )
}

export default App
