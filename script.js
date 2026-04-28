const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".side-nav a");

function openMenu() {
  menuButton.classList.add("is-open");
  sidebar.classList.add("is-open");
  overlay.classList.add("is-open");
  menuButton.setAttribute("aria-label", "メニューを閉じる");
}

function closeMenu() {
  menuButton.classList.remove("is-open");
  sidebar.classList.remove("is-open");
  overlay.classList.remove("is-open");
  menuButton.setAttribute("aria-label", "メニューを開く");
}

function toggleMenu() {
  if (sidebar.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (menuButton && sidebar && overlay) {
  menuButton.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });
}

/* =========================
   学年設定
========================= */

const gradeStorageKey = "selectedGrade";
const defaultGrade = "高校1年";

const sidebarGradeRadios = document.querySelectorAll('input[name="sidebarGrade"]');
const gradeButtons = document.querySelectorAll(".grade-button");

function getSelectedGrade() {
  return localStorage.getItem(gradeStorageKey) || defaultGrade;
}

function saveSelectedGrade(grade) {
  localStorage.setItem(gradeStorageKey, grade);
}

function applyGradeToSidebar(grade) {
  sidebarGradeRadios.forEach(function (radio) {
    radio.checked = radio.value === grade;
  });
}

function setupGradeSetting() {
  const selectedGrade = getSelectedGrade();
  applyGradeToSidebar(selectedGrade);

  sidebarGradeRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      saveSelectedGrade(radio.value);
      applyGradeToSidebar(radio.value);
      showDailyProblem();
    });
  });

  gradeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedGrade = button.dataset.grade;

      saveSelectedGrade(selectedGrade);
      applyGradeToSidebar(selectedGrade);
      showDailyProblem();

      const gradeModal = document.getElementById("gradeModal");
      if (gradeModal) {
        gradeModal.classList.add("is-hidden");
      }

      createEntranceProblemModal();
    });
  });
}

setupGradeSetting();

/* =========================
   今日の1問用データ
========================= */

const practiceProblems = [
  {
    title: "数学I_数と式_分母の有理化_001",
    grades: ["高校1年", "高校2年", "高校3年文系", "高校3年理系"],
    problemText: "次の数の分母を有理化せよ．",
    formula: "\\frac{1}{1+\\sqrt{2}+\\sqrt{3}}",
    url: "practice/rationalize-001.html"
  }
];

const dailyProblemArea = document.getElementById("dailyProblemArea");

function showDailyProblem() {
  if (!dailyProblemArea) {
    return;
  }

  const selectedGrade = getSelectedGrade();

  const filteredProblems = practiceProblems.filter(function (problem) {
    return problem.grades.includes(selectedGrade);
  });

  if (filteredProblems.length === 0) {
    dailyProblemArea.innerHTML = `
      <div class="problem-box">
        <p class="problem-label">問題</p>
        <p>現在，${selectedGrade}向けの問題は準備中です．</p>
      </div>
    `;
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredProblems.length);
  const problem = filteredProblems[randomIndex];

  dailyProblemArea.innerHTML = `
    <div class="problem-box">
      <p class="problem-label">問題</p>
      <p>${problem.problemText}</p>
      <div class="math-block">
        \\[
        ${problem.formula}
        \\]
      </div>
      <a class="answer-link-button" href="${problem.url}">
        解答を見る
      </a>
    </div>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

showDailyProblem();

/* =========================
   入場問題用データ
========================= */

const entranceProblemStorageKey = "lastEntranceProblemTime";
const halfDayMs = 10 * 1000;

const entranceProblems = [
  {
    grades: ["高校1年", "高校2年", "高校3年文系", "高校3年理系"],
    questionHtml: "\\(\\sqrt{9}\\) の値はどれか．",
    choices: ["\\(3\\)", "\\(-3\\)", "\\(\\pm 3\\)", "\\(9\\)"],
    correctIndex: 0,
    explanationHtml: "\\(\\sqrt{9}\\) は，2乗して9になる正の数なので，\\(3\\) である．"
  },
  {
    grades: ["高校1年", "高校2年", "高校3年文系", "高校3年理系"],
    questionHtml: "\\(2^3\\) の値はどれか．",
    choices: ["\\(5\\)", "\\(6\\)", "\\(8\\)", "\\(9\\)"],
    correctIndex: 2,
    explanationHtml: "\\(2^3=2\\times2\\times2=8\\) である．"
  },
  {
    grades: ["高校2年", "高校3年文系", "高校3年理系"],
    questionHtml: "\\(\\sin 0\\) の値はどれか．",
    choices: ["\\(0\\)", "\\(1\\)", "\\(-1\\)", "\\(\\frac{1}{2}\\)"],
    correctIndex: 0,
    explanationHtml: "\\(\\sin 0=0\\) である．"
  },
  {
    grades: ["高校3年理系"],
    questionHtml: "\\(\\lim_{x\\to 0}x\\) の値はどれか．",
    choices: ["\\(0\\)", "\\(1\\)", "\\(\\infty\\)", "存在しない"],
    correctIndex: 0,
    explanationHtml: "\\(\\lim_{x\\to 0}x=0\\) である．"
  }
];

function shouldShowEntranceProblem() {
  return true;
}

function saveEntranceProblemTime() {
  localStorage.setItem(entranceProblemStorageKey, String(Date.now()));
}

function getEntranceProblemForGrade() {
  const selectedGrade = getSelectedGrade();

  const filteredProblems = entranceProblems.filter(function (problem) {
    return problem.grades.includes(selectedGrade);
  });

  if (filteredProblems.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * filteredProblems.length);
  return filteredProblems[randomIndex];
}

function createEntranceProblemModal() {
  if (document.getElementById("entranceModal")) {
    return;
  }

  if (!shouldShowEntranceProblem()) {
    return;
  }

  const problem = getEntranceProblemForGrade();

  if (!problem) {
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

      <div class="entrance-explanation is-hidden" id="entranceExplanation">
        ${problem.explanationHtml}
      </div>

      <button class="entrance-close-button is-hidden" id="entranceCloseButton">
        サイトに入る
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  if (window.MathJax) {
    MathJax.typesetPromise();
  }

  const choiceButtons = modal.querySelectorAll(".entrance-choice-button");
  const resultArea = modal.querySelector("#entranceResult");
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
      } else {
        resultArea.textContent = "不正解です．";
        resultArea.classList.add("is-wrong");
        resultArea.classList.remove("is-correct");
      }

      explanationArea.classList.remove("is-hidden");
      closeButton.classList.remove("is-hidden");

      if (window.MathJax) {
        MathJax.typesetPromise();
      }
    });
  });

  closeButton.addEventListener("click", function () {
    saveEntranceProblemTime();
    modal.remove();
  });
}

createEntranceProblemModal();
