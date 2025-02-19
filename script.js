const items = [
    { question: "Eu tive 700 esposas e 300 concubinas", answer: "Salomão" },
    { question: "Fui engolido por um grande peixe e sobrevivi", answer: "Jonas" },
    { question: "Fui vendido pelos meus irmãos e me tornei governador no Egito", answer: "José" },
    { question: "Derrubei um gigante com apenas uma pedra", answer: "Davi" },
    { question: "Construí uma grande arca antes do dilúvio", answer: "Noé" },
    { question: "Traí Jesus por 30 moedas de prata", answer: "Judas Iscariotes" },
    { question: "Fui o primeiro homem criado por Deus", answer: "Adão" },
    { question: "Recebi os Dez Mandamentos no Monte Sinai", answer: "Moisés" },
    { question: "Neguei Jesus três vezes antes do galo cantar", answer: "Pedro" },
    { question: "Meu nome era Saulo antes de minha conversão", answer: "Paulo" }
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