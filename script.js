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
        options: ["Festa da Penha", "Festa de São Pedro", "Festa de Iemanjá", "Festa Nacional de São José de Anchieta"],
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
        options: ["Guarapari", "Linhares", "Vitória", "São Mateus"],
        answer: "Guarapari"
    },
    {
        question: "Em qual região do Espírito Santo está localizada Ecoporanga?",
        options: ["Região Metropolitana", "Região Noroeste", "Região Sul", "Região Serrana"],
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
        options: ["Guitarra", "Violão", "Sintetizadores", "Casaca"],
        answer: "Casaca"
    },
    {
        question: "Qual é o município com maior produção de leite no Espírito Santo?",
        options: ["Barra de São Francisco", "Alegre", "Colatina", "Ecoporanga"],
        answer: "Ecoporanga"
    },
    {
        question: "Qual festa popular reúne o Congo e a devoção a São Benedito em várias cidades capixabas?",
        options: ["Festa de São Benedito", "Festa do Divino Espírito Santo", "Folia de Reis", "Festa de Nossa Senhora da Penha"],
        answer: "Festa de São Benedito"
    },
    {
        question: "Em que município está localizada a Lagoa Juparanã, uma das maiores lagoas do Brasil?",
        options: ["Linhares", "Aracruz", "São Mateus", "Marataízes"],
        answer: "Linhares"
    },
    {
        question: "Qual cantor famoso nasceu em Cachoeiro de Itapemirim?",
        options: ["Erasmo Carlos", "Fagner", "Supla", "Roberto Carlos"],
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
        options: ["Cidade Saúde", "Cidade das Dunas", "Capital da Polenta", "Princesa do Norte"],
        answer: "Princesa do Norte"
    }
];

// ----------------------------------------------------------------------
// Variáveis e Seletores do DOM
// ----------------------------------------------------------------------

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
const backgroundElement = document.getElementById('background-image');
const preloader = document.getElementById('preloader');
const moldura = document.getElementById('moldura');
const conteudo = document.getElementById('conteudo'); 
const photoCountdownElement = document.getElementById('photo-countdown'); 

// NOVO: Seletores e Variáveis para Vidas e Glitch
const glitchOverlay = document.getElementById('glitch-overlay');
const lifeIcons = [
    document.getElementById('life-1'),
    document.getElementById('life-2'),
    document.getElementById('life-3')
];
let lives = 3; // Variável de controle das vidas
// FIM NOVO

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let topScores = JSON.parse(localStorage.getItem('topScores')) || [];
const topRankingSize = 5;

// ATENÇÃO: SUBSTITUA ESTA LISTA COM OS NOMES REAIS DOS SEUS ARQUIVOS JPG!
const bgImages = [
    'background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg', 
    'background6.jpg', 'background7.jpg', 'background8.jpg', 'background9.jpg', 'background10.jpg', 
    'background11.jpg', 'background12.jpg', 'background13.jpg', 'background14.jpg', 'background15.jpg', 
    'background16.jpg', 'background17.jpg', 'background18.jpg', 'background19.jpg', 'background20.jpg', 
    'background21.jpg', 'background22.jpg', 'background23.jpg', 'background24.jpg', 'background25.jpg', 
    'background26.jpg', 'background27.jpg', 'background28.jpg', 'background29.jpg', 'background30.jpg', 
    'background31.jpg', 'background32.jpg', 'background33.jpg', 'background34.jpg', 'background35.jpg', 
    'background36.jpg', 'background37.jpg', 'background38.jpg', 'background39.jpg', 'background40.jpg', 
    'background41.jpg', 'background42.jpg', 'background43.jpg', 'background44.jpg', 'background45.jpg', 
    'background46.jpg', 'background47.jpg', 'background48.jpg', 'background49.jpg', 'background50.jpg', 
    'background51.jpg', 'background52.jpg'
];

// Configuração dos Sons
const audioFundo = new Audio('audio/trilha.ogg');
audioFundo.loop = true;
const audioAcerto = new Audio('audio/acerto.ogg');
const audioErro = new Audio('audio/erro.ogg');
const audioVitoria = new Audio('audio/campeao.ogg');
// NOVO: Áudio para o início da contagem da foto
const audioCaptura = new Audio('audio/captura.ogg'); 

const keyboardMap = {
    '2': 'd',
    '4': 'a',
    '6': 'c',
    '8': 'b'
};

// ----------------------------------------------------------------------
// FUNÇÕES DE PRELOAD, TELA CHEIA E RESTAURAÇÃO
// ----------------------------------------------------------------------

