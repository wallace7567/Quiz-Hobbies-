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

let respondeu = false;


function mostrarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    document.getElementById("opcao0").textContent =
        pergunta.opcoes[0];

    document.getElementById("opcao1").textContent =
        pergunta.opcoes[1];

    document.getElementById("opcao2").textContent =
        pergunta.opcoes[2];

    document.getElementById("opcao3").textContent =
        pergunta.opcoes[3];


    // Volta todos os botões ao normal

    document.getElementById("opcao0").style.backgroundColor = "";

    document.getElementById("opcao1").style.backgroundColor = "";

    document.getElementById("opcao2").style.backgroundColor = "";

    document.getElementById("opcao3").style.backgroundColor = "";


    document.getElementById("opcao0").style.color = "";

    document.getElementById("opcao1").style.color = "";

    document.getElementById("opcao2").style.color = "";

    document.getElementById("opcao3").style.color = "";


    // Ativa os botões novamente

    document.getElementById("opcao0").disabled = false;

    document.getElementById("opcao1").disabled = false;

    document.getElementById("opcao2").disabled = false;

    document.getElementById("opcao3").disabled = false;


    document.getElementById("resultado").textContent = "";

}


function responder(opcaoEscolhida) {

    // Impede clicar várias vezes

    if (respondeu) {
        return;
    }

    respondeu = true;


    const pergunta = perguntas[perguntaAtual];


    const botoes = [

        document.getElementById("opcao0"),

        document.getElementById("opcao1"),

        document.getElementById("opcao2"),

        document.getElementById("opcao3")

    ];


    // Desativa os botões

    botoes.forEach(function(botao) {

        botao.disabled = true;

    });


    // Se acertou

    if (opcaoEscolhida === pergunta.resposta) {

        pontos++;

        botoes[opcaoEscolhida].style.backgroundColor = "#19a84a";

        botoes[opcaoEscolhida].style.color = "white";

        document.getElementById("resultado").textContent =
            "✅ CORRETO!";

    }


    // Se errou

    else {

        // Mostra a resposta escolhida em vermelho

        botoes[opcaoEscolhida].style.backgroundColor = "#d62828";

        botoes[opcaoEscolhida].style.color = "white";


        // Mostra a resposta correta em verde

        botoes[pergunta.resposta].style.backgroundColor = "#19a84a";

        botoes[pergunta.resposta].style.color = "white";


        document.getElementById("resultado").textContent =
            "❌ ERRADO! A resposta correta está em verde.";
    }


    // Espera 1,5 segundo e vai para a próxima

    setTimeout(function() {

        perguntaAtual++;


        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        }

        else {

            mostrarResultado();

        }

    }, 1500);

}


function mostrarResultado() {

    document.getElementById("quiz").innerHTML =

        "<h2>🏆 Quiz terminado!</h2>" +

        "<p>Você acertou " +
        pontos +
        " de 10 perguntas!</p>" +

        "<p>" +
        mensagemFinal() +
        "</p>" +

        "<button onclick='location.reload()'>" +
        "🔄 Jogar novamente" +
        "</button>";

}


function mensagemFinal() {

    if (pontos === 10) {

        return "🌟 Perfeito! Você é um verdadeiro mestre Jedi!";

    }

    if (pontos >= 7) {

        return "🚀 Muito bom! Você conhece muito bem Star Wars!";

    }

    if (pontos >= 5) {

        return "⚔️ Bom trabalho! Você conhece bastante da galáxia!";

    }

    return "🌌 Continue treinando e tente novamente!";

}


mostrarPergunta();
