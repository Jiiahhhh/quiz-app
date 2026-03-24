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
let timerInterval;
let timeLeft = 15;

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

  startTimer(answer);

  document.getElementById("optionsGrid").addEventListener(
    "click",
    (e) => {
      if (e.target.classList.contains("option-btn")) {
        clearInterval(timerInterval);
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
  clearInterval(timerInterval);
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

function startTimer(answer) {
  const timerEl = document.getElementById("timer");

  timeLeft = 15;
  timerEl.style.color = "#2d3748";
  timerEl.textContent = `⏱️ ${timeLeft}`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏱️ ${timeLeft}`;

    if (timeLeft <= 5) {
      timerEl.style.color = "#c53030";
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      //   const correctBtn = document.querySelector(`[data-option="${answer}"]`);
      //   if (correctBtn) correctBtn.classList.add("correct");

      document
        .querySelectorAll(".option-btn")
        .forEach((btn) => (btn.disabled = true));

      document.getElementById("btnNext").disabled = false;

      setTimeout(() => handleNext(), 1000);
    }
  }, 1000);
}

document.getElementById("btnNext").addEventListener("click", handleNext);
document.getElementById("btnRestart").addEventListener("click", startQuiz);

startQuiz();
