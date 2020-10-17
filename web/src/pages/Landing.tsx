import React from 'react';
// importa arquivo css
import '../styles/pages/landing.css';
// importar imagens
import logoImg from '../images/Logo.svg';
// importa biblioteca com ícones
import { FiArrowRight } from 'react-icons/fi';
// importa Link para "carregamento"
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo do Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Recife,</strong>
          <span>Pernambuco</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
