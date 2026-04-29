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
   パス管理
========================= */

function getPageDepthPrefix() {
  const path = window.location.pathname;

  if (path.includes("/dictionary/") || path.includes("/practice/")) {
    return "../";
  }

  return "";
}

function getDictionaryTermUrl(item) {
  return getPageDepthPrefix() + "dictionary/term.html?id=" + encodeURIComponent(item.id);
}

function getDictionaryTermUrlFromDictionaryFolder(item) {
  return "term.html?id=" + encodeURIComponent(item.id);
}

/* =========================
   定義・用語・公式集
========================= */

function getDictionaryData() {
  const dictionaryData = window.dictionaryData || [];

  if (!Array.isArray(dictionaryData)) {
    return [];
  }

  return dictionaryData;
}

function findDictionaryItemById(id) {
  const dictionaryData = getDictionaryData();

  return dictionaryData.find(function (item) {
    return item.id === id;
  });
}

function createDictionarySearchBox() {
  const dictionaryData = getDictionaryData();

  if (dictionaryData.length === 0) {
    return;
  }

  const oldSearchBox = document.getElementById("dictionarySearchFloating");

  if (oldSearchBox) {
    oldSearchBox.remove();
  }

  const searchFloating = document.createElement("div");
  searchFloating.className = "dictionary-search-floating";
  searchFloating.id = "dictionarySearchFloating";

  searchFloating.innerHTML = `
    <div class="dictionary-search-box">
      <span class="dictionary-search-label">Def.</span>
      <span class="dictionary-search-icon">🔍</span>
      <input
        type="search"
        class="dictionary-search-input"
        id="dictionarySearchInput"
        placeholder="用語を検索"
        autocomplete="off"
      >
    </div>
    <div class="dictionary-search-panel" id="dictionarySearchPanel"></div>
  `;

  document.body.appendChild(searchFloating);

  const input = document.getElementById("dictionarySearchInput");
  const panel = document.getElementById("dictionarySearchPanel");

  function closePanel() {
    panel.classList.remove("is-open");
    panel.innerHTML = "";
  }

  function openPanel() {
    panel.classList.add("is-open");
  }

  function getMatchedTerm(inputText) {
    return dictionaryData.find(function (item) {
      return item.term === inputText;
    });
  }

  function getSuggestions(inputText) {
    if (!inputText) {
      return [];
    }

    return dictionaryData.filter(function (item) {
      const term = item.term || "";
      const kana = item.kana || "";
      const yomi = item.yomi || "";

      return (
        term.includes(inputText) ||
        kana.includes(inputText) ||
        yomi.includes(inputText)
      );
    });
  }

  function showPreview(item) {
    const previewText = item.shortDescription || item.description || "";

    panel.innerHTML = `
      <h2 class="dictionary-search-preview-title">${item.term}</h2>
      <p class="dictionary-search-preview-text">${previewText}</p>
      <a class="dictionary-search-preview-link" href="${getDictionaryTermUrl(item)}">
        詳しく見る
      </a>
    `;

    openPanel();
  }

  function showSuggestions(suggestions) {
    if (suggestions.length === 0) {
      panel.innerHTML = `
        <p class="dictionary-search-empty">一致する候補はありません．</p>
      `;
      openPanel();
      return;
    }

    const suggestionButtonsHtml = suggestions.map(function (item) {
      return `
        <button
          type="button"
          class="dictionary-search-suggestion-button"
          data-term="${item.term}"
        >
          ${item.term}
        </button>
      `;
    }).join("");

    panel.innerHTML = `
      <div class="dictionary-search-suggestion-title">候補</div>
      <div class="dictionary-search-suggestion-list">
        ${suggestionButtonsHtml}
      </div>
    `;

    const suggestionButtons = panel.querySelectorAll(".dictionary-search-suggestion-button");

    suggestionButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const selectedTerm = button.dataset.term;
        input.value = selectedTerm;

        const selectedItem = getMatchedTerm(selectedTerm);

        if (selectedItem) {
          showPreview(selectedItem);
        }
      });
    });

    openPanel();
  }

  function updateSearchResult() {
    const inputText = input.value.trim();

    if (!inputText) {
      closePanel();
      return;
    }

    const matchedTerm = getMatchedTerm(inputText);

    if (matchedTerm) {
      showPreview(matchedTerm);
      return;
    }

    const suggestions = getSuggestions(inputText);
    showSuggestions(suggestions);
  }

  input.addEventListener("input", updateSearchResult);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      input.value = "";
      closePanel();
    }
  });

  document.addEventListener("click", function (event) {
    if (!searchFloating.contains(event.target)) {
      closePanel();
    }
  });
}