/**
 * Tenta colocar o navegador em modo tela cheia.
 */
function enterFullscreen() {
    const element = document.documentElement; // Pega o elemento <html>
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari e Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

/**
 * Verifica se a página está atualmente em tela cheia.
 */
function isCurrentlyFullscreen() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}

function hidePreloader() {
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
        conteudo.style.display = 'block';
    }, 600); 
}

function loadInitialBackground() {
    if (bgImages.length === 0) {
        hidePreloader(); 
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    const selectedImage = bgImages[randomIndex];
    const imageUrlPath = `img/background/${selectedImage}`;

    const img = new Image();

    img.onload = () => {
        backgroundElement.style.backgroundImage = `url('${imageUrlPath}')`;
        hidePreloader();
    };

    img.onerror = () => {
        console.error("Erro ao carregar a imagem de fundo: " + imageUrlPath);
        hidePreloader();
    };

    img.src = imageUrlPath;
}

/**
 * Tenta restaurar a tela cheia após um reload.
 */
function restoreFullscreen() {
    if (localStorage.getItem('fullscreen_on_reload') === 'true') {
        enterFullscreen();
        localStorage.removeItem('fullscreen_on_reload');
    }
}

// ----------------------------------------------------------------------
// FLUXO DE INICIALIZAÇÃO E JOGO
// ----------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', loadInitialBackground);
document.addEventListener('DOMContentLoaded', restoreFullscreen);


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    enterFullscreen(); 
    
    audioFundo.play().catch(e => console.log("Música de fundo bloqueada. O jogo continuará sem som de fundo."));
    
    backgroundElement.classList.add('blurred');
    
    startScreen.classList.add('hidden');
    endGameScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    shuffledQuestions = [...quizData];
    shuffleArray(shuffledQuestions);
    currentQuestionIndex = 0;
    score = 0;
    currentScoreElement.textContent = score;

    // NOVO: Inicializa as vidas
    lives = 3;
    updateLifeDisplay();

    displayQuestion();
}

/**
 * NOVO: Atualiza a exibição dos corações (vidas) na tela.
 */
function updateLifeDisplay() {
    // Ordem: Vida 1 (azul), Vida 2 (branca), Vida 3 (rosa)
    if (lifeIcons[0]) lifeIcons[0].style.opacity = lives >= 1 ? 1 : 0.2;
    if (lifeIcons[1]) lifeIcons[1].style.opacity = lives >= 2 ? 1 : 0.2;
    if (lifeIcons[2]) lifeIcons[2].style.opacity = lives >= 3 ? 1 : 0.2;
}

/**
 * NOVO: Aplica e remove rapidamente o efeito glitch na tela e toca um som de erro.
 */
function triggerGlitchEffect() {
    if (!glitchOverlay) return;
    
    // 1. Ativa o efeito e o som
    glitchOverlay.classList.remove('hidden');
    glitchOverlay.classList.add('glitch-active');
    
    if (typeof audioErro !== 'undefined' && audioErro) { 
        audioErro.currentTime = 0; 
        audioErro.play().catch(e => console.log("Som de erro não pôde ser reproduzido."));
    }
    
    // 2. Remove o efeito após a duração da animação (0.2s)
    setTimeout(() => {
        glitchOverlay.classList.remove('glitch-active');
        glitchOverlay.classList.add('hidden');
    }, 200); 
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
        const shortcutKey = Object.keys(keyboardMap).find(key => keyboardMap[key] === button.id.slice(-1));
        button.innerHTML = `<span>${shortcutKey}</span>${option}`;
        button.dataset.answer = option;
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
        // NOVO: Lógica de Vidas
        triggerGlitchEffect(); 
        lives--;              
        updateLifeDisplay();  

        if (lives <= 0) {
            endGame(true); // Perdeu todas as vidas
        } 
        // Se lives > 0, o jogador permanece na questão atual (currentQuestionIndex não é incrementado).
    }
}

// ----------------------------------------------------------------------
// END GAME E LÓGICA DE WEBCAM (AJUSTADA)
// ----------------------------------------------------------------------

