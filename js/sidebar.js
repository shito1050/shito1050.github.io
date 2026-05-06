/* =========================
   共通サイドバー
========================= */

function createCommonSidebar() {
  const commonSidebarArea = document.getElementById("commonSidebar");

  if (!commonSidebarArea) {
    return;
  }

  const currentPage = getPageName();

  const navItems = [
    {
      page: "about",
      text: "このサイトについて",
      href: "about/"
    },
    {
      page: "dictionary",
      text: "定義・用語・公式集",
      href: "dictionary/index.html"
    },
    {
      page: "lessons",
      text: "授業",
      href: "lessons/index.html"
    },
    {
      page: "practice",
      text: "問題演習",
      href: "practice/"
    },
    {
      page: "daily",
      text: "今日の1問",
      href: "daily/"
    },
    {
      page: "blog",
      text: "ブログ",
      href: "blog/"
    }
  ];

  const navHtml = navItems.map(function (item) {
    const activeClass = currentPage === item.page ? " class=\"active\"" : "";

    return `
      <a href="${makePath(item.href)}"${activeClass}>${item.text}</a>
    `;
  }).join("");

  commonSidebarArea.innerHTML = `
    <aside class="sidebar" id="sidebar">
      <a class="site-title site-title-link" href="${makePath("index.html")}">
        <div class="site-title-main">すうがく</div>
        <div class="site-title-sub">がかり</div>
      </a>

      <nav class="side-nav">
        ${navHtml}
      </nav>

      <div class="learned-range-box">
        <div class="learned-range-title">既習範囲設定</div>
        <div id="learnedRangeSetting" class="learned-range-setting"></div>
      </div>
    </aside>
  `;
}

createCommonSidebar();

/* =========================
   スマホ用メニュー
========================= */

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".side-nav a");

function openMenu() {
  if (!menuButton || !sidebar || !overlay) {
    return;
  }

  menuButton.classList.add("is-open");
  sidebar.classList.add("is-open");
  overlay.classList.add("is-open");
  menuButton.setAttribute("aria-label", "メニューを閉じる");
}

function closeMenu() {
  if (!menuButton || !sidebar || !overlay) {
    return;
  }

  menuButton.classList.remove("is-open");
  sidebar.classList.remove("is-open");
  overlay.classList.remove("is-open");
  menuButton.setAttribute("aria-label", "メニューを開く");
}

function toggleMenu() {
  if (!sidebar) {
    return;
  }

  if (sidebar.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (menuButton && sidebar && overlay) {
  menuButton.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });
}
