// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

const questions = [
  {
    question: '¿Cuál es el río más largo del mundo?',
    answers: [
      {
        answer: 'Nilo',
        correct: false,
      },
      {
        answer: 'Amazonas',
        correct: true,
      },
      {
        answer: 'Mississippi',
        correct: false,
      },
      {
        answer: 'Yangtsé',
        correct: false,
      },
    ],
  },
  {
    question: '¿Quién pintó la Mona Lisa?',
    answers: [
      {
        answer: 'Pablo Picasso',
        correct: false,
      },
      {
        answer: 'Leonardo da Vinci',
        correct: true,
      },
      {
        answer: 'Vincent van Gogh',
        correct: false,
      },
      {
        answer: 'Rembrandt',
        correct: false,
      },
    ],
  },
  {
    question: '¿Cuál es el océano más grande del mundo?',
    answers: [
      {
        answer: 'Atlántico',
        correct: false,
      },
      {
        answer: 'Índico',
        correct: false,
      },
      {
        answer: 'Pacífico',
        correct: true,
      },
      {
        answer: 'Antártico',
        correct: false,
      },
    ],
  },
  {
    question: '¿Cuál es la capital de Argentina?',
    answers: [
      {
        answer: 'Santiago',
        correct: false,
      },
      {
        answer: 'Buenos Aires',
        correct: true,
      },
      {
        answer: 'Bogotá',
        correct: false,
      },
      {
        answer: 'Río de Janeiro',
        correct: false,
      },
    ],
  },
  {
    question: '¿Quién escribió "Cien años de soledad"?',
    answers: [
      {
        answer: 'Gabriel García Márquez',
        correct: true,
      },
      {
        answer: 'Mario Vargas Llosa',
        correct: false,
      },
      {
        answer: 'Isabel Allende',
        correct: false,
      },
      {
        answer: 'Julio Cortázar',
        correct: false,
      },
    ],
  },
  {
    question: '¿Cuál es el elemento más abundante en la Tierra?',
    answers: [
      {
        answer: 'Hierro',
        correct: false,
      },
      {
        answer: 'Oxígeno',
        correct: true,
      },
      {
        answer: 'Hidrógeno',
        correct: false,
      },
      {
        answer: 'Carbono',
        correct: false,
      },
    ],
  },
  {
    question: '¿Cuál es la moneda de México?',
    answers: [
      {
        answer: 'Peso',
        correct: true,
      },
      {
        answer: 'Euro',
        correct: false,
      },
      {
        answer: 'Dólar',
        correct: false,
      },
      {
        answer: 'Real',
        correct: false,
      },
    ],
  },
  {
    question: '¿Quién descubrió América?',
    answers: [
      {
        answer: 'Cristóbal Colón',
        correct: true,
      },
      {
        answer: 'Vasco da Gama',
        correct: false,
      },
      {
        answer: 'Fernando de Magallanes',
        correct: false,
      },
      {
        answer: 'Francisco Pizarro',
        correct: false,
      },
    ],
  },
  {
    question: '¿Cuál es la montaña más alta del mundo?',
    answers: [
      {
        answer: 'Mont Blanc',
        correct: false,
      },
      {
        answer: 'Everest',
        correct: true,
      },
      {
        answer: 'Aconcagua',
        correct: false,
      },
      {
        answer: 'K2',
        correct: false,
      },
    ],
  },
  {
    question: '¿Cuál es el país más poblado del mundo?',
    answers: [
      {
        answer: 'China',
        correct: true,
      },
      {
        answer: 'India',
        correct: false,
      },
      {
        answer: 'Estados Unidos',
        correct: false,
      },
      {
        answer: 'Brasil',
        correct: false,
      },
    ],
  },
  {
    question: '¿Quién fue el primer presidente de los Estados Unidos?',
    answers: [
      {
        answer: 'George Washington',
        correct: true,
      },
      {
        answer: 'Thomas Jefferson',
        correct: false,
      },
      {
        answer: 'Abraham Lincoln',
        correct: false,
      },
      {
        answer: 'John Adams',
        correct: false,
      },
    ],
  },
  {
    question: '¿Qué artista es conocido por su obra "Guernica"?',
    answers: [
      {
        answer: 'Pablo Picasso',
        correct: true,
      },
      {
        answer: 'Salvador Dalí',
        correct: false,
      },
      {
        answer: 'Diego Rivera',
        correct: false,
      },
      {
        answer: 'Frida Kahlo',
        correct: false,
      },
    ],
  },
  {
    question: '¿Cuál es el hueso más largo del cuerpo humano?',
    answers: [
      {
        answer: 'Fémur',
        correct: true,
      },
      {
        answer: 'Tibia',
        correct: false,
      },
      {
        answer: 'Húmero',
        correct: false,
      },
      {
        answer: 'Radio',
        correct: false,
      },
    ],
  },
  {
    question: '¿Qué animal es conocido como el "Rey de la Selva"?',
    answers: [
      {
        answer: 'Elefante',
        correct: false,
      },
      {
        answer: 'Tigre',
        correct: false,
      },
      {
        answer: 'León',
        correct: true,
      },
      {
        answer: 'Gorila',
        correct: false,
      },
    ],
  },
  {
    question: '¿Quién escribió "Don Quijote de la Mancha"?',
    answers: [
      {
        answer: 'Miguel de Cervantes',
        correct: true,
      },
      {
        answer: 'Federico García Lorca',
        correct: false,
      },
      {
        answer: 'Gabriel García Márquez',
        correct: false,
      },
      {
        answer: 'Pablo Neruda',
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