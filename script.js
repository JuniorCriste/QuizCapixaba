const quizData = [
    {
        question: "Qual é a capital do Espírito Santo?",
        options: ["Serra", "Vitória", "Vila Velha", "Cariacica"],
        answer: "Vitória"
    },
    {
        question: "Qual prato típico capixaba é preparado com peixe, urucum e panela de barro?",
        options: ["Moqueca baiana", "Moqueca capixaba", "Bobó de camarão", "Peixada paulista"],
        answer: "Moqueca capixaba"
    },
    {
        question: "Em qual município está localizado o Convento da Penha?",
        options: ["Vitória", "Guarapari", "Vila Velha", "Anchieta"],
        answer: "Vila Velha"
    },
    {
        question: "Qual é a principal festa religiosa realizada em Anchieta?",
        options: ["Festa da Penha", "Festa de São Pedro", "Festa Nacional de São José de Anchieta", "Festa de Iemanjá"],
        answer: "Festa Nacional de São José de Anchieta"
    },
    {
        question: "O Parque Estadual da Pedra Azul está localizado em qual município?",
        options: ["Domingos Martins", "Venda Nova do Imigrante", "Marechal Floriano", "Alfredo Chaves"],
        answer: "Domingos Martins"
    },
    {
        question: "Qual ingrediente diferencia a moqueca capixaba da moqueca baiana?",
        options: ["Leite de coco", "Azeite de dendê", "Pimenta-do-reino", "Azeite comum"],
        answer: "Azeite de dendê"
    },
    {
        question: "Qual município é conhecido como “Cidade Saúde” devido ao turismo de praias e balneários?",
        options: ["Vitória", "Linhares", "Guarapari", "São Mateus"],
        answer: "Guarapari"
    },
    {
        question: "Em qual região do Espírito Santo está localizada Ecoporanga?",
        options: ["Região Metropolitana", "Região Sul", "Região Noroeste", "Região Serrana"],
        answer: "Região Noroeste"
    },
    {
        question: "Em qual municipio está a Praia de Itaúnas, famosa por suas dunas?",
        options: ["Conceição da Barra", "São Mateus", "Linhares", "Aracruz"],
        answer: "Conceição da Barra"
    },
    {
        question: "Qual fruta é símbolo da cidade de Linhares e movimenta seu turismo rural?",
        options: ["Goiaba", "Cacau", "Coco", "Mamão"],
        answer: "Cacau"
    },
    {
        question: "Qual é a principal característica das panelas de barro capixabas?",
        options: ["Feitas no torno elétrico", "Pintadas com esmalte colorido", "Modeladas à mão e queimadas ao ar livre", "Produzidas apenas em fábricas"],
        answer: "Modeladas à mão e queimadas ao ar livre"
    },
    {
        question: "Qual parque nacional localizado no Espírito Santo preserva áreas de Mata Atlântica e lagos?",
        options: ["Parque Nacional do Caparaó", "Parque Nacional da Tijuca", "Parque Nacional da Serra da Canastra", "Parque Nacional de Itatiaia"],
        answer: "Parque Nacional do Caparaó"
    },
    {
        question: "Qual é o pico mais alto do Espírito Santo?",
        options: ["Pico da Bandeira", "Pedra Azul", "Pico do Eldorado", "Pico da Serra"],
        answer: "Pico da Bandeira"
    },
    {
        question: "Qual evento gastronômico de Venda Nova do Imigrante celebra a cultura italiana?",
        options: ["Festa do Café", "Festa da Uva", "Festa da Polenta", "Festa da Pizza"],
        answer: "Festa da Polenta"
    },
    {
        question: "Qual cidade abriga o Farol de Santa Luzia?",
        options: ["Guarapari", "Vila Velha", "Anchieta", "Serra"],
        answer: "Vila Velha"
    },
    {
        question: "Qual vila capixaba que foi coberta pela areia?",
        options: ["Agreste de Tieta", "Guriri", "Itaúnas", "Manguinhos"],
        answer: "Itaúnas"
    },
    {
        question: "A Ilha das Caieiras, em Vitória, é famosa por qual atividade gastronômica?",
        options: ["Produção de queijos", "Descasque de siri", "Criação de camarões", "Cultivo de ostras"],
        answer: "Descasque de siri"
    },
    {
        question: "Qual região está localizado o Estado do Espírito Santo?",
        options: ["Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
        answer: "Sudeste"
    },
    {
        question: "Qual dança típica de Itaúnas é patrimônio imaterial do Brasil?",
        options: ["Fandango", "Congo", "Forró pé de serra", "Dança do Boi"],
        answer: "Forró pé de serra"
    },
    {
        question: "Qual é a festividade Ecoporanguense que acontece anualmente no interior do município e reune toda comunidade da Prata dos Baianos em uma brincadeira?",
        options: ["Rodeio", "Esconde-esconde", "Roubada da bandeira", "Congo de São Benedito"],
        answer: "Roubada da bandeira"
    },
    {
        question: "O monumento do Buda Gigante está localizado em qual município capixaba?",
        options: ["João Neiva", "Vila Velha", "Ibiraçu", "Guarapari"],
        answer: "Ibiraçu"
    },
    {
        question: "Qual é a cor predominante na fachada do Convento da Penha?",
        options: ["Amarela", "Branca", "Azul", "Bege"],
        answer: "Branca"
    },
    {
        question: "Qual o instrumento que é um dos símbolos do Espírito Santo, comumente utilizado no congo capixaba?",
        options: ["Guitarra", "Violão", "Casaca", "Sintetizadores"],
        answer: "Casaca"
    },
    {
        question: "Qual é o município com maior produção de leite no Espírito Santo?",
        options: ["Barra de São Francisco", "Alegre", "Colatina", "Ecoporanga"],
        answer: "Ecoporanga"
    },
    {
        question: "Qual festa popular reúne o Congo e a devoção a São Benedito em várias cidades capixabas?",
        options: ["Folia de Reis", "Festa do Divino Espírito Santo", "Festa de São Benedito", "Festa de Nossa Senhora da Penha"],
        answer: "Festa de São Benedito"
    },
    {
        question: "Em que município está localizada a Lagoa Juparanã, uma das maiores lagoas do Brasil?",
        options: ["Linhares", "Aracruz", "São Mateus", "Marataízes"],
        answer: "Linhares"
    },
    {
        question: "Qual cantor famoso nasceu em Cachoeiro de Itapemirim?",
        options: ["Erasmo Carlos", "Fagner", "Roberto Carlos", "Supla"],
        answer: "Roberto Carlos"
    },
    {
        question: "O principal rio que corta Colatina é",
        options: ["Rio Itapemirim", "Rio Doce", "Rio Jucu", "Rio Santa Maria"],
        answer: "Rio Doce"
    },
    {
        question: "Qual rio corta a capital Vitória?",
        options: ["Rio Doce", "Rio Santa Maria da Vitória", "Rio Itapemirim", "Rio Jucu"],
        answer: "Rio Santa Maria da Vitória"
    },
    {
        question: "Colatina é conhecida como:",
        options: ["Cidade Saúde", "Cidade das Dunas", "Princesa do Norte", "Capital da Polenta"],
        answer: "Princesa do Norte"
    }
];

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endGameScreen = document.getElementById('end-game-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const optionButtons = optionsContainer.querySelectorAll('.option-button');
const finalScoreElement = document.getElementById('final-score');
const endGameMessageElement = document.getElementById('end-game-message');
const rankingMessageElement = document.getElementById('ranking-message');
const rankingContainer = document.getElementById('ranking-container');
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const countdownElement = document.getElementById('countdown');
const currentScoreElement = document.getElementById('current-score');

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let topScores = JSON.parse(localStorage.getItem('topScores')) || [];
const topRankingSize = 5;

const audioInicio = new Audio('audio/inicio.ogg');
const audioAcerto = new Audio('audio/acerto.ogg');
const audioErro = new Audio('audio/erro.ogg');
const audioVitoria = new Audio('audio/campeao.ogg');

const keyboardMap = {
    '2': 'd',
    '4': 'a',
    '6': 'c',
    '8': 'b'
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    startScreen.classList.add('hidden');
    endGameScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    shuffledQuestions = [...quizData];
    shuffleArray(shuffledQuestions);
    currentQuestionIndex = 0;
    score = 0;
    currentScoreElement.textContent = score;
    audioInicio.play();
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame(false); // Ganhou
        return;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    const options = currentQuestion.options;
    options.forEach((option, index) => {
        const button = optionButtons[index];
        button.innerHTML = `<span>${Object.keys(keyboardMap).find(key => keyboardMap[key] === button.id.slice(-1))}</span>${option}`;
        button.dataset.answer = option;
        // Adiciona o event listener para clique
        button.onclick = () => checkAnswer(button.dataset.answer);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
        currentScoreElement.textContent = score;
        audioAcerto.play();
        currentQuestionIndex++;
        displayQuestion();
    } else {
        audioErro.play();
        endGame(true); // Perdeu
    }
}

async function endGame(lost = false) {
    gameScreen.classList.add('hidden');
    endGameScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;
    restartButton.classList.add('hidden');

    if (lost) {
        endGameMessageElement.textContent = `Você errou e perdeu! Sua pontuação foi ${score}.`;
    } else {
        endGameMessageElement.textContent = 'Parabéns, você completou o quiz!';
        audioVitoria.play();
    }
    
    // VERIFICAÇÃO RESTAURADA: Só captura a foto se o jogador entrar no ranking
    const isTopPlayer = topScores.length < topRankingSize || score > (topScores.length > 0 ? topScores[topScores.length - 1].score : -1);

    if (isTopPlayer) {
        rankingMessageElement.textContent = 'Você entrou para o ranking! Preparando para capturar sua foto...';
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcamElement.srcObject = stream;
            webcamElement.classList.remove('hidden');

            webcamElement.onloadedmetadata = () => {
                setTimeout(() => {
                    canvasElement.width = webcamElement.videoWidth;
                    canvasElement.height = webcamElement.videoHeight;
                    canvasElement.getContext('2d').drawImage(webcamElement, 0, 0, canvasElement.width, canvasElement.height);
                    
                    const photoDataUrl = canvasElement.toDataURL('image/jpeg');
                    stream.getTracks().forEach(track => track.stop());
                    
                    addToRanking(photoDataUrl);
                    webcamElement.classList.add('hidden');
                    showRanking();

                }, 2000);
            };
        } catch (err) {
            console.error("Erro ao acessar a webcam: ", err);
            addToRanking('placeholder.png');
            showRanking();
        }
    } else {
        rankingMessageElement.textContent = 'Você não entrou no ranking. Tente novamente!';
        showRanking();
    }
}

function addToRanking(photoDataUrl) {
    topScores.push({ score, photo: photoDataUrl });
    topScores.sort((a, b) => b.score - a.score);
    if (topScores.length > topRankingSize) {
        topScores.pop();
    }
    localStorage.setItem('topScores', JSON.stringify(topScores));
}

function showRanking() {
    rankingContainer.innerHTML = '';
    
    topScores.forEach((item, index) => {
        if (index < 5) {
            const rankingItem = document.createElement('div');
            rankingItem.classList.add('ranking-item');
            
            const photo = document.createElement('img');
            photo.classList.add('ranking-photo');
            photo.src = item.photo || 'placeholder.png';
            
            const scoreText = document.createElement('span');
            scoreText.classList.add('ranking-score');
            scoreText.textContent = `${item.score}`;
            
            rankingItem.appendChild(photo);
            rankingItem.appendChild(scoreText);
            rankingContainer.appendChild(rankingItem);
        }
    });
    
    countdownElement.classList.remove('hidden');
    let countdown = 10;
    countdownElement.textContent = `Retornando em ${countdown}...`;
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = `Retornando em ${countdown}...`;
        if (countdown <= 0) {
            clearInterval(interval);
            endGameScreen.classList.add('hidden');
            startScreen.classList.remove('hidden');
        }
    }, 1000);
}

// Event Listeners
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

document.addEventListener('keydown', (e) => {
    if (gameScreen.classList.contains('hidden')) {
        return;
    }
    const key = e.key;
    const optionLetter = keyboardMap[key];

    if (optionLetter) {
        const button = document.getElementById(`option-${optionLetter}`);
        if (button) {
            checkAnswer(button.dataset.answer);
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (!startScreen.classList.contains('hidden') && (event.key === '5' || event.key === ' ' || event.key === 'Enter')) {
        startButton.click();
    }
});