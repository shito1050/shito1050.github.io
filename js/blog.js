/* =========================
   ブログ
========================= */

function getBlogPosts() {
  const blogPosts = window.blogPosts || [];

  if (!Array.isArray(blogPosts)) {
    return [];
  }

  return blogPosts;
}

function findBlogPostById(postId) {
  const blogPosts = getBlogPosts();

  return blogPosts.find(function (post) {
    return post.id === postId;
  });
}

function getCurrentBlogPostId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id") || "";
}

function getBlogPostUrl(post) {
  if (post.id) {
    return makePath("blog/article.html?id=" + encodeURIComponent(post.id));
  }

  if (post.url) {
    return makePath(post.url);
  }

  return makePath("blog/");
}

function renderBlogPostList() {
  const blogPostListArea = document.getElementById("blogPostListArea");

  if (!blogPostListArea) {
    return;
  }

  const blogPosts = getBlogPosts();

  if (blogPosts.length === 0) {
    blogPostListArea.innerHTML = `
      <p>現在，記事は準備中です．</p>
    `;
    return;
  }

  const sortedPosts = [...blogPosts].sort(function (a, b) {
    return String(b.date || "").localeCompare(String(a.date || ""));
  });

  const postListHtml = sortedPosts.map(function (post) {
    const dateHtml = post.date ? `<span class="blog-post-date">${post.date}</span>` : "";
    const descriptionHtml = post.description ? `<p class="blog-post-description">${post.description}</p>` : "";

    return `
      <a class="problem-card simple-problem-card blog-post-card" href="${getBlogPostUrl(post)}">
        <span class="problem-title">${post.title}</span>
        ${dateHtml}
        ${descriptionHtml}
      </a>
    `;
  }).join("");

  blogPostListArea.innerHTML = postListHtml;
}

function renderBlogArticle() {
  const articleArea = document.getElementById("blogArticleArea");

  if (!articleArea) {
    return;
  }

  const postId = getCurrentBlogPostId();
  const post = findBlogPostById(postId);

  if (!post) {
    articleArea.innerHTML = `
      <h1 class="definition-title">記事が見つかりません</h1>
      <p>指定された記事は見つかりませんでした．</p>
    `;
    return;
  }

  document.title = post.title + "｜ブログ｜しぃとのホームページ";

  const dateHtml = post.date ? `<p class="blog-post-date">${post.date}</p>` : "";
  const descriptionHtml = post.description ? `<p class="blog-post-description">${post.description}</p>` : "";

  articleArea.innerHTML = `
    <h1 class="definition-title">${post.title}</h1>
    ${dateHtml}
    ${descriptionHtml}
    <div class="blog-article-body">
      ${post.bodyHtml || ""}
    </div>
  `;

  typesetMathInElement(articleArea);
}

renderBlogPostList();
renderBlogArticle();
