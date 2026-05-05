/* =========================
   共通読み込み管理
========================= */

(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.getAttribute("src") : "common-loader.js";
  const prefix = scriptSrc.replace(/common-loader\.js$/, "");

  function loadInlineScript(code) {
    document.write("<script>" + code + "<\/script>");
  }

  function loadScript(path) {
    document.write('<script src="' + prefix + path + '"><\/script>');
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
  loadScript("data/practice-problems-data.js");
  loadScript("data/blog-posts-data.js");
  loadScript("script.js");
})();
