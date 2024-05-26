// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: "Qual è il nome dell'isola vulcanica più grande d'Italia?",
    answers: [
      {
        answer: 'Sicilia',
        correct: true,
      },
      {
        answer: 'Sardegna',
        correct: false,
      },
      {
        answer: 'Capri',
        correct: false,
      },
      {
        answer: 'Ischia',
        correct: false,
      },
    ],
  },
  {
    question: "Chi è l'autore del famoso romanzo 'I Promessi Sposi' ?",
    answers: [
      {
        answer: 'Alessandro Manzoni',
        correct: true,
      },
      {
        answer: 'Italo Calvino',
        correct: false,
      },
      {
        answer: 'Luigi Pirandello',
        correct: false,
      },
      {
        answer: 'Umberto Eco',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual è il principale simbolo della città di Venezia?',
    answers: [
      {
        answer: 'Torre di Pisa',
        correct: false,
      },
      {
        answer: 'Canal Grande',
        correct: true,
      },
      {
        answer: 'Ponte Vecchio',
        correct: false,
      },
      {
        answer: 'Colosseo',
        correct: false,
      },
    ],
  },
{
    question: 'Come si chiama il grande vulcano che domina la città di Napoli?',
    answers: [
      {
        answer: 'Vesuvio',
        correct: true,
      },
      {
        answer: 'Etna',
        correct: false,
      },
      {
        answer: 'Stromboli',
        correct: false,
      },
      {
        answer: 'Vulcano',
        correct: false,
      },
    ],
  },
{
    question: 'Chi è il famoso tenore italiano conosciuto come "Il Maestro"?',
    answers: [
      {
        answer: 'Andrea Bocelli',
        correct: false,
      },
      {
        answer: 'Enrico Caruso',
        correct: false,
      },
      {
        answer: 'Luciano Pavarotti',
        correct: true,
      },
      {
        answer: 'Placido Domingo',
        correct: false,
      },
    ],
  },
{
    question: "Qual è il nome della moneta utilizzata in Italia prima dell'euro?",
    answers: [
      {
        answer: 'Lira italiana',
        correct: true,
      },
      {
        answer: 'Franco italiano',
        correct: false,
      },
      {
        answer: 'Euro',
        correct: false,
      },
      {
        answer: 'Marco italiano',
        correct: false,
      },
    ],
  },
{
    question: 'In quale regione italiana si trova la città di Napoli?',
    answers: [
      {
        answer: 'Campania',
        correct: true,
      },
      {
        answer: 'Toscana',
        correct: false,
      },
      {
        answer: 'Veneto',
        correct: false,
      },
      {
        answer: 'Lombardia',
        correct: false,
      },
    ],
  },
{
    question: "Chi è il patrono d'Italia?",
    answers: [
      {
        answer: "San Francesco d'Assisi",
        correct: true,
      },
      {
        answer: 'San Pietro',
        correct: false,
      },
      {
        answer: 'San Giovanni Battista',
        correct: false,
      },
      {
        answer: 'San Giorgio',
        correct: false,
      },
    ],
  },
{
    question: "Qual è il simbolo dell'antica città di Roma?",
    answers: [
      {
        answer: 'Colosseo',
        correct: true,
      },
      {
        answer: 'Torre di Pisa',
        correct: false,
      },
      {
        answer: 'Basilica di San Marco',
        correct: false,
      },
      {
        answer: 'Ponte Vecchio',
        correct: false,
      },
    ],
  },
  {
    question: 'Come si dice "buongiorno" in inglese?',
    answers: [
      {
        answer: 'Goodbye',
        correct: false,
      },
      {
        answer: 'Hello',
        correct: false,
      },
      {
        answer: 'Good evening',
        correct: false,
      },
      {
        answer: 'Good morning',
        correct: true,
      },
    ],
  },
{
    question: 'Qual è il nome del fiume che attraversa la città di Firenze?',
    answers: [
      {
        answer: 'Arno',
        correct: true,
      },
      {
        answer: 'Po',
        correct: false,
      },
      {
        answer: 'Tevere',
        correct: false,
      },
      {
        answer: 'Tevere',
        correct: false,
      },
    ],
  },
{
    question: "Chi è la famosa regina d'Egitto amante di Giulio Cesare e Marco Antonio?",
    answers: [
      {
        answer: 'Cleopatra',
        correct: true,
      },
      {
        answer: 'Nefertiti',
        correct: false,
      },
      {
        answer: 'Elisabetta I',
        correct: false,
      },
      {
        answer: "Caterina de' Medici",
        correct: false,
      },
    ],
  },
{
    question: 'In quale città italiana si trova la Cappella Sistina?',
    answers: [
      {
        answer: 'Firenze',
        correct: false,
      },
      {
        answer: 'Venezia',
        correct: false,
      },
      {
        answer: 'Milano',
        correct: false,
      },
      {
        answer: 'Roma',
        correct: true,
      },
    ],
  },
{
    question: 'Qual è il nome della celebre fontana barocca di Roma?',
    answers: [
      {
        answer: 'Fontana di Trevi',
        correct: true,
      },
      {
        answer: 'Fontana dei Quattro Fiumi',
        correct: false,
      },
      {
        answer: 'Fontana del Tritone',
        correct: false,
      },
      {
        answer: 'Fontana delle Naiadi',
        correct: false,
      },
    ],
  },
{
    question: "Chi è l'autore del libro 'Il Nome della Rosa'?",
    answers: [
      {
        answer: 'Umberto Eco',
        correct: true,
      },
      {
        answer: 'Italo Calvino',
        correct: false,
      },
      {
        answer: 'Luigi Pirandello',
        correct: false,
      },
      {
        answer: 'Giuseppe Tomasi di Lampedusa',
        correct: false,
      },
    ],
  },
  ];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();