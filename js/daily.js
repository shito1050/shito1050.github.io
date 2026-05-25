/* =========================
   今日の1問
========================= */

const dailyProblemArea = document.getElementById("dailyProblemArea");
const dailyPracticedBadge = document.getElementById("dailyPracticedBadge");
const dailyReselectButton = document.getElementById("dailyReselectButton");

const dailyProblemStorageKey = "dailyProblemState";
const dailyPracticedStorageKey = "dailyPracticedState";

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

function loadDailyProblemState() {
  try {
    const rawState = localStorage.getItem(dailyProblemStorageKey);

    if (!rawState) {
      return null;
    }

    return JSON.parse(rawState);
  } catch (error) {
    return null;
  }
}

function saveDailyProblemState(problemId) {
  const state = {
    dateKey: getDailyProblemDateKey(),
    problemId: problemId
  };

  localStorage.setItem(dailyProblemStorageKey, JSON.stringify(state));
}

function loadDailyPracticedState() {
  try {
    const rawState = localStorage.getItem(dailyPracticedStorageKey);

    if (!rawState) {
      return null;
    }

    return JSON.parse(rawState);
  } catch (error) {
    return null;
  }
}

function saveDailyPracticedState(problemId) {
  const state = {
    dateKey: getDailyProblemDateKey(),
    problemId: problemId,
    practiced: true
  };

  localStorage.setItem(dailyPracticedStorageKey, JSON.stringify(state));
}

function clearDailyPracticedState() {
  localStorage.removeItem(dailyPracticedStorageKey);
}

function isDailyProblemPracticed(problem) {
  if (!problem) {
    return false;
  }

  const practicedState = loadDailyPracticedState();

  if (!practicedState) {
    return false;
  }

  return practicedState.dateKey === getDailyProblemDateKey()
    && practicedState.problemId === problem.id
    && practicedState.practiced === true;
}

function updateDailyPracticedBadge(problem) {
  if (!dailyPracticedBadge) {
    return;
  }

  if (isDailyProblemPracticed(problem)) {
    dailyPracticedBadge.classList.remove("is-hidden");
  } else {
    dailyPracticedBadge.classList.add("is-hidden");
  }
}

function getProblemById(problemId) {
  if (!problemId) {
    return null;
  }

  return practiceProblems.find(function (problem) {
    return problem.id === problemId;
  }) || null;
}

function getDailyProblemFromCandidates(problems) {
  if (problems.length === 0) {
    return null;
  }

  const dateKey = getDailyProblemDateKey();
  const seedText = dateKey + "|" + problems.map(function (problem) {
    return problem.id;
  }).join(",");

  const index = createStableHash(seedText) % problems.length;

  return problems[index];
}

function getAllSortedPracticeProblems() {
  return sortPracticeProblemsByOrder(practiceProblems);
}

function getLearnedRangeSortedPracticeProblems() {
  return sortPracticeProblemsByOrder(
    filterProblemsByLearnedRange(practiceProblems)
  );
}

function getSavedDailyProblem() {
  const state = loadDailyProblemState();

  if (!state) {
    return null;
  }

  if (state.dateKey !== getDailyProblemDateKey()) {
    return null;
  }

  return getProblemById(state.problemId);
}

function getOrCreateDailyProblem() {
  const savedProblem = getSavedDailyProblem();

  if (savedProblem) {
    return savedProblem;
  }

  const filteredProblems = getLearnedRangeSortedPracticeProblems();
  const problem = getDailyProblemFromCandidates(filteredProblems);

  if (problem) {
    saveDailyProblemState(problem.id);
  }

  return problem;
}

function isProblemInCurrentLearnedRange(problem) {
  if (!problem) {
    return false;
  }

  const learnedProblems = getLearnedRangeSortedPracticeProblems();

  return learnedProblems.some(function (learnedProblem) {
    return learnedProblem.id === problem.id;
  });
}

function reselectDailyProblemFromCurrentScopeIfNeeded() {
  const currentProblem = getOrCreateDailyProblem();

  if (currentProblem && isProblemInCurrentLearnedRange(currentProblem)) {
    showDailyProblem();
    return;
  }

  const filteredProblems = getLearnedRangeSortedPracticeProblems();
  const nextProblem = getDailyProblemFromCandidates(filteredProblems);

  if (nextProblem) {
    saveDailyProblemState(nextProblem.id);
    clearDailyPracticedState();
  }

  showDailyProblem();
}

function showDailyProblem() {
  if (!dailyProblemArea) {
    return;
  }

  const problem = getOrCreateDailyProblem();

  if (!problem) {
    dailyProblemArea.innerHTML = `
      <div class="problem-box">
        <p class="problem-label">問題</p>
        <p>現在，既習範囲内の問題は準備中です．</p>
      </div>
    `;

    updateDailyPracticedBadge(null);
    return;
  }

  dailyProblemArea.innerHTML = `
    <div class="problem-box">
      <p class="problem-label">問題</p>
      ${problem.questionHtml || ""}
      <a class="answer-link-button" href="${getPracticeProblemAnswerUrl(problem)}" id="dailyAnswerLink">
        解答をみる
      </a>
    </div>
  `;

  const dailyAnswerLink = document.getElementById("dailyAnswerLink");

  if (dailyAnswerLink) {
    dailyAnswerLink.addEventListener("click", function () {
      saveDailyPracticedState(problem.id);
      updateDailyPracticedBadge(problem);
    });
  }

  updateDailyPracticedBadge(problem);
  typesetMathInElement(dailyProblemArea);
}

if (dailyReselectButton) {
  dailyReselectButton.addEventListener("click", function () {
    reselectDailyProblemFromCurrentScopeIfNeeded();
  });
}

showDailyProblem();
