/* =========================
   入場問題
========================= */

const entranceProblems = Array.isArray(window.entranceProblems) ? window.entranceProblems : [];

const entranceActivityStorageKey = "lastEntranceActivityAt";
const entranceIntervalMilliseconds = 60 * 60 * 1000;

let lastEntranceActivitySaveTime = 0;

function getEntranceProblem() {
  const filteredProblems = filterProblemsByLearnedRange(entranceProblems);

  if (filteredProblems.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * filteredProblems.length);
  return filteredProblems[randomIndex];
}

function getLastEntranceActivityTime() {
  const savedValue = localStorage.getItem(entranceActivityStorageKey);
  const savedTime = Number(savedValue);

  if (!savedValue || Number.isNaN(savedTime)) {
    return 0;
  }

  return savedTime;
}

function saveEntranceActivityTime() {
  const now = Date.now();
  localStorage.setItem(entranceActivityStorageKey, String(now));
  lastEntranceActivitySaveTime = now;
}

function isEntranceProblemModalOpen() {
  return Boolean(document.getElementById("entranceModal"));
}

function isInitialLearnedRangeModalOpen() {
  return Boolean(document.getElementById("initialLearnedRangeModal"));
}

function shouldShowEntranceProblemModal() {
  const lastActivityTime = getLastEntranceActivityTime();

  if (lastActivityTime === 0) {
    return true;
  }

  return Date.now() - lastActivityTime >= entranceIntervalMilliseconds;
}

function recordEntranceActivityIfAllowed() {
  if (isEntranceProblemModalOpen() || isInitialLearnedRangeModalOpen()) {
    return;
  }

  const now = Date.now();

  if (now - lastEntranceActivitySaveTime < 10000) {
    return;
  }

  saveEntranceActivityTime();
}

function startEntranceActivityTracking() {
  const activityEvents = ["click", "keydown", "scroll", "touchstart", "mousemove"];

  activityEvents.forEach(function (eventName) {
    window.addEventListener(eventName, recordEntranceActivityIfAllowed, {
      passive: true
    });
  });

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      recordEntranceActivityIfAllowed();
    }
  });
}

function enableEntranceCloseButton(closeButton) {
  if (!closeButton) {
    return;
  }

  closeButton.disabled = false;
  closeButton.classList.remove("is-hidden");
}

function startEntranceWrongAnswerCountdown(countdownArea, closeButton) {
  let count = 3;

  if (!countdownArea || !closeButton) {
    enableEntranceCloseButton(closeButton);
    return;
  }

  countdownArea.classList.remove("is-hidden");
  countdownArea.textContent = String(count);

  const countdownTimer = window.setInterval(function () {
    count -= 1;

    if (count > 0) {
      countdownArea.textContent = String(count);
      return;
    }

    window.clearInterval(countdownTimer);
    countdownArea.classList.add("is-hidden");
    countdownArea.textContent = "";
    enableEntranceCloseButton(closeButton);
  }, 1000);
}

function createEntranceProblemModal() {
  const oldModal = document.getElementById("entranceModal");

  if (oldModal) {
    oldModal.remove();
  }

  const problem = getEntranceProblem();

  if (!problem) {
    saveEntranceActivityTime();
    return;
  }

  const modal = document.createElement("div");
  modal.className = "entrance-modal";
  modal.id = "entranceModal";

  const choicesHtml = problem.choices.map(function (choice, index) {
    return `
      <button class="entrance-choice-button" data-index="${index}">
        ${choice}
      </button>
    `;
  }).join("");

  modal.innerHTML = `
    <div class="entrance-modal-content">
      <div class="entrance-question">
        ${problem.questionHtml}
      </div>

      <div class="entrance-choice-area">
        ${choicesHtml}
      </div>

      <div class="entrance-result" id="entranceResult"></div>

      <div class="entrance-countdown is-hidden" id="entranceCountdown"></div>

      <div class="entrance-explanation is-hidden" id="entranceExplanation">
        ${problem.explanationHtml}
      </div>

      <button class="entrance-close-button is-hidden" id="entranceCloseButton" disabled>
        サイトに入る
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  typesetMathInElement(modal);

  const choiceButtons = modal.querySelectorAll(".entrance-choice-button");
  const resultArea = modal.querySelector("#entranceResult");
  const countdownArea = modal.querySelector("#entranceCountdown");
  const explanationArea = modal.querySelector("#entranceExplanation");
  const closeButton = modal.querySelector("#entranceCloseButton");

  choiceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedIndex = Number(button.dataset.index);
      const isCorrect = selectedIndex === problem.correctIndex;

      choiceButtons.forEach(function (choiceButton) {
        choiceButton.disabled = true;
      });

      if (isCorrect) {
        resultArea.textContent = "正解です．";
        resultArea.classList.add("is-correct");
        resultArea.classList.remove("is-wrong");
        enableEntranceCloseButton(closeButton);
      } else {
        resultArea.textContent = "不正解です．";
        resultArea.classList.add("is-wrong");
        resultArea.classList.remove("is-correct");
        startEntranceWrongAnswerCountdown(countdownArea, closeButton);
      }

      explanationArea.classList.remove("is-hidden");

      typesetMathInElement(explanationArea);
    });
  });

  closeButton.addEventListener("click", function () {
    if (closeButton.disabled) {
      return;
    }

    saveEntranceActivityTime();
    modal.remove();
  });
}

function initializeEntranceProblemSystem() {
  if (!hasCompletedInitialLearnedRangeSetting()) {
    createInitialLearnedRangeModal();
    startEntranceActivityTracking();
    return;
  }

  if (shouldShowEntranceProblemModal()) {
    createEntranceProblemModal();
  } else {
    saveEntranceActivityTime();
  }

  startEntranceActivityTracking();
}

initializeEntranceProblemSystem();
