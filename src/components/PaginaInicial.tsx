import { useState } from "react";
import ImagemFundo from "../assets/imagemFundo.png";
import LogoRedonda from "../assets/logoRedonda.png";
import { Menu, X } from "lucide-react";
import "./PaginaInicial.css"

export default function PaginaInicial() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="paginaInicial">
      <div
        className="background"
        style={{ backgroundImage: `url(${ImagemFundo})` }}
      />

      <div className="conteudo">
        <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <img src={LogoRedonda} alt="Logo redonda" className="logoRedonda" />

        {menuOpen && (
          <div className="menuMobileOverlay" onClick={() => setMenuOpen(false)}>
            <div className="menuMobile" onClick={(e) => e.stopPropagation()}>
              <button className="closeBtn" onClick={() => setMenuOpen(false)}>
                <X size={25} />
              </button>
              <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#NossoTrabalho" onClick={() => setMenuOpen(false)}>Nosso trabalho</a>
              <a href="#QuemSomos" onClick={() => setMenuOpen(false)}>Quem somos</a>
              <a href="#Contato" onClick={() => setMenuOpen(false)}>Contato</a>
            </div>
          </div>
        )}

        <div className="textoPrincipal">
          <div className="textoContainer">
            <h2>A EMPRESA COM OS</h2>
            <h1>SENSORES DE ALTA PRECISÃO</h1>
          </div>
        </div>
      </div>
    </div>
  );
}