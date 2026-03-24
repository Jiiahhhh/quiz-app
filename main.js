import { jsQuestions, htmlQuestions, cssQuestions } from "./data.js";
import {
  renderQuestion,
  showFeedback,
  showResult,
  showHighScore,
  resetQuizScreen,
} from "./ui.js";

const questionMap = {
  JavaScript: jsQuestions,
  HTML: htmlQuestions,
  CSS: cssQuestions,
};

let currentIndex = 0;
let score = 0;
let shuffledQuestions;
let timerInterval;
let timeLeft = 15;
let selectedCategory = null;
let isAnswered = false;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startQuiz() {
  document.getElementById("categoryScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");

  const selectedQuestions = questionMap[selectedCategory];
  if (!selectedQuestions || selectedQuestions.length === 0) {
    alert("Kategori belum ada soal!");
    return;
  }
  shuffledQuestions = shuffleArray(selectedQuestions);
  currentIndex = 0;
  score = 0;
  showHighScore(getHighScore());
  resetQuizScreen();
  loadQuestion();
}

function loadQuestion() {
  const { answer } = shuffledQuestions[currentIndex];
  isAnswered = false;
  renderQuestion(
    shuffledQuestions[currentIndex],
    currentIndex + 1,
    shuffledQuestions.length,
  );

  startTimer(answer);

  document.getElementById("optionsGrid").addEventListener(
    "click",
    (e) => {
      if (e.target.classList.contains("option-btn") && !isAnswered) {
        isAnswered = true;
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
  const key = `quiz-highscore-${selectedCategory}`;
  const current = localStorage.getItem(key);
  if (!current || percent > Number(current)) {
    localStorage.setItem(key, percent);
  }
}

function getHighScore() {
  const key = `quiz-highscore-${selectedCategory}`;
  return localStorage.getItem(key);
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

    if (timeLeft <= 0 && !isAnswered) {
      isAnswered = true;
      clearInterval(timerInterval);

      document
        .querySelectorAll(".option-btn")
        .forEach((btn) => (btn.disabled = true));

      setTimeout(() => handleNext(), 1000);
    }
  }, 1000);
}

function renderCategories() {
  const categoryList = document.getElementById("categoryList");
  const categories = ["JavaScript", "HTML", "CSS"];

  categoryList.innerHTML = categories
    .map(
      (cat) =>
        `<button class="option-btn category-btn" data-category="${cat}">${cat}</button>`,
    )
    .join("");

  categoryList.onclick = (e) => {
    if (e.target.classList.contains("category-btn")) {
      selectedCategory = e.target.dataset.category;
      startQuiz();
    }
  };
}

function backToCategory() {
  selectedCategory = null;
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("categoryScreen").classList.remove("hidden");
  renderCategories();
}

document.getElementById("btnNext").addEventListener("click", handleNext);
document.getElementById("btnRestart").addEventListener("click", backToCategory);

document.getElementById("quizScreen").classList.add("hidden");
renderCategories();