function renderDictionaryIndex() {
  const dictionaryIndexArea = document.getElementById("dictionaryIndexArea");

  if (!dictionaryIndexArea) {
    return;
  }

  const dictionaryData = getDictionaryData();

  if (dictionaryData.length === 0) {
    dictionaryIndexArea.innerHTML = `
      <p>現在，用語は準備中です．</p>
    `;
    return;
  }

  const groupedItems = {};

  dictionaryData.forEach(function (item) {
    const group = item.group || "その他";

    if (!groupedItems[group]) {
      groupedItems[group] = [];
    }

    groupedItems[group].push(item);
  });

  const groupKeys = Object.keys(groupedItems).sort(function (a, b) {
    return a.localeCompare(b, "ja");
  });

  const indexHtml = groupKeys.map(function (group) {
    const items = groupedItems[group].sort(function (a, b) {
      return (a.kana || a.term).localeCompare(b.kana || b.term, "ja");
    });

    const itemLinksHtml = items.map(function (item) {
      return `
        <li>
          <a href="${getDictionaryTermUrlFromDictionaryFolder(item)}">${item.term}</a>
        </li>
      `;
    }).join("");

    return `
      <div class="dictionary-group">
        <h2 class="dictionary-kana-heading">【${group}】</h2>
        <ul class="dictionary-term-list">
          ${itemLinksHtml}
        </ul>
      </div>
    `;
  }).join("");

  dictionaryIndexArea.innerHTML = indexHtml;
}

