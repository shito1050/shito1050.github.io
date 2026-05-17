/* =========================
   解答開閉
========================= */

function setAnswerOpenButtonText(isOpen) {
  const answerOpenButton = document.getElementById("answerOpenButton");

  if (!answerOpenButton) {
    return;
  }

  answerOpenButton.textContent = isOpen ? "解答を閉じる" : "解答をみる";
}

function openAnswer() {
  const answerBox = document.getElementById("answerBox");
  const answerOpenButton = document.getElementById("answerOpenButton");

  if (!answerBox || !answerOpenButton) {
    return;
  }

  answerBox.classList.remove("is-hidden");
  answerOpenButton.classList.remove("is-hidden");
  setAnswerOpenButtonText(true);

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
  setAnswerOpenButtonText(false);
}

function initializeAnswerToggle() {
  const answerBox = document.getElementById("answerBox");
  const answerCloseButton = document.getElementById("answerCloseButton");
  const answerOpenButton = document.getElementById("answerOpenButton");

  if (!answerBox || !answerCloseButton || !answerOpenButton) {
    return;
  }

  answerOpenButton.addEventListener("click", function () {
    if (answerBox.classList.contains("is-hidden")) {
      openAnswer();
    } else {
      closeAnswer();
    }
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
