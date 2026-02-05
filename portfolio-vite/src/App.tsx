import { CanvasBG } from './CanvasBG'
import Header from './sections/Header'
import Sobre from './sections/Sobre'
import Experiencia from './sections/Experiencia'
import Tecnologias from './sections/Tecnologias'
import Projetos from './sections/Projetos'
import Certificados from './sections/Certificados'
import Contato from './sections/Contato'
import Hero from './sections/Hero'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useGsapAnimations } from './hooks/useGsapAnimations'

function App() {
  useSmoothScroll()
  const rootRef = useGsapAnimations()

  return (
    <div ref={rootRef}>
      <Header />
      <CanvasBG />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Tecnologias />
        <Projetos />
        <Certificados />
        <Contato />
      </main>
    </div>
  );
}

export default App
