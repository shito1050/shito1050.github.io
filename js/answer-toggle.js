/* =========================
   解答開閉
========================= */

function openAnswer() {
  const answerBox = document.getElementById("answerBox");
  const answerOpenButton = document.getElementById("answerOpenButton");

  if (!answerBox || !answerOpenButton) {
    return;
  }

  answerBox.classList.remove("is-hidden");
  answerOpenButton.classList.add("is-hidden");

  typesetMathInElement(answerBox);
}

function closeAnswer() {
  const answerBox = document.getElementById("answerBox");
  const answerOpenButton = document.getElementById("answerOpenButton");

  if (!answerBox || !answerOpenButton) {
    return;
  }

  answerBox.classList.add("is-hidden");
  answerOpenButton.classList.remove("is-hidden");
}

function initializeAnswerToggle() {
  const answerBox = document.getElementById("answerBox");
  const answerCloseButton = document.getElementById("answerCloseButton");
  const answerOpenButton = document.getElementById("answerOpenButton");

  if (!answerBox || !answerCloseButton || !answerOpenButton) {
    return;
  }

  answerOpenButton.addEventListener("click", function () {
    openAnswer();
  });

  answerCloseButton.addEventListener("click", function () {
    closeAnswer();
  });

  if (shouldOpenAnswerFromUrl()) {
    openAnswer();
  } else {
    closeAnswer();
  }
}

initializeAnswerToggle();