function renderDictionaryTermDetail() {
  const detailArea = document.getElementById("dictionaryTermDetail");

  if (!detailArea) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const termId = urlParams.get("id");
  const item = findDictionaryItemById(termId);

  if (!item) {
    detailArea.innerHTML = `
      <h1 class="definition-title">用語が見つかりません</h1>
      <p>指定された用語は見つかりませんでした．</p>
    `;
    return;
  }

  document.title = item.term + "｜定義・用語・公式集｜しぃとのホームページ";

  detailArea.innerHTML = `
    <h1 class="definition-title">${item.term}</h1>
    <p>${item.description}</p>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

createDictionarySearchBox();
renderDictionaryIndex();
renderDictionaryTermDetail();

/* 既習範囲設定 */

const learnedUnitsStorageKey = "learnedUnitIds";
const initialLearnedRangeSettingKey = "hasCompletedInitialLearnedRangeSetting";

const mathUnitGroups = [
  {
    id: "math1",
    name: "数学I",
    units: [
      { id: "math1_numbers_and_expressions", name: "数と式" },
      { id: "math1_sets_and_logic", name: "集合と命題" },
      { id: "math1_quadratic_functions", name: "2次関数" },
      { id: "math1_figures_and_measurement", name: "図形と計量" },
      { id: "math1_data_analysis", name: "データの分析" }
    ]
  },
  {
    id: "mathA",
    name: "数学A",
    units: [
      { id: "mathA_properties_of_figures", name: "図形の性質" },
      { id: "mathA_counting_and_probability", name: "場合の数と確率" }
    ]
  },
  {
    id: "math2",
    name: "数学II",
    units: [
      { id: "math2_various_expressions", name: "いろいろな式" },
      { id: "math2_figures_and_equations", name: "図形と方程式" },
      { id: "math2_exponential_and_logarithmic_functions", name: "指数関数・対数関数" },
      { id: "math2_trigonometric_functions", name: "三角関数" },
      { id: "math2_calculus", name: "微分・積分" }
    ]
  },
  {
    id: "mathB",
    name: "数学B",
    units: [
      { id: "mathB_sequences", name: "数列" },
      { id: "mathB_statistical_inference", name: "統計的な推測" }
    ]
  },
  {
    id: "mathC",
    name: "数学C",
    units: [
      { id: "mathC_vectors", name: "ベクトル" },
      { id: "mathC_plane_curves", name: "平面上の曲線" },
      { id: "mathC_complex_plane", name: "複素数平面" }
    ]
  },
  {
    id: "math3",
    name: "数学III",
    units: [
      { id: "math3_limits", name: "極限" },
      { id: "math3_differentiation", name: "微分法" },
      { id: "math3_integration", name: "積分法" }
    ]
  }
];

const defaultLearnedUnitIds = ["math1_numbers_and_expressions"];

function getAllUnitIds() {
  return mathUnitGroups.flatMap(function (group) {
    return group.units.map(function (unit) {
      return unit.id;
    });
  });
}

function saveLearnedUnitIds(unitIds) {
  localStorage.setItem(learnedUnitsStorageKey, JSON.stringify(unitIds));
}

function loadLearnedUnitIds() {
  const savedValue = localStorage.getItem(learnedUnitsStorageKey);

  if (!savedValue) {
    saveLearnedUnitIds(defaultLearnedUnitIds);
    return [...defaultLearnedUnitIds];
  }

  try {
    const parsedValue = JSON.parse(savedValue);

    if (!Array.isArray(parsedValue)) {
      saveLearnedUnitIds(defaultLearnedUnitIds);
      return [...defaultLearnedUnitIds];
    }

    const allUnitIds = getAllUnitIds();

    const validUnitIds = parsedValue.filter(function (unitId) {
      return allUnitIds.includes(unitId);
    });

    if (validUnitIds.length === 0) {
      saveLearnedUnitIds(defaultLearnedUnitIds);
      return [...defaultLearnedUnitIds];
    }

    return validUnitIds;
  } catch (error) {
    saveLearnedUnitIds(defaultLearnedUnitIds);
    return [...defaultLearnedUnitIds];
  }
}

function hasCompletedInitialLearnedRangeSetting() {
  return localStorage.getItem(initialLearnedRangeSettingKey) === "true";
}

function completeInitialLearnedRangeSetting() {
  localStorage.setItem(initialLearnedRangeSettingKey, "true");
}

function updateCourseCheckboxState(courseElement) {
  const courseCheckbox = courseElement.querySelector(".learned-course-label input[type='checkbox']");
  const unitCheckboxes = Array.from(
    courseElement.querySelectorAll(".learned-unit-list input[type='checkbox']")
  );

  const checkedCount = unitCheckboxes.filter(function (checkbox) {
    return checkbox.checked;
  }).length;

  courseCheckbox.checked = checkedCount === unitCheckboxes.length;
  courseCheckbox.indeterminate = checkedCount > 0 && checkedCount < unitCheckboxes.length;
}

function createLearnedRangeSelector(container, options) {
  const settings = options || {};
  const shouldOpenAll = settings.openAll === true;

  const learnedUnitIds = loadLearnedUnitIds();

  container.innerHTML = "";

  mathUnitGroups.forEach(function (group) {
    const courseElement = document.createElement("div");
    courseElement.className = "learned-course";

    const headerElement = document.createElement("div");
    headerElement.className = "learned-course-header";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "learned-course-toggle";
    toggleButton.textContent = "▽";
    toggleButton.setAttribute("aria-label", group.name + "の単元一覧を開閉する");

    const courseLabel = document.createElement("label");
    courseLabel.className = "learned-course-label";

    const courseCheckbox = document.createElement("input");
    courseCheckbox.type = "checkbox";

    const groupUnitIds = group.units.map(function (unit) {
      return unit.id;
    });

    const checkedCount = groupUnitIds.filter(function (unitId) {
      return learnedUnitIds.includes(unitId);
    }).length;

    courseCheckbox.checked = checkedCount === groupUnitIds.length;
    courseCheckbox.indeterminate = checkedCount > 0 && checkedCount < groupUnitIds.length;

    const courseName = document.createElement("span");
    courseName.textContent = group.name;

    courseLabel.appendChild(courseCheckbox);
    courseLabel.appendChild(courseName);

    headerElement.appendChild(toggleButton);
    headerElement.appendChild(courseLabel);

    const unitListElement = document.createElement("div");
    unitListElement.className = "learned-unit-list";

    if (shouldOpenAll) {
      unitListElement.classList.add("is-open");
      toggleButton.classList.add("is-open");
    }

    group.units.forEach(function (unit) {
      const unitLabel = document.createElement("label");
      unitLabel.className = "learned-unit-label";

      const unitCheckbox = document.createElement("input");
      unitCheckbox.type = "checkbox";
      unitCheckbox.value = unit.id;
      unitCheckbox.checked = learnedUnitIds.includes(unit.id);

      const unitName = document.createElement("span");
      unitName.textContent = unit.name;

      unitLabel.appendChild(unitCheckbox);
      unitLabel.appendChild(unitName);
      unitListElement.appendChild(unitLabel);

      unitCheckbox.addEventListener("change", function () {
        updateLearnedUnitsFromContainer(container);
        updateCourseCheckboxState(courseElement);

        if (!settings.skipAfterChange) {
          showDailyProblem();
        }
      });
    });

    courseCheckbox.addEventListener("change", function () {
      const unitCheckboxes = unitListElement.querySelectorAll("input[type='checkbox']");

      unitCheckboxes.forEach(function (unitCheckbox) {
        unitCheckbox.checked = courseCheckbox.checked;
      });

      courseCheckbox.indeterminate = false;

      updateLearnedUnitsFromContainer(container);

      if (!settings.skipAfterChange) {
        showDailyProblem();
      }
    });

    toggleButton.addEventListener("click", function () {
      unitListElement.classList.toggle("is-open");
      toggleButton.classList.toggle("is-open");
    });

    courseElement.appendChild(headerElement);
    courseElement.appendChild(unitListElement);
    container.appendChild(courseElement);
  });
}

function renderLearnedRangeSetting() {
  const container = document.getElementById("learnedRangeSetting");

  if (!container) {
    return;
  }

  createLearnedRangeSelector(container);
}

function updateLearnedUnitsFromContainer(container) {
  const checkedUnitIds = Array.from(
    container.querySelectorAll(".learned-unit-list input[type='checkbox']:checked")
  ).map(function (checkbox) {
    return checkbox.value;
  });

  if (checkedUnitIds.length === 0) {
    saveLearnedUnitIds(defaultLearnedUnitIds);
  } else {
    saveLearnedUnitIds(checkedUnitIds);
  }
}

function isProblemInLearnedRange(problem) {
  const learnedUnitIds = loadLearnedUnitIds();

  if (!problem.unitIds || !Array.isArray(problem.unitIds) || problem.unitIds.length === 0) {
    return false;
  }

  return problem.unitIds.every(function (unitId) {
    return learnedUnitIds.includes(unitId);
  });
}

function filterProblemsByLearnedRange(problems) {
  return problems.filter(function (problem) {
    return isProblemInLearnedRange(problem);
  });
}

function createInitialLearnedRangeModal() {
  const oldModal = document.getElementById("initialLearnedRangeModal");

  if (oldModal) {
    oldModal.remove();
  }

  const modal = document.createElement("div");
  modal.className = "learned-range-modal";
  modal.id = "initialLearnedRangeModal";

  modal.innerHTML = `
    <div class="learned-range-modal-content">
      <h2 class="learned-range-modal-title">
        既に習った分野にチェックを入れてください（この質問は初回にしかされません）．
      </h2>

      <div id="initialLearnedRangeSetting" class="learned-range-setting learned-range-setting-modal"></div>

      <button class="learned-range-start-button" id="learnedRangeStartButton">
        この範囲で始める
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  const initialContainer = document.getElementById("initialLearnedRangeSetting");
  const startButton = document.getElementById("learnedRangeStartButton");

  createLearnedRangeSelector(initialContainer, {
    openAll: true,
    skipAfterChange: true
  });

  startButton.addEventListener("click", function () {
    updateLearnedUnitsFromContainer(initialContainer);
    completeInitialLearnedRangeSetting();
    modal.remove();
    renderLearnedRangeSetting();
    showDailyProblem();
    createEntranceProblemModal();
  });
}

