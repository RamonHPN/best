const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Berlim", "Londres", "Paris", "Madri"],
        answer: 2 // Índice da resposta correta (começando em 0)
    },
    {
        question: "Qual é o nome da doença que clareou a pele de Michael Jackson?",
        options: ["Doença de Chagas", "Câncer", "Pedofilia", "Vitiligo"],
        answer: 2
    },
    {
        question: "Eu compro um quilo de carne, se eu cozinho é meu?",
        options: ["Sim", "Provalmente", "Jesus!", "Coom certeza!"],
        answer: 3
    }
];

var score = 0;

function verificarResposta(perguntaIndex, opcaoEscolhida) {
    if (opcaoEscolhida === questions[perguntaIndex].answer) {
        score++;
    }
};

verificarResposta(questions[0], questions.options[2]);

console.log(score);


