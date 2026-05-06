/* =========================
   共通読み込み管理
========================= */

(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.getAttribute("src") : "common-loader.js";
  const prefix = scriptSrc.replace(/common-loader\.js$/, "");
  const version = "20260506-02";

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
        inlineMath: [['\\\\(', '\\\\)']],
        displayMath: [['\\\\[', '\\\\]']]
      }
    };
  `);

  loadExternalScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js");

  loadScript("data/dictionary-data.js");
  loadScript("data/lessons-data.js");
  loadScript("data/entrance-problems-data.js");
  loadScript("data/practice/math1-suutoshiki.js");
  loadScript("data/blog-posts-data.js");
  loadScript("script.js");
})();
