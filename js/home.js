/* =========================
   トップページ
========================= */

function setupHomePage() {
  if (getPageName() !== "home") {
    return;
  }

  const siteConfig = window.siteConfig || {};
  const siteName = siteConfig.siteName || "すうがくがかり";
  const catchphrase = siteConfig.catchphrase || "今日も少しだけ，数学のお世話をする．";

  const homeTitle = document.getElementById("homeTitle");
  const homeCatchphrase = document.getElementById("homeCatchphrase");

  if (homeTitle) {
    homeTitle.textContent = siteName;
  }

  if (homeCatchphrase) {
    homeCatchphrase.textContent = catchphrase;
  }

  document.title = siteName;
}

setupHomePage();
