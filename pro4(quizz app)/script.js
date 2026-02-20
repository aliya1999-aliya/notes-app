const quiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is used for web scripting?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  questionEl.innerText = quiz[currentQuestion].question;
  optionBtns.forEach((btn, index) => {
    btn.innerText = quiz[currentQuestion].options[index];
    btn.disabled = false;
    btn.style.background = "#444";
  });
  nextBtn.style.display = "none";
}

function selectAnswer(index) {
  if (index === quiz[currentQuestion].answer) {
    score++;
    optionBtns[index].style.background = "green";
  } else {
    optionBtns[index].style.background = "red";
  }

  optionBtns.forEach(btn => btn.disabled = true);
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    questionEl.innerText = "Quiz Completed!";
    document.getElementById("options").style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score}/${quiz.length}`;
  }
}

loadQuestion();
