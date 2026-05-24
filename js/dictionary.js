/* =========================
   定義・用語・公式集
========================= */

function getDictionaryTermUrl(item) {
  return makePath("dictionary/term.html?id=" + encodeURIComponent(item.id));
}

function getDictionaryTermUrlFromDictionaryFolder(item) {
  return "term.html?id=" + encodeURIComponent(item.id);
}

function getDictionaryData() {
  const dictionaryData = window.dictionaryData || [];

  if (!Array.isArray(dictionaryData)) {
    return [];
  }

  return dictionaryData;
}

function findDictionaryItemById(id) {
  const dictionaryData = getDictionaryData();

  return dictionaryData.find(function (item) {
    return item.id === id;
  });
}

function normalizeDictionaryGroupKana(group) {
  const groupMap = {
    が: "か",
    ぎ: "き",
    ぐ: "く",
    げ: "け",
    ご: "こ",
    ざ: "さ",
    じ: "し",
    ず: "す",
    ぜ: "せ",
    ぞ: "そ",
    だ: "た",
    ぢ: "ち",
    づ: "つ",
    で: "て",
    ど: "と",
    ば: "は",
    び: "ひ",
    ぶ: "ふ",
    べ: "へ",
    ぼ: "ほ",
    ぱ: "は",
    ぴ: "ひ",
    ぷ: "ふ",
    ぺ: "へ",
    ぽ: "ほ"
  };

  return groupMap[group] || group;
}

function getDictionaryGroup(item) {
  const explicitGroup = String(item.group || "").trim();

  if (explicitGroup === "英字") {
    return "英字";
  }

  if (explicitGroup) {
    return normalizeDictionaryGroupKana(explicitGroup.charAt(0));
  }

  const kana = String(item.kana || item.term || "").trim();

  if (!kana) {
    return "その他";
  }

  const firstChar = kana.charAt(0);

  if (/^[A-Za-z]$/.test(firstChar)) {
    return firstChar.toUpperCase();
  }

  return normalizeDictionaryGroupKana(firstChar);
}

function getDictionaryRowGroup(item) {
  const group = getDictionaryGroup(item);

  if (["あ", "い", "う", "え", "お"].includes(group)) {
    return "あ行";
  }

  if (["か", "き", "く", "け", "こ"].includes(group)) {
    return "か行";
  }

  if (["さ", "し", "す", "せ", "そ"].includes(group)) {
    return "さ行";
  }

  if (["た", "ち", "つ", "て", "と"].includes(group)) {
    return "た行";
  }

  if (["な", "に", "ぬ", "ね", "の"].includes(group)) {
    return "な行";
  }

  if (["は", "ひ", "ふ", "へ", "ほ"].includes(group)) {
    return "は行";
  }

  if (["ま", "み", "む", "め", "も"].includes(group)) {
    return "ま行";
  }

  if (["や", "ゆ", "よ"].includes(group)) {
    return "や行";
  }

  if (["ら", "り", "る", "れ", "ろ"].includes(group)) {
    return "ら行";
  }

  if (["わ", "を", "ん"].includes(group)) {
    return "わ行";
  }

  if (group === "英字" || /^[A-Z]$/.test(group)) {
    return "英字";
  }

  return "その他";
}

function getDictionaryRowGroupOrder(rowGroup) {
  const order = [
    "あ行",
    "か行",
    "さ行",
    "た行",
    "な行",
    "は行",
    "ま行",
    "や行",
    "ら行",
    "わ行",
    "英字",
    "その他"
  ];

  const index = order.indexOf(rowGroup);

  if (index === -1) {
    return 999;
  }

  return index;
}

function getDictionaryKanaOrder(group) {
  if (group === "英字") {
    return 1000;
  }

  const order = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん"
  ];

  const index = order.indexOf(group);

  if (index === -1) {
    return 999;
  }

  return index;
}

