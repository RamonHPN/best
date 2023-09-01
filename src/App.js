// // import logo from './logo.svg';
// import './App.css';
// import questions from './Perguntas';
// import React, { useState } from 'react';
// // import verificarResposta from './Score';

// function App() {
//   const [perguntaAtual, setPerguntaAtual] = useState(0);
//   // const [pontos, setPontos] = useState(0);


//   const handleRespostaClick = (opcaoEscolhida) => {
//   //   const novaPontuacao = verificarResposta(perguntaAtual, opcaoEscolhida);
//   //   console.log(novaPontuacao);
//   //   setPontos(novaPontuacao);

//     if (perguntaAtual < questions.length - 1) {
//       setPerguntaAtual(perguntaAtual + 1);
//     }
//   };
  

//   return (
//     // </div>
//     <div>
//       <header>
//         <div class='Logo'>
//           <h2>
//             Quiz Total
//           </h2>
//         </div>
//         {/* <div class="Menu">
//           <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 1</a>
//           <a href="https://www.videos.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 2</a>
//           <a href="https://animesgames.net/" target="_blank" rel="noopener noreferrer" class="opts">Option 3</a>
        
//           <div id="divBusca">
//             <input class="busca" type="text" id="txtBusca" placeholder="Search"/>
//           </div>
//         </div> */}
//       </header> 
    
//     <main>
      
//       <div class="geral">

//         <div class="parte1">

//           <div class="divPergunta">
//             <h1 class="pergunta">{questions[perguntaAtual].question}</h1>

//           </div>

//           <div class="divPontos">
//             <h3 class="pontos">Pontos:</h3>
//             <h2>pontos</h2>
//           </div>

//         </div>

//         <div class="parte2">
//           <div class="opts">
//             <button class="btnOpt" onClick={() => handleRespostaClick(0)}><p>{questions[perguntaAtual].options[0]}</p></button>
//             <button class="btnOpt" onClick={() => handleRespostaClick(1)}><p>{questions[perguntaAtual].options[1]}</p></button>
//             <button class="btnOpt" onClick={() => handleRespostaClick(2)}><p>{questions[perguntaAtual].options[2]}</p></button>
//             <button class="btnOpt" onClick={() => handleRespostaClick(3)}><p>{questions[perguntaAtual].options[3]}</p></button>
//           </div>

//         </div>

//       </div>

//     </main>

//     </div>
//   );
// }

// export default App;


// App.js
import React, { useState } from 'react';
import questions from './Perguntas';
import calculateScore from './Score2'; 
import './App.css'
import resetGame from './reset';
import EndGame from './FimDeJogo';

function App() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontos, setPontos] = useState(0); 
  const [fimDeJogo, setFimDeJogo] = useState(false);
  

  const handleRespostaClick = (opcaoEscolhida) => {
    const novaPontuacao = calculateScore(questions[perguntaAtual], opcaoEscolhida); // Chama a função de cálculo
    setPontos(pontos + novaPontuacao); // Atualiza a pontuação

    if (perguntaAtual < questions.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    }else{
      setFimDeJogo(true);
    }
  };

  const handleResetClick = () => {
    resetGame(setPontos, setPerguntaAtual); 
    setFimDeJogo(false);
  };

  return (
    <div>
      <header>
        <div class='Logo'>
          <h2>
            Quiz Total
          </h2>
        </div>
        {/* <div class="Menu">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 1</a>
          <a href="https://www.videos.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 2</a>
          <a href="https://animesgames.net/" target="_blank" rel="noopener noreferrer" class="opts">Option 3</a>
        
          <div id="divBusca">
            <input class="busca" type="text" id="txtBusca" placeholder="Search"/>
          </div>
        </div> */}
      </header>
      {/* Seu código de cabeçalho aqui */}
      <main>
        {fimDeJogo ? ( // Verifique se o jogo terminou para exibir o componente EndGame
          <EndGame pontos={pontos} onRestartClick={handleResetClick} />
         ) : (
          <div class="geral">
            <div class="parte1">
              <div class="divPergunta">
                <h1 class="pergunta">{questions[perguntaAtual].question}</h1>
              </div>
              <div class="divPontos">
                <h3 class="pontos">Pontos:</h3>
                <h2>{pontos}</h2> {/* Mostra a pontuação */}
              </div>
            </div>
            <div class="parte2">
              <div class="opts">
                {questions[perguntaAtual].options.map((option, index) => (
                  <button key={index} class="btnOpt" onClick={() => handleRespostaClick(index)}>
                    <p>{option}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
         )}
      </main>
    </div>
  );
}

export default App;

