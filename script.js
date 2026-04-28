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

/* 今日の1問で使う問題リスト */
const practiceProblems = [
  {
    title: "分母の有理化001",
    category: "数学I・数と式",
    problemText: "次の数の分母を有理化せよ．",
    formula: "\\frac{1}{1+\\sqrt{2}+\\sqrt{3}}",
    url: "practice/rationalize-001.html"
  }
];

/* daily.html にだけ表示する */
const dailyProblemArea = document.getElementById("dailyProblemArea");

if (dailyProblemArea) {
  const randomIndex = Math.floor(Math.random() * practiceProblems.length);
  const problem = practiceProblems[randomIndex];

  dailyProblemArea.innerHTML = `
    <div class="problem-box">
      <p class="problem-label">問題</p>
      <p class="problem-category">${problem.category}</p>
      <h3 class="daily-problem-title">${problem.title}</h3>
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
