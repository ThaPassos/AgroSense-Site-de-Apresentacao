import { useState } from "react";
import ADicone from "../assets/simboloAcessibilidade.jpg"; 

export default function Acessibilidade() {
  const [lendo, setLendo] = useState(false);

  const alternarLeitura = () => {
    if (lendo) {
      window.speechSynthesis.cancel();
      setLendo(false);
    } else {
      const texto = document.body.innerText;
      const fala = new SpeechSynthesisUtterance(texto);
      fala.lang = "pt-BR";
      fala.rate = 1;
      fala.pitch = 1;
      fala.onend = () => setLendo(false);
      fala.onerror = () => setLendo(false);
      window.speechSynthesis.speak(fala);
      setLendo(true);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <button
      onClick={alternarLeitura}
      aria-label={lendo ? "Parar leitura da página" : "Ler conteúdo da página em voz alta"}
      title={lendo ? "Parar leitura" : "Ouvir página"}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        color: "white",
        border: "none",
        borderRadius: "30%",
        width: "60px",
        height: "60px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: lendo ? "brightness(0.7)" : "brightness(1)",
        overflow: "hidden",
        padding: "0"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={ADicone} 
        alt="Acessibilidade" 
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
    </button>
  );
}