function createDictionarySearchBox() {
  const dictionaryData = getDictionaryData();

  if (dictionaryData.length === 0) {
    return;
  }

  const oldSearchBox = document.getElementById("dictionarySearchFloating");

  if (oldSearchBox) {
    oldSearchBox.remove();
  }

  const searchFloating = document.createElement("div");
  searchFloating.className = "dictionary-search-floating";
  searchFloating.id = "dictionarySearchFloating";

  searchFloating.innerHTML = `
    <div class="dictionary-search-box">
      <span class="dictionary-search-icon">🔍</span>
      <input
        type="search"
        class="dictionary-search-input"
        id="dictionarySearchInput"
        placeholder="用語を検索"
        autocomplete="off"
      >
      <button
        type="button"
        class="dictionary-search-clear-button"
        id="dictionarySearchClearButton"
        aria-label="検索語を消す"
      >
        ×
      </button>
    </div>
    <div class="dictionary-search-panel" id="dictionarySearchPanel"></div>
  `;

  document.body.appendChild(searchFloating);

  const input = document.getElementById("dictionarySearchInput");
  const clearButton = document.getElementById("dictionarySearchClearButton");
  const panel = document.getElementById("dictionarySearchPanel");

  function closePanel() {
    panel.classList.remove("is-open");
    panel.innerHTML = "";
  }

  function openPanel() {
    panel.classList.add("is-open");
  }

  function updateClearButton() {
    if (input.value.trim()) {
      clearButton.classList.add("is-visible");
    } else {
      clearButton.classList.remove("is-visible");
    }
  }

  function clearSearchInput() {
    input.value = "";
    updateClearButton();
    closePanel();
    input.focus();
  }

  function getMatchedTerm(inputText) {
    return dictionaryData.find(function (item) {
      return item.term === inputText;
    });
  }

  function getSuggestions(inputText) {
    if (!inputText) {
      return [];
    }

    return dictionaryData.filter(function (item) {
      const term = item.term || "";
      const kana = item.kana || "";
      const yomi = item.yomi || "";

      return (
        term.includes(inputText) ||
        kana.includes(inputText) ||
        yomi.includes(inputText)
      );
    });
  }

  function showPreview(item) {
    const previewText = item.shortDescription || item.description || "";

    panel.innerHTML = `
      <h2 class="dictionary-search-preview-title">${item.term}</h2>
      <p class="dictionary-search-preview-text">${previewText}</p>
      <a
        class="dictionary-search-preview-link"
        href="${getDictionaryTermUrl(item)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        詳しくみる
      </a>
    `;

    openPanel();
    typesetMathInElement(panel);
  }

  function showSuggestions(suggestions) {
    if (suggestions.length === 0) {
      panel.innerHTML = `
        <p class="dictionary-search-empty">一致する候補はありません．</p>
      `;
      openPanel();
      return;
    }

    const suggestionButtonsHtml = suggestions.map(function (item) {
      return `
        <button
          type="button"
          class="dictionary-search-suggestion-button"
          data-term="${item.term}"
        >
          ${item.term}
        </button>
      `;
    }).join("");

    panel.innerHTML = `
      <div class="dictionary-search-suggestion-title">候補</div>
      <div class="dictionary-search-suggestion-list">
        ${suggestionButtonsHtml}
      </div>
    `;

    const suggestionButtons = panel.querySelectorAll(".dictionary-search-suggestion-button");

    function selectSuggestion(event, button) {
      event.preventDefault();
      event.stopPropagation();

      const selectedTerm = button.dataset.term;
      input.value = selectedTerm;
      updateClearButton();

      const selectedItem = getMatchedTerm(selectedTerm);

      if (selectedItem) {
        showPreview(selectedItem);
      }
    }

    suggestionButtons.forEach(function (button) {
      button.addEventListener("pointerdown", function (event) {
        selectSuggestion(event, button);
      });

      button.addEventListener("click", function (event) {
        selectSuggestion(event, button);
      });
    });

    openPanel();
  }

  function updateSearchResult() {
    const inputText = input.value.trim();

    updateClearButton();

    if (!inputText) {
      closePanel();
      return;
    }

    const matchedTerm = getMatchedTerm(inputText);

    if (matchedTerm) {
      showPreview(matchedTerm);
      return;
    }

    const suggestions = getSuggestions(inputText);
    showSuggestions(suggestions);
  }

  input.addEventListener("input", updateSearchResult);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      clearSearchInput();
    }
  });

  clearButton.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    event.stopPropagation();
    clearSearchInput();
  });

  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    clearSearchInput();
  });

  document.addEventListener("click", function (event) {
    if (!searchFloating.contains(event.target)) {
      closePanel();
    }
  });

  updateClearButton();
}

function getAvailableDictionaryRowGroups(dictionaryData) {
  const rowGroups = [];

  dictionaryData.forEach(function (item) {
    const rowGroup = getDictionaryRowGroup(item);

    if (!rowGroups.includes(rowGroup)) {
      rowGroups.push(rowGroup);
    }
  });

  return rowGroups.sort(function (a, b) {
    const orderA = getDictionaryRowGroupOrder(a);
    const orderB = getDictionaryRowGroupOrder(b);

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.localeCompare(b, "ja");
  });
}

function createDictionaryFilterHtml(rowGroups) {
  const filterButtonsHtml = rowGroups.map(function (rowGroup) {
    return `
      <button
        type="button"
        class="dictionary-filter-button is-selected"
        data-row-group="${rowGroup}"
      >
        ${rowGroup}
      </button>
    `;
  }).join("");

  return `
    <div class="dictionary-filter-area" id="dictionaryFilterArea">
      <div class="dictionary-filter-heading">表示する行を選んでください</div>
      <div class="dictionary-filter-button-list">
        ${filterButtonsHtml}
      </div>
      <div class="dictionary-filter-control-list">
        <button type="button" class="dictionary-filter-control-button" id="dictionaryFilterSelectAll">
          すべて選択
        </button>
        <button type="button" class="dictionary-filter-control-button" id="dictionaryFilterClearAll">
          すべてクリア
        </button>
      </div>
    </div>
  `;
}

