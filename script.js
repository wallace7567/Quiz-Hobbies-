const perguntas = [
    {
        pergunta: "1. Quem é o pai de Luke Skywalker?",
        opcoes: [
            "Obi-Wan Kenobi",
            "Darth Vader",
            "Yoda",
            "Han Solo"
        ],
        resposta: 1
    },

    {
        pergunta: "2. Qual é o nome da nave de Han Solo?",
        opcoes: [
            "X-Wing",
            "Millennium Falcon",
            "Death Star",
            "Star Destroyer"
        ],
        resposta: 1
    },

    {
        pergunta: "3. Qual é o planeta onde Luke cresceu?",
        opcoes: [
            "Naboo",
            "Endor",
            "Tatooine",
            "Hoth"
        ],
        resposta: 2
    },

    {
        pergunta: "4. Qual arma é usada pelos Jedi?",
        opcoes: [
            "Sabre de luz",
            "Blaster",
            "Rifle",
            "Canhão"
        ],
        resposta: 0
    },

    {
        pergunta: "5. Quem é a irmã de Luke Skywalker?",
        opcoes: [
            "Rey",
            "Ahsoka",
            "Leia Organa",
            "Padmé"
        ],
        resposta: 2
    },

    {
        pergunta: "6. Qual é o nome do pequeno droide azul e branco?",
        opcoes: [
            "C-3PO",
            "R2-D2",
            "BB-8",
            "K-2SO"
        ],
        resposta: 1
    },

    {
        pergunta: "7. Quem criou Star Wars?",
        opcoes: [
            "George Lucas",
            "Steven Spielberg",
            "James Cameron",
            "Christopher Nolan"
        ],
        resposta: 0
    },

    {
        pergunta: "8. Qual é o nome da estação espacial que pode destruir planetas?",
        opcoes: [
            "Millennium Falcon",
            "Death Star",
            "X-Wing",
            "Star Destroyer"
        ],
        resposta: 1
    },

    {
        pergunta: "9. Quem é o mestre Jedi de Anakin Skywalker?",
        opcoes: [
            "Yoda",
            "Mace Windu",
            "Obi-Wan Kenobi",
            "Qui-Gon Jinn"
        ],
        resposta: 2
    },

    {
        pergunta: "10. Qual é o nome da força usada pelos Jedi e Sith?",
        opcoes: [
            "A Energia",
            "A Força",
            "O Poder",
            "A Luz"
        ],
        resposta: 1
    }
];


let perguntaAtual = 0;
let pontos = 0;


function mostrarPergunta() {

    document.getElementById("pergunta").textContent =
        perguntas[perguntaAtual].pergunta;

    document.getElementById("opcao0").textContent =
        perguntas[perguntaAtual].opcoes[0];

    document.getElementById("opcao1").textContent =
        perguntas[perguntaAtual].opcoes[1];

    document.getElementById("opcao2").textContent =
        perguntas[perguntaAtual].opcoes[2];

    document.getElementById("opcao3").textContent =
        perguntas[perguntaAtual].opcoes[3];

}


function responder(opcao) {

    if (opcao === perguntas[perguntaAtual].resposta) {

        pontos++;

    }

    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        document.getElementById("quiz").innerHTML =

            "<h2>🏆 Quiz terminado!</h2>" +

            "<p>Você acertou " +
            pontos +
            " de 10 perguntas!</p>" +

            "<button onclick='location.reload()'>" +
            "Jogar novamente" +
            "</button>";

    }

}


mostrarPergunta();
