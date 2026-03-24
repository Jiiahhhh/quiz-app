const questionText = document.getElementById("questionText");
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const optionsGrid = document.getElementById("optionsGrid");
const btnNext = document.getElementById("btnNext");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
const resultEmoji = document.getElementById("resultEmoji");
const resultMessage = document.getElementById("resultMessage");
const highScoreLabel = document.getElementById("highScore");

export function renderQuestion(question, questionNumber, total) {
  let { text, options } = question;
  questionText.textContent = text;
  questionCounter.textContent = `Soal ${questionNumber} dari ${total}`;
  progressFill.style.width = (questionNumber / total) * 100 + "%";

  optionsGrid.innerHTML = options
    .map(
      (option) => `
        <button class="option-btn" data-option="${option}">${option}</button>
      `,
    )
    .join("");

  btnNext.disabled = true;
}

export function showFeedback(selectedBtn, correctAnswer) {
  const btnOption = document.querySelectorAll(".option-btn");
  const correctBtn = document.querySelector(`[data-option="${correctAnswer}"]`);
  btnOption.forEach((btn) => (btn.disabled = true));

  if (selectedBtn.dataset.option === correctAnswer) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("wrong");
    correctBtn.classList.add("correct");
  }
  btnNext.disabled = false;
}

export function showResult(score, total) {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  let percentage = Math.round((score / total) * 100);
  resultScore.textContent = `${score} / ${total}`;
  resultPercent.textContent = `${percentage}%`;
  if (percentage >= 80) {
    resultEmoji.textContent = "🎉";
    resultMessage.textContent = "Luar biasa!";
  } else if (percentage >= 60) {
    resultEmoji.textContent = "👍";
    resultMessage.textContent = "Bagus!";
  } else {
    resultEmoji.textContent = "📚";
    resultMessage.textContent = "Terus Belajar!";
  }
}

export function showHighScore(highScore) {
  if (highScore) {
    highScoreLabel.textContent = `High Score: ${highScore}%`;
  } else {
    highScoreLabel.textContent = "-";
  }
}

export function resetQuizScreen() {
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
}
