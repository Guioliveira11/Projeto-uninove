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
    question: 'What is the capital of France?',
    answers: [
      {
        answer: 'Paris',
        correct: true,
      },
      {
        answer: 'London',
        correct: false,
      },
      {
        answer: 'Rome',
        correct: false,
      },
      {
        answer: 'Madrid',
        correct: false,
      },
    ],
  },
  {
    question: 'Which of the following is a synonym for happy?',
    answers: [
      {
        answer: 'Sad',
        correct: false,
      },
      {
        answer: 'Angry',
        correct: false,
      },
      {
        answer: 'Joyful',
        correct: true,
      },
      {
        answer: 'Tired',
        correct: false,
      },
    ],
  },
  {
    question: 'What is the past tense of eat?',
    answers: [
      {
        answer: 'Ate',
        correct: true,
      },
      {
        answer: 'Eating',
        correct: false,
      },
      {
        answer: 'Eaten',
        correct: false,
      },
      {
        answer: 'Eat',
        correct: false,
      },
    ],
  },
{
    question: 'What is the plural form of child?',
    answers: [
      {
        answer: 'Children',
        correct: true,
      },
      {
        answer: 'Childs',
        correct: false,
      },
      {
        answer: 'Childes',
        correct: false,
      },
      {
        answer: 'Childon',
        correct: false,
      },
    ],
  },
{
    question: 'Who wrote the Harry Potter series?',
    answers: [
      {
        answer: 'J.R.R Tolkien',
        correct: false,
      },
      {
        answer: 'J.K Rowling',
        correct: true,
      },
      {
        answer: 'Stephen King',
        correct: false,
      },
      {
        answer: 'George R.R Martin',
        correct: false,
      },
    ],
  },
{
    question: 'What is the comparative form of the adjective big?',
    answers: [
      {
        answer: 'Biger',
        correct: false,
      },
      {
        answer: 'Biggest',
        correct: false,
      },
      {
        answer: 'Bigest',
        correct: false,
      },
      {
        answer: 'Bigger',
        correct: true,
      },
    ],
  },
{
    question: 'Which word is a conjunction in the sentence "I like tea and coffee" ?',
    answers: [
      {
        answer: 'Like',
        correct: false,
      },
      {
        answer: 'Tea',
        correct: false,
      },
      {
        answer: 'Coffee',
        correct: false,
      },
      {
        answer: 'And',
        correct: true,
      },
    ],
  },
{
    question: 'What is the currency of Japan?',
    answers: [
      {
        answer: 'Dollar',
        correct: false,
      },
      {
        answer: 'Euro',
        correct: false,
      },
      {
        answer: 'Yen',
        correct: true,
      },
      {
        answer: 'Pound',
        correct: false,
      },
    ],
  },
{
    question: 'What is the  word superlative form of the adjective tall?',
    answers: [
      {
        answer: 'Talliest',
        correct: false,
      },
      {
        answer: 'Tallest',
        correct: true,
      },
      {
        answer: 'Tallier',
        correct: false,
      },
      {
        answer: 'More tall',
        correct: false,
      },
    ],
  },
  {
    question: 'Which planet is known as the Red Planet ?',
    answers: [
      {
        answer: 'Jupiter',
        correct: false,
      },
      {
        answer: 'Mars',
        correct: true,
      },
      {
        answer: 'Venus',
        correct: false,
      },
      {
        answer: 'Saturn',
        correct: false,
      },
    ],
  },
{
    question: 'What is the capital of Japan?',
    answers: [
      {
        answer: 'Tokyo',
        correct: true,
      },
      {
        answer: 'Kyoto',
        correct: false,
      },
      {
        answer: 'Osaka',
        correct: false,
      },
      {
        answer: 'Hiroshima',
        correct: false,
      },
    ],
  },
{
    question: 'Which of the following is a fruit?',
    answers: [
      {
        answer: 'Carrot',
        correct: false,
      },
      {
        answer: 'Potato',
        correct: false,
      },
      {
        answer: 'Banana',
        correct: true,
      },
      {
        answer: 'Broccoli',
        correct: false,
      },
    ],
  },
{
    question: 'What is the opposite of old?',
    answers: [
      {
        answer: 'New',
        correct: true,
      },
      {
        answer: 'Young',
        correct: false,
      },
      {
        answer: 'Newest',
        correct: false,
      },
      {
        answer: 'Modern',
        correct: false,
      },
    ],
  },
{
    question: 'How many continents are there?',
    answers: [
      {
        answer: 'Four',
        correct: false,
      },
      {
        answer: 'Five',
        correct: false,
      },
      {
        answer: 'Six',
        correct: false,
      },
      {
        answer: 'Seven',
        correct: true,
      },
    ],
  },
{
    question: 'Who is known as the Father of Computers?',
    answers: [
      {
        answer: 'Steve Jobs',
        correct: false,
      },
      {
        answer: 'Bill Gates',
        correct: false,
      },
      {
        answer: 'Alan Turing',
        correct: false,
      },
      {
        answer: 'Charles Babbage',
        correct: true,
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