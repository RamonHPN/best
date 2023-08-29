import questions from './Perguntas.js';


let score = 0; // Inicializa a pontuação fora da função

function verificarResposta(perguntaIndex, opcaoEscolhida) {
    if (opcaoEscolhida === questions[perguntaIndex].answer) {
        score = score + 1;
    } else {
        score = score - 1;
    }
    console.log(score);
    return score;
}

export default verificarResposta;