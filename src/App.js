// // import logo from './logo.svg';
// import './App.css';
// import questions from './Perguntas';
// import React, { useState } from 'react';
// import verificarResposta from './Score';

// function App() {
//   const [perguntaAtual, setPerguntaAtual] = useState(0);
//   const [pontos, setPontos] = useState(0);

//   const handleRespostaClick = (opcaoEscolhida) => {
//     const novaPontuacao = verificarResposta(perguntaAtual, opcaoEscolhida);
//     console.log(novaPontuacao);
//     setPontos(novaPontuacao);

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
//             <h2>{pontos}</h2>
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

// import React, { useState } from 'react';
// import questions from './Perguntas';
// import verificarResposta from './Score';
// import './App.css';

// function App() {
//   const [perguntaAtual, setPerguntaAtual] = useState(0);
//   const [pontos, setPontos] = useState(0);
//   const [fimDeJogo, setFimDeJogo] = useState(false);

//   const handleRespostaClick = (opcaoEscolhida) => {
//     if (!fimDeJogo) {
//       const novaPontuacao = verificarResposta(perguntaAtual, opcaoEscolhida);
//       setPontos(novaPontuacao);

//       if (perguntaAtual < questions.length - 1) {
//         setPerguntaAtual(perguntaAtual + 1);
//       } else {
//         setFimDeJogo(true);
//       }
//     }
//   };

//   return (
//     <div>
//       <header>
//         <div class='Logo'>
//           <h2>
//             Quiz Total
//           </h2>
//         </div>
//       </header> 
    
//       <main>
//         <div class="geral">
//           <div class="parte1">
//             {fimDeJogo ? (
//               <div>
//                 <h1>Fim de Jogo</h1>
//                 <h2>Pontuação Total: {pontos}</h2>
//               </div>
//             ) : (
//               <div>
//                 <div class="divPergunta">
//                   <h1 class="pergunta">{questions[perguntaAtual].question}</h1>
//                 </div>
//                 <div class="divPontos">
//                   <h3 class="pontos">Pontos:</h3>
//                   <h2>{pontos}</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div class="parte2">
//             <div class="opts">
//               {fimDeJogo
//                 ? null
//                 : questions[perguntaAtual].options.map((opcao, index) => (
//                     <button
//                       key={index}
//                       class="btnOpt"
//                       onClick={() => handleRespostaClick(index)}
//                     >
//                       <p>{opcao}</p>
//                     </button>
//                   ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import questions from './Perguntas';
import verificarResposta from './Score';
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
        <div class='Logo'>
          <h2>
            Quiz Total
          </h2>
        </div>
      </header> 
    
      <main>
        <div class="geral">
          <div class="parte1">
            {fimDeJogo ? (
              <div>
                <h1>Fim de Jogo</h1>
                <h2>Pontuação Total: {pontos}</h2>
                <button class="btnOpt" onClick={reiniciarJogo}>Tentar de Novo</button>
              </div>
            ) : (
              <div>
                <div class="divPergunta">
                  <h1 class="pergunta">{questions[perguntaAtual].question}</h1>
                </div>
                <div class="divPontos">
                  <h3 class="pontos">Pontos:</h3>
                  <h2>{pontos}</h2>
                </div>
              </div>
            )}
          </div>
          <div class="parte2">
            <div class="opts">
              {fimDeJogo
                ? null
                : questions[perguntaAtual].options.map((opcao, index) => (
                    <button
                      key={index}
                      class="btnOpt"
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


