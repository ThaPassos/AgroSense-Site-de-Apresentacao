import NossoTrabalho from './components/NossoTrabalho'
import PaginaInicial from './components/PaginaInicial'
import QuemSomos from './components/QuemSomos'
import Contato from './components/Contato'
import Navbar from './components/NavBar';
import './App.css';
import Acessibilidade from './components/Acessibilidade';

function App() {
  return (
    <div>
      <Acessibilidade />
      <Navbar />

      <section id="Home">
        <PaginaInicial />
      </section>
      
      <section id="NossoTrabalho">
        <NossoTrabalho />
      </section>
      
      <section id="QuemSomos">
        <QuemSomos />
      </section>
      
      <section id="Contato">
        <Contato />
      </section>
    </div>
  )
}

export default App