/* =========================
   授業ページ専用JS
========================= */

function initializeLessonAnswerToggles() {
  const toggleButtons = document.querySelectorAll(".lesson-answer-toggle");

  toggleButtons.forEach(function (button) {
    const targetId = button.dataset.target;
    const answerBox = document.getElementById(targetId);

    if (!answerBox) {
      return;
    }

    function updateButtonText() {
      if (answerBox.classList.contains("is-hidden")) {
        button.textContent = "解答を表示";
        button.setAttribute("aria-expanded", "false");
      } else {
        button.textContent = "解答を隠す";
        button.setAttribute("aria-expanded", "true");
      }
    }

    button.setAttribute("aria-controls", targetId);
    updateButtonText();

    button.addEventListener("click", function () {
      answerBox.classList.toggle("is-hidden");
      updateButtonText();

      if (window.MathJax) {
        MathJax.typesetPromise();
      }
    });
  });
}

function initializeLessonPage() {
  initializeLessonAnswerToggles();

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

initializeLessonPage();