async function endGame(lost = false) {
    // Pausa a música de fundo
    audioFundo.pause();
    audioFundo.currentTime = 0;

    gameScreen.classList.add('hidden');
    endGameScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;
    restartButton.classList.add('hidden');

    if (lost) {
        // MENSAGEM ATUALIZADA PARA PERDA DE VIDAS
        endGameMessageElement.textContent = `Vidas esgotadas!`;
    } else {
        endGameMessageElement.textContent = 'Parabéns, você completou o quiz! 💥';
        audioVitoria.play();
    }

    // Apenas verifica se o jogador entra no ranking
    const isTopPlayer = score > 0 && (topScores.length < topRankingSize || score > (topScores.length > 0 ? topScores[topScores.length - 1].score : -1));

    if (isTopPlayer) {
        rankingMessageElement.textContent = 'Você entrou para o ranking! Pose pra foto!';
        rankingMessageElement.style.fontWeight = 'bold';
        
        // TENTA ACESSAR A CÂMERA E INICIA O CONTAGEM
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcamElement.srcObject = stream;
            // A webcam AGORA SÓ É MOSTRADA se o acesso for bem-sucedido
            webcamElement.classList.remove('hidden'); 

            webcamElement.onloadedmetadata = () => {
                // INICIA O CONTAGEM REGRESSIVA VISUAL APÓS A CÂMERA CARREGAR
                startPhotoCountdown(stream);
            };
        } catch (err) {
            // Se der erro, não mostra webcam e usa a foto placeholder
            console.error("Erro ao acessar a webcam: ", err);
            addToRanking('placeholder.png');
            rankingMessageElement.textContent = 'Erro na câmera. Seu ranking:';
            showRanking();
        }
    } else {
        // SE NÃO ENTROU NO RANKING: NADA DE WEBCAM/CANVAS
        rankingMessageElement.textContent = 'Você não entrou no ranking. Tente novamente! 😔';
        moldura.style.display = 'none';
        showRanking();
    }
}


/**
 * Gerencia o contador visual (5, 4, 3, 2, 1) e o flash.
 */
function startPhotoCountdown(stream) {
    // NOVO: Reproduz o áudio de captura ao iniciar o contador
    audioCaptura.play().catch(e => console.log("Erro ao reproduzir áudio de captura."));
    
    let photoTimer = 5;
    photoCountdownElement.classList.remove('hidden');
    photoCountdownElement.textContent = photoTimer;

    const interval = setInterval(() => {
        photoTimer--;

        if (photoTimer > 0) {
            photoCountdownElement.textContent = photoTimer;
        } else if (photoTimer === 0) {
            photoCountdownElement.textContent = ''; // Limpa o número
            clearInterval(interval);

            // PISCAR (FLASH)
            flashScreen();

            // TIRA A FOTO APÓS O FLASH INICIAR (0.3s)
            setTimeout(() => {
                takePhoto(stream);
            }, 300); 

        } 
    }, 1000);
}


/**
 * Cria e aplica a animação de flash na tela.
 */
function flashScreen() {
    const flashDiv = document.createElement('div');
    flashDiv.classList.add('flash-screen');
    document.body.appendChild(flashDiv);

    // Remove o flash da DOM após o término da animação
    setTimeout(() => {
        flashDiv.remove();
        // Esconde o elemento do contador de foto após o flash
        photoCountdownElement.classList.add('hidden');
    }, 300); 
}


/**
 * Lógica de tirar a foto e finalizar o ranking.
 */
function takePhoto(stream) {
    // 1. Tira a foto na resolução nativa
    canvasElement.width = webcamElement.videoWidth;
    canvasElement.height = webcamElement.videoHeight;
    canvasElement.getContext('2d').drawImage(webcamElement, 0, 0, canvasElement.width, canvasElement.height);

    const photoDataUrl = canvasElement.toDataURL('image/jpeg');
    
    // 2. DESLIGA A CÂMERA
    stream.getTracks().forEach(track => track.stop());

    // 3. ESCONDE A WEBCAM/CANVAS (AJUSTE SOLICITADO)
    webcamElement.classList.add('hidden');
    moldura.style.display = 'none';
    const el = document.getElementById('minhaDiv');
    // 4. Finaliza
    addToRanking(photoDataUrl);
    rankingMessageElement.textContent = 'Foto capturada! Seu ranking:';
    showRanking();
}

// ... (addToRanking permanece igual)
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
    let countdown = 6; 
    countdownElement.textContent = `Reiniciando em ${countdown}...`;
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = `Reiniciando em ${countdown}...`;
        if (countdown <= 0) {
            clearInterval(interval);
            
            // ANTES DO RELOAD: Salva o estado de tela cheia se estiver ativo
            if (isCurrentlyFullscreen()) {
                 localStorage.setItem('fullscreen_on_reload', 'true');
            } else {
                 localStorage.removeItem('fullscreen_on_reload');
            }
            
            // Recarrega a página inteira, simulando o "F5".
            window.location.reload(); 
            
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