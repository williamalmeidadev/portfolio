
import { CanvasBG } from './CanvasBG'
import { Galeria } from './sections/Galeria'
import Hero from './sections/Hero'

const imagensGaleria = [
  {
    src: '/src/assets/foto.jpeg',
    descricao: 'Foto de William Almeida',
    premiacao: undefined
  },
  // Adicione mais imagens conforme necessário
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