function createDictionaryIndexHtml(dictionaryData, selectedRowGroups) {
  if (selectedRowGroups.length === 0) {
    return `
      <p class="dictionary-filter-empty-message">
        表示する行を選んでください．
      </p>
    `;
  }

  const groupedItems = {};

  dictionaryData.forEach(function (item) {
    const rowGroup = getDictionaryRowGroup(item);

    if (!selectedRowGroups.includes(rowGroup)) {
      return;
    }

    if (!groupedItems[rowGroup]) {
      groupedItems[rowGroup] = [];
    }

    groupedItems[rowGroup].push(item);
  });

  const rowGroupKeys = Object.keys(groupedItems).sort(function (a, b) {
    const orderA = getDictionaryRowGroupOrder(a);
    const orderB = getDictionaryRowGroupOrder(b);

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.localeCompare(b, "ja");
  });

  return rowGroupKeys.map(function (rowGroup) {
    const items = groupedItems[rowGroup].sort(function (a, b) {
      const groupA = getDictionaryGroup(a);
      const groupB = getDictionaryGroup(b);
      const orderA = getDictionaryKanaOrder(groupA);
      const orderB = getDictionaryKanaOrder(groupB);

      if (orderA !== orderB) {
        return orderA - orderB;
      }

      return (a.kana || a.term).localeCompare(b.kana || b.term, "ja");
    });

    const itemLinksHtml = items.map(function (item) {
      return `
        <li>
          <a href="${getDictionaryTermUrlFromDictionaryFolder(item)}">${item.term}</a>
        </li>
      `;
    }).join("");

    return `
      <section class="dictionary-row-group" data-row-group="${rowGroup}">
        <h2 class="dictionary-kana-heading">【${rowGroup}】</h2>
        <ul class="dictionary-term-list">
          ${itemLinksHtml}
        </ul>
      </section>
    `;
  }).join("");
}

function renderDictionaryIndex() {
  const dictionaryIndexArea = document.getElementById("dictionaryIndexArea");

  if (!dictionaryIndexArea) {
    return;
  }

  const dictionaryData = getDictionaryData();

  if (dictionaryData.length === 0) {
    dictionaryIndexArea.innerHTML = `
      <p>現在，用語は準備中です．</p>
    `;
    return;
  }

  const rowGroups = getAvailableDictionaryRowGroups(dictionaryData);
  let selectedRowGroups = rowGroups.slice();

  dictionaryIndexArea.innerHTML = `
    ${createDictionaryFilterHtml(rowGroups)}
    <div class="dictionary-index-grid" id="dictionaryIndexGrid"></div>
  `;

  const filterButtons = dictionaryIndexArea.querySelectorAll(".dictionary-filter-button");
  const selectAllButton = document.getElementById("dictionaryFilterSelectAll");
  const clearAllButton = document.getElementById("dictionaryFilterClearAll");
  const indexGrid = document.getElementById("dictionaryIndexGrid");

  function updateFilterButtonState() {
    filterButtons.forEach(function (button) {
      const rowGroup = button.dataset.rowGroup;

      if (selectedRowGroups.includes(rowGroup)) {
        button.classList.add("is-selected");
      } else {
        button.classList.remove("is-selected");
      }
    });
  }

  function updateIndex() {
    indexGrid.innerHTML = createDictionaryIndexHtml(dictionaryData, selectedRowGroups);
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const rowGroup = button.dataset.rowGroup;

      if (selectedRowGroups.includes(rowGroup)) {
        selectedRowGroups = selectedRowGroups.filter(function (selectedRowGroup) {
          return selectedRowGroup !== rowGroup;
        });
      } else {
        selectedRowGroups.push(rowGroup);
      }

      selectedRowGroups.sort(function (a, b) {
        const orderA = getDictionaryRowGroupOrder(a);
        const orderB = getDictionaryRowGroupOrder(b);

        if (orderA !== orderB) {
          return orderA - orderB;
        }

        return a.localeCompare(b, "ja");
      });

      updateFilterButtonState();
      updateIndex();
    });
  });

  selectAllButton.addEventListener("click", function () {
    selectedRowGroups = rowGroups.slice();
    updateFilterButtonState();
    updateIndex();
  });

  clearAllButton.addEventListener("click", function () {
    selectedRowGroups = [];
    updateFilterButtonState();
    updateIndex();
  });

  updateFilterButtonState();
  updateIndex();
}

function renderDictionaryTermDetail() {
  const detailArea = document.getElementById("dictionaryTermDetail");

  if (!detailArea) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const termId = urlParams.get("id");
  const item = findDictionaryItemById(termId);

  if (!item) {
    detailArea.innerHTML = `
      <h1 class="definition-title">用語が見つかりません</h1>
      <p>指定された用語は見つかりませんでした．</p>
    `;
    return;
  }

  document.title = item.term + "｜定義・用語・公式集｜しぃとのホームページ";

  detailArea.innerHTML = `
    <h1 class="definition-title">${item.term}</h1>
    <div class="dictionary-term-body">
      ${item.bodyHtml || `<p>${item.description || ""}</p>`}
    </div>
  `;

  typesetMathInElement(detailArea);
}

createDictionarySearchBox();
renderDictionaryIndex();
renderDictionaryTermDetail();
