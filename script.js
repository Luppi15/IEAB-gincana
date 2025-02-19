const items = [
    { question: "Eu tive 700 esposas e 300 concubinas", answer: "Salomão" },
    { question: "Fui engolido por um grande peixe e sobrevivi", answer: "Jonas" },
    { question: "Saí no soco com um anjo e ganhei um nome novo.", answer: "Jacó" },
    { question: "Derrubei um gigante com apenas uma pedra", answer: "Davi" },
    { question: "Construí uma grande arca antes do dilúvio", answer: "Noé" },
    { question: "Traí Jesus por 30 moedas de prata", answer: "Judas Iscariotes" },
    { question: "Fui o primeiro homem criado por Deus", answer: "Adão" },
    { question: "Fiz um voto de nunca cortar o cabelo, mas minha namorada me passou a tesoura.", answer: "Sansão" },
    { question: "Minha esposa riu quando Deus disse que teríamos um filho.", answer: "Abraão" }
];

let currentAnswer = "";

function showRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    document.getElementById("randomItemDisplay").innerText = randomItem.question;
    currentAnswer = randomItem.answer;
    document.getElementById("answerDisplay").style.display = "none"; // Esconde a resposta
}

function showAnswer() {
    document.getElementById("answerDisplay").innerText = currentAnswer;
    document.getElementById("answerDisplay").style.display = "block"; // Mostra a resposta
}