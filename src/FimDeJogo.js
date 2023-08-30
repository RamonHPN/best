import questions from './Perguntas';
import React from 'react';
import './App.css';

const FimDeJogo = ({ fimDeJogo, pontos, perguntaAtual, reiniciarJogo }) => {
  if (fimDeJogo) {
    return (
      <div>
        <h1>Fim de Jogo</h1>
        <h2>Pontuação Total: {pontos}</h2>
        <button className="btnOpt" onClick={reiniciarJogo}>Tentar de Novo</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="divPergunta">
          <h1 className="pergunta">{questions[perguntaAtual].question}</h1>
        </div>
        <div className="divPontos">
          <h3 className="pontos">Pontos:</h3>
          <h2>{pontos}</h2>
        </div>
      </div>
    );
  }
};

export default FimDeJogo;
