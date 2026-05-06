/* =========================
   ページタイトル
========================= */

function setupPageTitle() {
  const siteConfig = window.siteConfig || {};
  const siteName = siteConfig.siteName || "すうがくがかり";
  const currentPage = getPageName();

  if (currentPage === "home") {
    document.title = siteName;
    return;
  }

  const mainTitle = document.querySelector(".main-content h1");

  if (!mainTitle) {
    document.title = siteName;
    return;
  }

  const pageTitle = mainTitle.textContent.trim();

  if (!pageTitle) {
    document.title = siteName;
    return;
  }

  document.title = pageTitle + "｜" + siteName;
}

setupPageTitle();
