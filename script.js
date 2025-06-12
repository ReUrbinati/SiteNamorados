function iniciarQuiz() {
    alert("O quiz ainda está em desenvolvimento! 😂 Mas o que importa é que te amo!");
}

function mostrarMensagem() {
    document.getElementById("textoCarta").style.display = "block";
}
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Gera corações flutuantes a cada segundo
setInterval(createFloatingHeart, 1000);
function showPhoto(imageSrc) {
    const photo = document.getElementById("photoView");
    photo.src = imageSrc;
    photo.style.display = "block";
}
document.querySelector(".versus").addEventListener("mouseover", function () {
    this.style.textShadow = "0 0 20px #ff0000, 0 0 40px #008000";
});

document.querySelector(".versus").addEventListener("mouseout", function () {
    this.style.textShadow = "none";
});

const quizData = [
    {
        question: "Qual foi o primeiro lugar onde nos encontramos?",
        options: ["No estádio", "Em uma festa", "No Carro", "No parque"],
        answer: 2
    },
    {
        question: "Qual é a minha comida favorita?",
        options: ["Pizza", "Sushi", "Hambúrguer", "Lasanha"],
        answer: 1
    },
    {
        question: "Qual foi o placar da maior goleada entre Palmeiras e Corinthians?",
        options: ["8x0", "7x1", "6x0", " 5x1"],
        answer: 0
    },
    {
        question: "Qual o melhor time de todos?",
        options: ["Palmeiras", "Palmeiras", "Palmeiras", "Palmeiras"],
        answer: 0
    },
    {
        question: "Qual o primeiro presente que você me deu?",
        options: ["Ursinho", "Girassol e chocolate", "Girassol", "Cesta de café da manhã"],
        answer: 1
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizData.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerText = q.question;
        quizContainer.appendChild(questionElement);

        q.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("input");
            optionElement.type = "radio";
            optionElement.name = `question-${index}`;
            optionElement.value = optionIndex;

            const label = document.createElement("label");
            label.classList.add("option");
            label.innerText = option;
            label.appendChild(optionElement);

            quizContainer.appendChild(label);
        });
    });
}

function checkAnswers() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score++;
        }
    });

    document.getElementById("quizResult").innerText = `Você acertou ${score} de ${quizData.length} perguntas! ❤️`;
}

// Chama a função para carregar o quiz ao abrir a página
window.onload = loadQuiz;
