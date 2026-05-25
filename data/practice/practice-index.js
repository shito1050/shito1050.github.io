/* =========================
   問題演習データ読み込み
========================= */

window.practiceProblems = window.practiceProblems || [];

(function () {
  if (!window.siteLoader || typeof window.siteLoader.loadScript !== "function") {
    return;
  }

  /*
     数学I｜数と式
  */
  window.siteLoader.loadScript("data/practice/math1/numbers-and-expressions/rationalize-001.js");
  window.siteLoader.loadScript("data/practice/math1/numbers-and-expressions/double-radical-001.js");

  /*
     数学II｜いろいろな式
  */
  window.siteLoader.loadScript("data/practice/math2/various-expressions/polynomial-root-square-001.js");

  /*
     数学II｜図形と方程式
  */
  window.siteLoader.loadScript("data/practice/math2/geometry-and-equations/moving-range-001.js");
  window.siteLoader.loadScript("data/practice/math2/geometry-and-equations/locus-parabola-orthogonal-tangent-001.js");

  /*
     数学C｜ベクトル
  */
  window.siteLoader.loadScript("data/practice/mathc/vector/triangle-moving-point-center-001.js");
})();
