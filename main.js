import { questions } from "./data.js";
import {
  renderQuestion,
  showFeedback,
  showResult,
  showHighScore,
  resetQuizScreen,
} from "./ui.js";

let currentIndex = 0;
let score = 0;
let shuffledQuestions;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startQuiz() {
  shuffledQuestions = shuffleArray(questions);
  currentIndex = 0;
  score = 0;
  resetQuizScreen();
  loadQuestion();
}

function loadQuestion() {
  const { answer } = shuffledQuestions[currentIndex];
  renderQuestion(
    shuffledQuestions[currentIndex],
    currentIndex + 1,
    shuffledQuestions.length,
  );
  document.getElementById("optionsGrid").addEventListener(
    "click",
    (e) => {
      if (e.target.classList.contains("option-btn")) {
        showFeedback(e.target, answer);
        if (e.target.dataset.option === answer) {
          score++;
        }
      }
    },
    { once: true },
  );
}

function handleNext() {
  currentIndex++;
  if (currentIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    const percent = Math.round((score / shuffledQuestions.length) * 100);
    saveHighScore(percent);
    showHighScore(getHighScore());
    showResult(score, shuffledQuestions.length);
  }
}

function saveHighScore(percent) {
  const current = localStorage.getItem("quiz-highscore");
  if (!current || percent > Number(current)) {
    localStorage.setItem("quiz-highscore", percent);
  }
}

function getHighScore() {
  return localStorage.getItem("quiz-highscore");
}

document.getElementById("btnNext").addEventListener("click", handleNext);
document.getElementById("btnRestart").addEventListener("click", startQuiz);

startQuiz();
