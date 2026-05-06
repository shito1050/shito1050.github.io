/* =========================
   問題演習
========================= */

const practiceProblems = Array.isArray(window.practiceProblems) ? window.practiceProblems : [];
const practiceAccordionStorageKey = "practiceAccordionOpenIds";

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
  "3": 5,
  "C": 6
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

function getSubjectOrderFromProblem(problem) {
  return parsePracticeProblemOrder(problem.order).subjectOrder;
}

function getUnitOrderFromProblem(problem) {
  return parsePracticeProblemOrder(problem.order).unitOrder;
}

function createPracticeAccordionId(type, name, parentName) {
  return [
    "practice",
    type,
    parentName || "",
    name || ""
  ].join("-")
    .replace(/\s+/g, "")
    .replace(/[^\w\u3040-\u30ff\u3400-\u9fff-]/g, "-");
}

function loadPracticeAccordionOpenIds() {
  const savedValue = sessionStorage.getItem(practiceAccordionStorageKey);

  if (!savedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(savedValue);

    if (Array.isArray(parsedValue)) {
      return parsedValue;
    }

    return [];
  } catch (error) {
    return [];
  }
}

function savePracticeAccordionOpenIds(openIds) {
  sessionStorage.setItem(practiceAccordionStorageKey, JSON.stringify(openIds));
}

function addPracticeAccordionOpenId(openId) {
  const openIds = loadPracticeAccordionOpenIds();

  if (!openIds.includes(openId)) {
    openIds.push(openId);
  }

  savePracticeAccordionOpenIds(openIds);
}

function removePracticeAccordionOpenId(openId) {
  const openIds = loadPracticeAccordionOpenIds().filter(function (savedId) {
    return savedId !== openId;
  });

  savePracticeAccordionOpenIds(openIds);
}

function isPracticeAccordionOpen(openId) {
  return loadPracticeAccordionOpenIds().includes(openId);
}

function groupPracticeProblemsBySubjectAndUnit(problems) {
  const subjectMap = new Map();

  problems.forEach(function (problem) {
    const subjectName = problem.subject || "その他";
    const unitName = problem.unit || "その他";

    if (!subjectMap.has(subjectName)) {
      subjectMap.set(subjectName, {
        name: subjectName,
        order: getSubjectOrderFromProblem(problem),
        units: new Map()
      });
    }

    const subjectGroup = subjectMap.get(subjectName);

    if (!subjectGroup.units.has(unitName)) {
      subjectGroup.units.set(unitName, {
        name: unitName,
        order: getUnitOrderFromProblem(problem),
        problems: []
      });
    }

    subjectGroup.units.get(unitName).problems.push(problem);
  });

  return Array.from(subjectMap.values())
    .sort(function (a, b) {
      if (a.order !== b.order) {
        return a.order - b.order;
      }

      return a.name.localeCompare(b.name, "ja");
    })
    .map(function (subjectGroup) {
      const units = Array.from(subjectGroup.units.values())
        .sort(function (a, b) {
          if (a.order !== b.order) {
            return a.order - b.order;
          }

          return a.name.localeCompare(b.name, "ja");
        })
        .map(function (unitGroup) {
          return {
            name: unitGroup.name,
            order: unitGroup.order,
            problems: sortPracticeProblemsByOrder(unitGroup.problems)
          };
        });

      return {
        name: subjectGroup.name,
        order: subjectGroup.order,
        units: units
      };
    });
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

  const groupedSubjects = groupPracticeProblemsBySubjectAndUnit(filteredProblems);

  const listHtml = groupedSubjects.map(function (subjectGroup) {
    const subjectId = createPracticeAccordionId("subject", subjectGroup.name);
    const isSubjectOpen = isPracticeAccordionOpen(subjectId);
    const subjectOpenClass = isSubjectOpen ? " is-open" : "";
    const subjectExpanded = isSubjectOpen ? "true" : "false";

    const unitHtml = subjectGroup.units.map(function (unitGroup) {
      const unitId = createPracticeAccordionId("unit", unitGroup.name, subjectGroup.name);
      const isUnitOpen = isPracticeAccordionOpen(unitId);
      const unitOpenClass = isUnitOpen ? " is-open" : "";
      const unitExpanded = isUnitOpen ? "true" : "false";

      const problemHtml = unitGroup.problems.map(function (problem) {
        const displayTitle = getPracticeProblemDisplayTitle(problem);

        return `
          <a class="problem-card simple-problem-card practice-problem-link" href="${getPracticeProblemUrl(problem)}">
            <span class="problem-title">${displayTitle}</span>
          </a>
        `;
      }).join("");

      return `
        <section class="practice-unit-group">
          <button
            type="button"
            class="practice-unit-toggle${unitOpenClass}"
            aria-expanded="${unitExpanded}"
            aria-controls="${unitId}"
          >
            <span class="practice-toggle-mark">▽</span>
            <span class="practice-unit-title">${unitGroup.name}</span>
            <span class="practice-count">${unitGroup.problems.length}問</span>
          </button>

          <div class="practice-unit-body${unitOpenClass}" id="${unitId}">
            ${problemHtml}
          </div>
        </section>
      `;
    }).join("");

    return `
      <section class="practice-subject-group">
        <button
          type="button"
          class="practice-subject-toggle${subjectOpenClass}"
          aria-expanded="${subjectExpanded}"
          aria-controls="${subjectId}"
        >
          <span class="practice-toggle-mark">▽</span>
          <span class="practice-subject-title">${subjectGroup.name}</span>
          <span class="practice-count">${subjectGroup.units.length}単元</span>
        </button>

        <div class="practice-subject-body${subjectOpenClass}" id="${subjectId}">
          ${unitHtml}
        </div>
      </section>
    `;
  }).join("");

  practiceProblemListArea.innerHTML = `
    <div class="practice-accordion-list">
      ${listHtml}
    </div>
  `;

  initializePracticeAccordion();
}

function initializePracticeAccordion() {
  const toggleButtons = document.querySelectorAll(".practice-subject-toggle, .practice-unit-toggle");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("aria-controls");
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      const isOpen = target.classList.toggle("is-open");

      button.setAttribute("aria-expanded", String(isOpen));
      button.classList.toggle("is-open", isOpen);

      if (isOpen) {
        addPracticeAccordionOpenId(targetId);
      } else {
        removePracticeAccordionOpenId(targetId);
      }
    });
  });
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
      ${problem.questionHtml || ""}
    </div>

    <button class="answer-open-button" id="answerOpenButton">
      解答をみる
    </button>

    <div class="answer-box is-hidden" id="answerBox">
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
  typesetMathInElement(detailArea);
}

renderPracticeProblemList();
renderPracticeProblemDetail();