renderLearnedRangeSetting();

/* 今日の1問 */

const practiceProblems = [
  {
    title: "数学I_数と式_分母の有理化_001",
    unitIds: ["math1_numbers_and_expressions"],
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

  const filteredProblems = filterProblemsByLearnedRange(practiceProblems);

  if (filteredProblems.length === 0) {
    dailyProblemArea.innerHTML = `
      <div class="problem-box">
        <p class="problem-label">問題</p>
        <p>現在，既習範囲内の問題は準備中です．</p>
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
      <a class="answer-link-button" href="${problem.url}?answer=open">
        解答を見る
      </a>
    </div>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

showDailyProblem();

/* 入場問題 */

const entranceProblems = [
  {
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\(\\sqrt{9}\\) の値はどれか．",
    choices: ["\\(3\\)", "\\(-3\\)", "\\(\\pm 3\\)", "\\(9\\)"],
    correctIndex: 0,
    explanationHtml: "\\(\\sqrt{9}\\) は，2乗して9になる正の数なので，\\(3\\) である．"
  },
  {
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\(2^3\\) の値はどれか．",
    choices: ["\\(5\\)", "\\(6\\)", "\\(8\\)", "\\(9\\)"],
    correctIndex: 2,
    explanationHtml: "\\(2^3=2\\times2\\times2=8\\) である．"
  },
  {
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\sin 0\\) の値はどれか．",
    choices: ["\\(0\\)", "\\(1\\)", "\\(-1\\)", "\\(\\frac{1}{2}\\)"],
    correctIndex: 0,
    explanationHtml: "\\(\\sin 0=0\\) である．"
  },
  {
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to 0}x\\) の値はどれか．",
    choices: ["\\(0\\)", "\\(1\\)", "\\(\\infty\\)", "存在しない"],
    correctIndex: 0,
    explanationHtml: "\\(\\lim_{x\\to 0}x=0\\) である．"
  }
];

function getEntranceProblem() {
  const filteredProblems = filterProblemsByLearnedRange(entranceProblems);

  if (filteredProblems.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * filteredProblems.length);
  return filteredProblems[randomIndex];
}

function createEntranceProblemModal() {
  const oldModal = document.getElementById("entranceModal");

  if (oldModal) {
    oldModal.remove();
  }

  const problem = getEntranceProblem();

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
    modal.remove();
  });
}

if (document.body.dataset.page === "home") {
  if (hasCompletedInitialLearnedRangeSetting()) {
    createEntranceProblemModal();
  } else {
    createInitialLearnedRangeModal();
  }
}

/* 個別問題ページの解答開閉 */

const answerBox = document.getElementById("answerBox");
const answerCloseButton = document.getElementById("answerCloseButton");
const answerOpenButton = document.getElementById("answerOpenButton");

function openAnswer() {
  if (!answerBox || !answerOpenButton) {
    return;
  }

  answerBox.classList.remove("is-hidden");
  answerOpenButton.classList.add("is-hidden");

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function closeAnswer() {
  if (!answerBox || !answerOpenButton) {
    return;
  }

  answerBox.classList.add("is-hidden");
  answerOpenButton.classList.remove("is-hidden");
}

if (answerBox && answerCloseButton && answerOpenButton) {
  answerOpenButton.addEventListener("click", function () {
    openAnswer();
  });

  answerCloseButton.addEventListener("click", function () {
    closeAnswer();
  });

  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("answer") === "open") {
    openAnswer();
  } else {
    closeAnswer();
  }
}
