/* =========================
   共通読み込み管理
========================= */

(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.getAttribute("src") : "common-loader.js";
  const prefix = scriptSrc.replace(/common-loader\.js$/, "");

  function loadScript(path) {
    document.write('<script src="' + prefix + path + '"><\/script>');
  }

  loadScript("data/dictionary-data.js");
  loadScript("data/lessons-data.js");
  loadScript("data/entrance-problems-data.js");
  loadScript("script.js");
})();
