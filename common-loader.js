/* =========================
   共通読み込み管理
========================= */

(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.getAttribute("src") : "common-loader.js";
  const prefix = scriptSrc.replace(/common-loader\.js$/, "");
  const version = "20260506-17";

  function addVersion(path) {
    if (path.includes("?")) {
      return path + "&v=" + version;
    }

    return path + "?v=" + version;
  }

  function loadInlineScript(code) {
    document.write("<script>" + code + "<\/script>");
  }

  function loadScript(path) {
    document.write('<script src="' + prefix + addVersion(path) + '"><\/script>');
  }

  function loadExternalScript(src) {
    document.write('<script src="' + src + '"><\/script>');
  }

  loadInlineScript(`
    window.MathJax = {
      tex: {
        packages: {'[+]': ['color']},
        inlineMath: [['\\\\(', '\\\\)']],
        displayMath: [['\\\\[', '\\\\]']]
      }
    };
  `);

  loadExternalScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js");

  /*
     サイト共通設定
  */
  loadScript("data/site-config.js");

  /*
     辞書データ
  */
  loadScript("data/dictionary/math1/numbers-and-expressions.js");
  loadScript("data/dictionary/math3/differentiation.js");

  /*
     授業データ
  */
  loadScript("data/lessons-data.js");

  /*
     入場問題データ
     各単元ファイル → entrance-problems-index.js の順に読み込む
  */
  loadScript("data/entrance-problems/math1-numbers-and-expressions.js");
  loadScript("data/entrance-problems/math2-trigonometric-functions.js");
  loadScript("data/entrance-problems/math3-limits.js");
  loadScript("data/entrance-problems/entrance-problems-index.js");

  /*
     問題演習データ
  */
  loadScript("data/practice/math1-suutoshiki.js");
  loadScript("data/practice/math2-geometry-and-equations.js");

  /*
     ブログデータ
  */
  loadScript("data/blog-posts-data.js");

  /*
     共通処理
     読み込み順に依存するので，この順番を保つ
  */
  loadScript("js/common-path.js");
  loadScript("js/sidebar.js");
  loadScript("js/dictionary.js");
  loadScript("js/lessons.js");
  loadScript("js/learned-range.js");
  loadScript("js/answer-toggle.js");
  loadScript("js/practice.js");
  loadScript("js/daily.js");
  loadScript("js/blog.js");
  loadScript("js/entrance.js");
})();
