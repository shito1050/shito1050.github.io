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
      { id: "mathA_counting_and_probability", name: "場合の数と確率" },
      { id: "mathA_integer_properties", name: "整数の性質" }
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
    id: "math3",
    name: "数学III",
    units: [
      { id: "math3_limits", name: "極限" },
      { id: "math3_differentiation", name: "微分法" },
      { id: "math3_integration", name: "積分法" }
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
          renderPracticeProblemList();
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
        renderPracticeProblemList();
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
    renderPracticeProblemList();
    createEntranceProblemModal();
  });
}

renderLearnedRangeSetting();
