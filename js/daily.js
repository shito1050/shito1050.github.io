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
      ${problem.questionHtml || ""}
      <a class="answer-link-button" href="${getPracticeProblemAnswerUrl(problem)}">
        解答をみる
      </a>
    </div>
  `;

  typesetMathInElement(dailyProblemArea);
}

showDailyProblem();
