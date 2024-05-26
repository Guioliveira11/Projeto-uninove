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
    question: "Quel est l'orthographe correcte du verbe 'avoir' à la première personne du singulier au présent de l'indicatif ?",
    answers: [
      {
        answer: 'Avoir',
        correct: false,
      },
      {
        answer: 'Ai',
        correct: true,
      },
      {
        answer: 'A',
        correct: false,
      },
      {
        answer: 'Est',
        correct: false,
      },
    ],
  },
  {
    question: 'Comment écrit-on le mot "école" en français ?',
    answers: [
      {
        answer: 'Écolle',
        correct: false,
      },
      {
        answer: 'Écolee',
        correct: false,
      },
      {
        answer: 'Écol',
        correct: false,
      },
      {
        answer: 'École',
        correct: true,
      },
    ],
  },
  {
    question: 'Quelle est la bonne orthographe du mot signifiant "merci" en français ?',
    answers: [
      {
        answer: 'Merçi',
        correct: false,
      },
      {
        answer: 'Merci',
        correct: true,
      },
      {
        answer: 'Mersi',
        correct: false,
      },
      {
        answer: 'Mersy',
        correct: false,
      },
    ],
  },
{
    question: "Question: Comment s'écrit le mot signifiant 'soleil' en français ?",
    answers: [
      {
        answer: 'Soleille',
        correct: false,
      },
      {
        answer: 'Solleil',
        correct: false,
      },
      {
        answer: 'Solei',
        correct: false,
      },
      {
        answer: 'Soleil',
        correct: true,
      },
    ],
  },
{
    question: "Quel est l'orthographe correcte du mot signifiant 'bonne nuit' en français ?",
    answers: [
      {
        answer: 'Bonnui',
        correct: false,
      },
      {
        answer: 'Bonne nui',
        correct: false,
      },
      {
        answer: 'Bonne nuit',
        correct: true,
      },
      {
        answer: 'Bonn nuit',
        correct: false,
      },
    ],
  },
{
    question: 'Quel est le participe passé du verbe "manger" ?',
    answers: [
      {
        answer: 'Mangeant',
        correct: false,
      },
      {
        answer: 'Manger',
        correct: false,
      },
      {
        answer: 'Mange',
        correct: false,
      },
      {
        answer: 'Mangé',
        correct: true,
      },
    ],
  },
{
    question: 'Comment dit-on "demain" en anglais ?',
    answers: [
      {
        answer: 'Tomorrow',
        correct: true,
      },
      {
        answer: 'Yesterday',
        correct: false,
      },
      {
        answer: 'Today',
        correct: false,
      },
      {
        answer: 'Soon',
        correct: false,
      },
    ],
  },
{
    question: 'Quel est le féminin de "grand" en français ?',
    answers: [
      {
        answer: 'Grandeur',
        correct: false,
      },
      {
        answer: 'Grande',
        correct: true,
      },
      {
        answer: 'Grander',
        correct: false,
      },
      {
        answer: 'Grandes',
        correct: false,
      },
    ],
  },
{
    question: 'Quel est le pluriel de "chat" ?',
    answers: [
      {
        answer: 'Chats',
        correct: true,
      },
      {
        answer: 'Chatte',
        correct: false,
      },
      {
        answer: 'Chateur',
        correct: false,
      },
      {
        answer: 'Chatée',
        correct: false,
      },
    ],
  },
  {
    question: 'Comment dit-on "to read" en français ?',
    answers: [
      {
        answer: 'Lire',
        correct: true,
      },
      {
        answer: 'Écrire',
        correct: false,
      },
      {
        answer: 'Chanter',
        correct: false,
      },
      {
        answer: 'Danser',
        correct: false,
      },
    ],
  },
{
    question: 'Quel est le synonyme de "heureux" ?',
    answers: [
      {
        answer: 'Triste',
        correct: false,
      },
      {
        answer: 'Joyeux',
        correct: true,
      },
      {
        answer: 'Ennuyeux',
        correct: false,
      },
      {
        answer: 'Calme',
        correct: false,
      },
    ],
  },
{
    question: 'Quel est le pluriel de "feuille" ?',
    answers: [
      {
        answer: 'Feuilles',
        correct: true,
      },
      {
        answer: 'Feuilleux',
        correct: false,
      },
      {
        answer: 'Feuillez',
        correct: false,
      },
      {
        answer: 'Feuillé',
        correct: false,
      },
    ],
  },
{
    question: 'Quel est le contraire de "fort" ?',
    answers: [
      {
        answer: 'Grand',
        correct: false,
      },
      {
        answer: 'Faible',
        correct: true,
      },
      {
        answer: 'Rapide',
        correct: false,
      },
      {
        answer: 'Doux',
        correct: false,
      },
    ],
  },
{
    question: 'Comment dit-on "table" en anglais ?',
    answers: [
      {
        answer: 'Chair',
        correct: false,
      },
      {
        answer: 'Table',
        correct: true,
      },
      {
        answer: 'Book',
        correct: false,
      },
      {
        answer: 'Chair',
        correct: false,
      },
    ],
  },
{
    question: 'Quel est le masculin de "professeure" ?',
    answers: [
      {
        answer: 'Professeur',
        correct: true,
      },
      {
        answer: 'Professeureur',
        correct: false,
      },
      {
        answer: 'Professeurie',
        correct: false,
      },
      {
        answer: 'Professant',
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