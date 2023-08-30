import React, { useState } from 'react';
import questions from './Perguntas';
import verificarResposta from './Score';
import FimDeJogo from './FimDeJogo'; 

import './App.css';

function App() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const handleRespostaClick = (opcaoEscolhida) => {
    if (!fimDeJogo) {
      const novaPontuacao = verificarResposta(perguntaAtual, opcaoEscolhida);
      setPontos(novaPontuacao);

      if (perguntaAtual < questions.length - 1) {
        setPerguntaAtual(perguntaAtual + 1);
      } else {
        setFimDeJogo(true);
      }
    }
  };

  const reiniciarJogo = () => {
    setPerguntaAtual(0);
    setPontos(0);
    setFimDeJogo(false);
  };

  return (
    <div>
      <header>
        <div className='Logo'>
          <h2>
            Quiz Total
          </h2>
        </div>
      </header> 
    
      <main>
        <div className="geral">
          <div className="parte1">
            <FimDeJogo
              fimDeJogo={fimDeJogo}
              pontos={pontos}
              perguntaAtual={perguntaAtual}
              handleRespostaClick={handleRespostaClick}
              reiniciarJogo={reiniciarJogo}
            />
          </div>
          <div className="parte2">
            <div className="opts">
              {fimDeJogo
                ? null
                : questions[perguntaAtual].options.map((opcao, index) => (
                    <button
                      key={index}
                      className="btnOpt"
                      onClick={() => handleRespostaClick(index)}
                    >
                      <p>{opcao}</p>
                    </button>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;



