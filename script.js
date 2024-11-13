// script.js

const quizData = [
    {
        question: "Quem foi a primeira pessoa a ganhar o Prêmio Nobel por descobertas relacionadas à radioatividade?",
        options: ["Marie Curie", "Albert Einstein", "Henri Becquerel", "Ernest Rutherford"],
        correct: 0,
        explanation: "Marie Curie foi a primeira mulher a ganhar o Prêmio Nobel, em 1903, por suas pesquisas sobre a radioatividade."
    },
    {
        question: "O que é a meia-vida de um elemento radioativo?",
        options: [
            "O tempo que leva para o elemento se transformar em outro",
            "O tempo necessário para a metade dos átomos de um elemento se desintegrarem",
            "O tempo que leva para a radiação de um elemento ser absorvida",
            "O tempo que um elemento leva para se tornar estável"
        ],
        correct: 1,
        explanation: "A meia-vida é o tempo necessário para que metade dos átomos de uma substância radioativa se desintegre."
    },
    {
        question: "Quais partículas podem ser emitidas durante a desintegração radioativa?",
        options: ["Partículas alfa", "Partículas beta", "Radiação gama", "Todas as alternativas estão corretas"],
        correct: 3,
        explanation: "A desintegração radioativa pode liberar partículas alfa, beta ou radiação gama, dependendo do tipo de decaimento."
    },
    {
        question: "Qual é o material mais comumente usado em reatores nucleares?",
        options: ["Uranium-235", "Cobalto-60", "Carbono-14", "Polônio"],
        correct: 0,
        explanation: "O Uranium-235 é amplamente utilizado como combustível em reatores nucleares devido à sua capacidade de sustentar reações em cadeia."
    },
    {
        question: "Qual é a principal aplicação médica da radioatividade?",
        options: ["Datação de fósseis", "Radioterapia", "Uso em energia nuclear", "Estudo de rochas"],
        correct: 1,
        explanation: "A radioterapia utiliza radiação para tratar diversos tipos de câncer, destruindo células cancerígenas."
    },
    {
        question: "Qual elemento radioativo foi responsável pela descoberta da radioatividade?",
        options: ["Uranium", "Polônio", "Rádio", "Tório"],
        correct: 2,
        explanation: "O Rádio, descoberto por Marie e Pierre Curie, foi fundamental para a descoberta do fenômeno da radioatividade."
    },
    {
        question: "O que é a radiação gama?",
        options: ["Radiação de alta energia", "Radiação de baixa energia", "Radiação visível", "Radiação invisível"],
        correct: 0,
        explanation: "A radiação gama é uma forma de radiação eletromagnética de alta energia, com alto poder de penetração."
    },
    {
        question: "Qual é o principal risco da exposição prolongada à radiação?",
        options: ["Aquecimento corporal", "Danos aos órgãos", "Câncer", "Náuseas"],
        correct: 2,
        explanation: "A exposição prolongada à radiação pode danificar as células do corpo e aumentar o risco de câncer."
    },
    {
        question: "Quais partículas são emitidas durante a desintegração alfa?",
        options: ["Nêutrons", "Elétrons", "Núcleos de hélio", "Fótons"],
        correct: 2,
        explanation: "A desintegração alfa emite núcleos de hélio, consistindo de dois prótons e dois nêutrons."
    },
    {
        question: "O que é a radiação beta?",
        options: ["Emissão de elétrons ou pósitrons", "Emissão de partículas alfa", "Emissão de radiação gama", "Nenhuma das alternativas"],
        correct: 0,
        explanation: "A radiação beta é a emissão de partículas beta, que podem ser elétrons ou pósitrons, dependendo do tipo de decaimento."
    },
    {
        question: "Qual a importância do Carbono-14 na datação de fósseis?",
        options: ["Ele se utiliza da radiação gama", "Ele é usado para medir o tempo de vida das rochas", "Ele é usado para medir a idade de organismos antigos", "Nenhuma das alternativas"],
        correct: 2,
        explanation: "O Carbono-14 é utilizado na datação de fósseis e restos orgânicos para determinar sua idade com precisão."
    },
    {
        question: "O que é o fenômeno da fissão nuclear?",
        options: ["Quebra de um átomo em dois ou mais núcleos menores", "A fusão de dois átomos em um núcleo maior", "Emissão de radiação alfa", "Processo de produção de radiação gama"],
        correct: 0,
        explanation: "A fissão nuclear ocorre quando um átomo se divide em dois ou mais núcleos menores, liberando uma grande quantidade de energia."
    },
    {
        question: "Como os reatores nucleares geram eletricidade?",
        options: ["Aquecendo a água e gerando vapor", "Através da fusão nuclear", "Usando radiação gama", "Por meio da emissão de nêutrons"],
        correct: 0,
        explanation: "Em reatores nucleares, a fissão nuclear aquece a água, que se transforma em vapor e gira turbinas para gerar eletricidade."
    },
    {
        question: "A radiação ionizante pode ser perigosa para os seres vivos porque:",
        options: ["Ela causa aquecimento celular", "Ela altera a estrutura dos átomos e moléculas", "Ela melhora a capacidade de divisão celular", "Ela é completamente segura"],
        correct: 1,
        explanation: "A radiação ionizante pode alterar a estrutura atômica e molecular, causando danos às células, o que pode resultar em câncer ou outros problemas de saúde."
    },
    {
        question: "Quais são os efeitos da radiação alfa?",
        options: ["Alta penetração", "Baixa penetração, mas muito danosa se ingerida", "Não tem efeitos", "Baixa energia"],
        correct: 1,
        explanation: "A radiação alfa tem baixa penetração, mas é extremamente perigosa se o material for ingerido ou inalado."
    }
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = [];
let explanations = [];

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");
    const resultEl = document.getElementById("result");

    // Limpar respostas anteriores
    answersEl.innerHTML = "";
    resultEl.innerHTML = "";

    // Mostrar pergunta atual
    questionEl.innerHTML = quizData[currentQuestion].question;

    // Mostrar opções de respostas
    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(index));
        answersEl.appendChild(button);
    });

    // Esconder botão "Próxima Pergunta" até a resposta ser dada
    nextButton.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const nextButton = document.getElementById("next-button");
    const resultEl = document.getElementById("result");

    // Verificar se a resposta está correta
    if (selectedIndex === quizData[currentQuestion].correct) {
        correctAnswers++;
        resultEl.innerText = "Resposta correta!";
        resultEl.style.color = "green";
    } else {
        incorrectAnswers.push(currentQuestion);
        explanations.push(quizData[currentQuestion].explanation);
        resultEl.innerText = "Resposta errada!";
        resultEl.style.color = "red";
    }

    // Mostrar o botão para a próxima pergunta
    nextButton.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    const summaryEl = document.getElementById("summary");
    summaryEl.innerHTML = `
        <h3>Quiz Finalizado!</h3>
        <p>Acertos: ${correctAnswers} de ${quizData.length}</p>
        <p>Questões erradas: ${incorrectAnswers.length}</p>
        <h4>Explicações:</h4>
        <ul>
            ${incorrectAnswers.map((index, i) => `
                <li><strong>Questão ${index + 1}:</strong> ${explanations[i]}</li>
            `).join('')}
        </ul>
        <button onclick="restartQuiz()">Reiniciar Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = [];
    explanations = [];
    showSummary();
    loadQuestion();
}

document.getElementById("next-button").addEventListener("click", nextQuestion);

// Inicializa o quiz carregando a primeira pergunta
loadQuestion();
