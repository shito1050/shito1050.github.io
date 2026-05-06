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

function typesetMathInElement(element) {
  if (!element || !window.MathJax || !window.MathJax.typesetPromise) {
    return;
  }

  window.MathJax.typesetPromise([element]).catch(function (error) {
    console.error(error);
  });
}
