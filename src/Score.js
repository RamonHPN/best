import questions from './Perguntas.js';



function verificarResposta(perguntaIndex, opcaoEscolhida) {
    var score = 0;
    if (opcaoEscolhida === questions[perguntaIndex].answer) {
        score=score+1;
    }
    if (opcaoEscolhida !== questions[perguntaIndex].answer) {
        score=score-1;
    }
    console.log(score);
    return score;
};

export default verificarResposta;