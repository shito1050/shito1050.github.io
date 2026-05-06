/* =========================
   共通パス管理
========================= */

function inferDepthPrefixFromPath() {
  const path = window.location.pathname;

  const folderNames = ["/about/", "/dictionary/", "/practice/", "/daily/", "/lessons/", "/blog/"];

  for (let i = 0; i < folderNames.length; i++) {
    const folderName = folderNames[i];

    if (path.includes(folderName)) {
      const afterFolderPath = path.split(folderName)[1] || "";
      const slashCount = (afterFolderPath.match(/\//g) || []).length;
      return "../".repeat(slashCount + 1);
    }
  }

  return "";
}

function getPageDepth() {
  if (document.body && document.body.dataset.depth) {
    return document.body.dataset.depth;
  }

  const inferredPrefix = inferDepthPrefixFromPath();

  if (!inferredPrefix) {
    return "root";
  }

  return inferredPrefix;
}

function getPageDepthPrefix() {
  const pageDepth = getPageDepth();

  if (pageDepth === "root") {
    return "";
  }

  if (pageDepth === "child") {
    return "../";
  }

  return pageDepth;
}

function getPageName() {
  if (document.body && document.body.dataset.page) {
    return document.body.dataset.page;
  }

  return "";
}

function makePath(pathFromRoot) {
  return getPageDepthPrefix() + pathFromRoot;
}

/* =========================
   共通サイドバー
========================= */

function createCommonSidebar() {
  const commonSidebarArea = document.getElementById("commonSidebar");

  if (!commonSidebarArea) {
    return;
  }

  const currentPage = getPageName();

  const navItems = [
    {
      page: "about",
      text: "このサイトについて",
      href: "about/"
    },
    {
      page: "dictionary",
      text: "定義・用語・公式集",
      href: "dictionary/index.html"
    },
    {
      page: "lessons",
      text: "授業",
      href: "lessons/index.html"
    },
    {
      page: "practice",
      text: "問題演習",
      href: "practice/"
    },
    {
      page: "daily",
      text: "今日の1問",
      href: "daily/"
    },
    {
      page: "blog",
      text: "ブログ",
      href: "blog/"
    }
  ];

  const navHtml = navItems.map(function (item) {
    const activeClass = currentPage === item.page ? " class=\"active\"" : "";

    return `
      <a href="${makePath(item.href)}"${activeClass}>${item.text}</a>
    `;
  }).join("");

  commonSidebarArea.innerHTML = `
    <aside class="sidebar" id="sidebar">
      <a class="site-title site-title-link" href="${makePath("index.html")}">
        <div class="site-title-main">しぃとの</div>
        <div class="site-title-sub">ホームページ</div>
      </a>

      <nav class="side-nav">
        ${navHtml}
      </nav>

      <div class="learned-range-box">
        <div class="learned-range-title">既習範囲設定</div>
        <div id="learnedRangeSetting" class="learned-range-setting"></div>
      </div>
    </aside>
  `;
}

createCommonSidebar();

/* =========================
   スマホ用メニュー
========================= */

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".side-nav a");

function openMenu() {
  if (!menuButton || !sidebar || !overlay) {
    return;
  }

  menuButton.classList.add("is-open");
  sidebar.classList.add("is-open");
  overlay.classList.add("is-open");
  menuButton.setAttribute("aria-label", "メニューを閉じる");
}

function closeMenu() {
  if (!menuButton || !sidebar || !overlay) {
    return;
  }

  menuButton.classList.remove("is-open");
  sidebar.classList.remove("is-open");
  overlay.classList.remove("is-open");
  menuButton.setAttribute("aria-label", "メニューを開く");
}

function toggleMenu() {
  if (!sidebar) {
    return;
  }

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
   定義・用語・公式集
========================= */

function getDictionaryTermUrl(item) {
  return makePath("dictionary/term.html?id=" + encodeURIComponent(item.id));
}

function getDictionaryTermUrlFromDictionaryFolder(item) {
  return "term.html?id=" + encodeURIComponent(item.id);
}

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

function getDictionaryGroup(item) {
  const kana = String(item.kana || item.term || "").trim();

  if (!kana) {
    return "その他";
  }

  return kana.charAt(0);
}

function getDictionaryGroupOrder(group) {
  const order = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん"
  ];

  const index = order.indexOf(group);

  if (index === -1) {
    return 999;
  }

  return index;
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
      <a
        class="dictionary-search-preview-link"
        href="${getDictionaryTermUrl(item)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        詳しくみる
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

    function selectSuggestion(event, button) {
      event.preventDefault();
      event.stopPropagation();

      const selectedTerm = button.dataset.term;
      input.value = selectedTerm;

      const selectedItem = getMatchedTerm(selectedTerm);

      if (selectedItem) {
        showPreview(selectedItem);
      }
    }

    suggestionButtons.forEach(function (button) {
      button.addEventListener("pointerdown", function (event) {
        selectSuggestion(event, button);
      });

      button.addEventListener("click", function (event) {
        selectSuggestion(event, button);
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
    const group = getDictionaryGroup(item);

    if (!groupedItems[group]) {
      groupedItems[group] = [];
    }

    groupedItems[group].push(item);
  });

  const groupKeys = Object.keys(groupedItems).sort(function (a, b) {
    const orderA = getDictionaryGroupOrder(a);
    const orderB = getDictionaryGroupOrder(b);

    if (orderA !== orderB) {
      return orderA - orderB;
    }

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
    <div class="dictionary-term-body">
      ${item.bodyHtml || `<p>${item.description || ""}</p>`}
    </div>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

createDictionarySearchBox();
renderDictionaryIndex();
renderDictionaryTermDetail();

/* =========================
   授業一覧
========================= */

function getLessonsData() {
  if (typeof LESSONS_DATA !== "undefined" && Array.isArray(LESSONS_DATA)) {
    return LESSONS_DATA;
  }

  if (Array.isArray(window.LESSONS_DATA)) {
    return window.LESSONS_DATA;
  }

  return [];
}

function renderLessonIndex() {
  const lessonIndex = document.getElementById("lessonIndex");

  if (!lessonIndex) {
    return;
  }

  const lessonsData = getLessonsData();

  if (lessonsData.length === 0) {
    lessonIndex.innerHTML = `
      <p class="lesson-empty-text">準備中</p>
    `;
    return;
  }

  lessonIndex.innerHTML = "";

  lessonsData.forEach(function (subject) {
    const subjectBlock = document.createElement("section");
    subjectBlock.className = "lesson-subject-block";

    const subjectTitle = document.createElement("h3");
    subjectTitle.className = "lesson-subject-title";
    subjectTitle.textContent = subject.title;
    subjectBlock.appendChild(subjectTitle);

    const unitList = document.createElement("div");
    unitList.className = "lesson-unit-list";

    subject.units.forEach(function (unit) {
      const unitBlock = document.createElement("section");
      unitBlock.className = "lesson-unit-block";

      const unitTitle = document.createElement("h4");
      unitTitle.className = "lesson-unit-title";
      unitTitle.textContent = unit.title;
      unitBlock.appendChild(unitTitle);

      if (!unit.lessons || unit.lessons.length === 0) {
        const emptyText = document.createElement("p");
        emptyText.className = "lesson-empty-text";
        emptyText.textContent = "準備中";
        unitBlock.appendChild(emptyText);
      } else {
        const lessonList = document.createElement("ol");
        lessonList.className = "lesson-list";

        unit.lessons.forEach(function (lesson, index) {
          const lessonItem = document.createElement("li");
          lessonItem.className = "lesson-item";

          const lessonLink = document.createElement("a");
          lessonLink.className = "lesson-link";
          lessonLink.href = makePath(lesson.path);

          const lessonNumber = document.createElement("span");
          lessonNumber.className = "lesson-number";
          lessonNumber.textContent = "第" + (index + 1) + "講";

          const lessonTitle = document.createElement("span");
          lessonTitle.className = "lesson-title";
          lessonTitle.textContent = lesson.title;

          lessonLink.appendChild(lessonNumber);
          lessonLink.appendChild(lessonTitle);
          lessonItem.appendChild(lessonLink);
          lessonList.appendChild(lessonItem);
        });

        unitBlock.appendChild(lessonList);
      }

      unitList.appendChild(unitBlock);
    });

    subjectBlock.appendChild(unitList);
    lessonIndex.appendChild(subjectBlock);
  });
}

renderLessonIndex();

/* =========================
   既習範囲設定
========================= */

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

/* =========================
   問題演習
========================= */

const practiceProblems = Array.isArray(window.practiceProblems) ? window.practiceProblems : [];

function getDifficultyLabel(difficulty) {
  const difficultyLabels = {
    1: "基本",
    2: "標準",
    3: "応用",
    4: "難関"
  };

  return difficultyLabels[difficulty] || "";
}

const practiceSubjectOrderMap = {
  "1": 1,
  "A": 2,
  "2": 3,
  "B": 4,
  "C": 5,
  "3": 6
};

function parsePracticeProblemOrder(orderText) {
  const order = String(orderText || "").trim();
  const parts = order.split("-");

  if (parts.length !== 3) {
    return {
      subjectOrder: 999,
      unitOrder: 999,
      problemOrder: 999999
    };
  }

  const subjectKey = parts[0];
  const unitKey = parts[1];
  const problemKey = parts[2];

  return {
    subjectOrder: practiceSubjectOrderMap[subjectKey] || 999,
    unitOrder: Number(unitKey) || 999,
    problemOrder: Number(problemKey) || 999999
  };
}

function comparePracticeProblemOrder(problemA, problemB) {
  const orderA = parsePracticeProblemOrder(problemA.order);
  const orderB = parsePracticeProblemOrder(problemB.order);

  if (orderA.subjectOrder !== orderB.subjectOrder) {
    return orderA.subjectOrder - orderB.subjectOrder;
  }

  if (orderA.unitOrder !== orderB.unitOrder) {
    return orderA.unitOrder - orderB.unitOrder;
  }

  if (orderA.problemOrder !== orderB.problemOrder) {
    return orderA.problemOrder - orderB.problemOrder;
  }

  return String(problemA.id || "").localeCompare(String(problemB.id || ""));
}

function sortPracticeProblemsByOrder(problems) {
  return [...problems].sort(comparePracticeProblemOrder);
}

function getPracticeProblemDisplayTitle(problem) {
  const difficultyLabel = getDifficultyLabel(problem.difficulty);

  const titleBase = [
    problem.subject,
    problem.unit,
    problem.topic
  ].filter(Boolean).join("_");

  const difficultyText = difficultyLabel ? `（${difficultyLabel}）` : "";

  return titleBase + difficultyText;
}

function findPracticeProblemById(problemId) {
  return practiceProblems.find(function (problem) {
    return problem.id === problemId;
  });
}

function getPracticeProblemUrl(problem) {
  return makePath("practice/problem.html?id=" + encodeURIComponent(problem.id));
}

function getPracticeProblemAnswerUrl(problem) {
  return getPracticeProblemUrl(problem) + "&answer=open";
}

function getCurrentPracticeProblemId() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawProblemId = urlParams.get("id") || "";
  return rawProblemId.split("?")[0];
}

function shouldOpenAnswerFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);

  return (
    urlParams.get("answer") === "open" ||
    window.location.search.includes("answer=open")
  );
}

function renderPracticeProblemList() {
  const practiceProblemListArea = document.getElementById("practiceProblemListArea");

  if (!practiceProblemListArea) {
    return;
  }

  const filteredProblems = sortPracticeProblemsByOrder(
    filterProblemsByLearnedRange(practiceProblems)
  );

  if (filteredProblems.length === 0) {
    practiceProblemListArea.innerHTML = `
      <p>現在，既習範囲内の問題は準備中です．</p>
    `;
    return;
  }

  const listHtml = filteredProblems.map(function (problem) {
    const displayTitle = getPracticeProblemDisplayTitle(problem);

    return `
      <a class="problem-card simple-problem-card" href="${getPracticeProblemUrl(problem)}">
        <span class="problem-title">${displayTitle}</span>
      </a>
    `;
  }).join("");

  practiceProblemListArea.innerHTML = listHtml;
}

function renderPracticeProblemDetail() {
  const detailArea = document.getElementById("practiceProblemDetail");
  const titleArea = document.getElementById("practiceProblemTitle");

  if (!detailArea || !titleArea) {
    return;
  }

  const problemId = getCurrentPracticeProblemId();
  const problem = findPracticeProblemById(problemId);

  if (!problem) {
    titleArea.textContent = "問題が見つかりません";
    detailArea.innerHTML = `
      <p>指定された問題は見つかりませんでした．</p>
      <p class="back-link-area">
        <a class="answer-link-button" href="${makePath("practice/")}">問題一覧にもどる</a>
      </p>
    `;
    return;
  }

  const displayTitle = getPracticeProblemDisplayTitle(problem);

  document.title = displayTitle + "｜問題演習｜しぃとのホームページ";
  titleArea.textContent = displayTitle;

  detailArea.innerHTML = `
    <div class="problem-box">
      <p class="problem-label">問題</p>
      <p>${problem.problemText || ""}</p>
      ${problem.questionHtml || ""}
    </div>

    <button class="answer-open-button" id="answerOpenButton">
      解答をみる
    </button>

    <div class="answer-box is-hidden" id="answerBox">
      <p class="problem-label">解答</p>
      ${problem.answerHtml || ""}

      <button class="answer-close-button" id="answerCloseButton">
        解答を閉じる
      </button>
    </div>

    <p class="back-link-area">
      <a class="answer-link-button" href="${makePath("practice/")}">問題一覧にもどる</a>
    </p>
  `;

  initializeAnswerToggle();

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

renderPracticeProblemList();
renderPracticeProblemDetail();

/* =========================
   今日の1問
========================= */

const dailyProblemArea = document.getElementById("dailyProblemArea");

function getDailyProblemDateKey() {
  const now = new Date();
  const dailyBorderHour = 6;
  const dateForDaily = new Date(now);

  if (dateForDaily.getHours() < dailyBorderHour) {
    dateForDaily.setDate(dateForDaily.getDate() - 1);
  }

  const year = dateForDaily.getFullYear();
  const month = String(dateForDaily.getMonth() + 1).padStart(2, "0");
  const date = String(dateForDaily.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

function createStableHash(text) {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function getDailyProblem(problems) {
  if (problems.length === 0) {
    return null;
  }

  const learnedUnitIds = loadLearnedUnitIds().sort().join(",");
  const dateKey = getDailyProblemDateKey();
  const seedText = dateKey + "|" + learnedUnitIds + "|" + problems.map(function (problem) {
    return problem.id;
  }).join(",");

  const index = createStableHash(seedText) % problems.length;

  return problems[index];
}

function showDailyProblem() {
  if (!dailyProblemArea) {
    return;
  }

  const filteredProblems = sortPracticeProblemsByOrder(
    filterProblemsByLearnedRange(practiceProblems)
  );
  const problem = getDailyProblem(filteredProblems);

  if (!problem) {
    dailyProblemArea.innerHTML = `
      <div class="problem-box">
        <p class="problem-label">問題</p>
        <p>現在，既習範囲内の問題は準備中です．</p>
      </div>
    `;
    return;
  }

  dailyProblemArea.innerHTML = `
    <div class="problem-box">
      <p class="problem-label">問題</p>
      <p>${problem.problemText || ""}</p>
      ${problem.questionHtml || ""}
      <a class="answer-link-button" href="${getPracticeProblemAnswerUrl(problem)}">
        解答をみる
      </a>
    </div>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

showDailyProblem();

/* =========================
   ブログ
========================= */

function getBlogPosts() {
  const blogPosts = window.blogPosts || [];

  if (!Array.isArray(blogPosts)) {
    return [];
  }

  return blogPosts;
}

function findBlogPostById(postId) {
  const blogPosts = getBlogPosts();

  return blogPosts.find(function (post) {
    return post.id === postId;
  });
}

function getCurrentBlogPostId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id") || "";
}

function getBlogPostUrl(post) {
  if (post.id) {
    return makePath("blog/article.html?id=" + encodeURIComponent(post.id));
  }

  if (post.url) {
    return makePath(post.url);
  }

  return makePath("blog/");
}

function renderBlogPostList() {
  const blogPostListArea = document.getElementById("blogPostListArea");

  if (!blogPostListArea) {
    return;
  }

  const blogPosts = getBlogPosts();

  if (blogPosts.length === 0) {
    blogPostListArea.innerHTML = `
      <p>現在，記事は準備中です．</p>
    `;
    return;
  }

  const sortedPosts = [...blogPosts].sort(function (a, b) {
    return String(b.date || "").localeCompare(String(a.date || ""));
  });

  const postListHtml = sortedPosts.map(function (post) {
    const dateHtml = post.date ? `<span class="blog-post-date">${post.date}</span>` : "";
    const descriptionHtml = post.description ? `<p class="blog-post-description">${post.description}</p>` : "";

    return `
      <a class="problem-card simple-problem-card blog-post-card" href="${getBlogPostUrl(post)}">
        <span class="problem-title">${post.title}</span>
        ${dateHtml}
        ${descriptionHtml}
      </a>
    `;
  }).join("");

  blogPostListArea.innerHTML = postListHtml;
}

function renderBlogArticle() {
  const articleArea = document.getElementById("blogArticleArea");

  if (!articleArea) {
    return;
  }

  const postId = getCurrentBlogPostId();
  const post = findBlogPostById(postId);

  if (!post) {
    articleArea.innerHTML = `
      <h1 class="definition-title">記事が見つかりません</h1>
      <p>指定された記事は見つかりませんでした．</p>
    `;
    return;
  }

  document.title = post.title + "｜ブログ｜しぃとのホームページ";

  const dateHtml = post.date ? `<p class="blog-post-date">${post.date}</p>` : "";
  const descriptionHtml = post.description ? `<p class="blog-post-description">${post.description}</p>` : "";

  articleArea.innerHTML = `
    <h1 class="definition-title">${post.title}</h1>
    ${dateHtml}
    ${descriptionHtml}
    <div class="blog-article-body">
      ${post.bodyHtml || ""}
    </div>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

renderBlogPostList();
renderBlogArticle();

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

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
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
