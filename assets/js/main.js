/* =========================================================================
   MAIN.JS — shared header/footer + card renderers
   Loaded on every page, after config.js and any data/*.js files that page
   needs. Nothing here should need editing for day-to-day content updates —
   edit the data/*.js files instead.
   ========================================================================= */

/* ---------------- Shared header + footer ---------------- */

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "books.html", label: "Books" },
  { href: "videos.html", label: "Videos" },
  { href: "reviews.html", label: "Reviews" },
  { href: "deals.html", label: "Today's Savings" },
  { href: "articles.html", label: "Blog" },
  { href: "index.html#contact", label: "Contact" },
];

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const here = currentPage();

  const navHtml = NAV_LINKS.map((l) => {
    const isCurrent = l.href.split("#")[0] === here || (here === "" && l.href === "index.html");
    return `<a href="${l.href}" ${isCurrent ? 'aria-current="page"' : ""}>${l.label}</a>`;
  }).join("");

  const logoInner = SITE_CONFIG.mascotImage
    ? `<img src="${SITE_CONFIG.mascotImage}" alt="Cyber Elementary mascot" />`
    : SITE_CONFIG.mascotEmoji;

  mount.innerHTML = `
    <div class="promo-strip">
      📚 New: browse Cyber Elementary books on our <a href="books.html">Books</a> page.
    </div>
    <div class="nav-bar wrap">
      <a class="brand" href="index.html">
        <span class="logo-badge" aria-hidden="true">${logoInner}</span>
        Cyber Elementary
      </a>
      <nav class="main-nav" aria-label="Main navigation">${navHtml}</nav>
    </div>
  `;
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  const familyHtml = SITE_CONFIG.familySites
    .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`)
    .join("");

  // Icons for each social key SITE_CONFIG.social might have. Add a platform
  // by adding it to config.js — no changes needed here. Remove one by
  // deleting it from config.js (or setting it to "").
  const SOCIAL_ICONS = {
    facebook: "📘",
    instagram: "📸",
    linkedin: "💼",
    youtube: "▶️",
    twitter: "🐦",
    tiktok: "🎵",
  };
  const socialHtml = Object.keys(SOCIAL_ICONS)
    .filter((key) => SITE_CONFIG.social[key])
    .map((key) => `<a href="${SITE_CONFIG.social[key]}" target="_blank" rel="noopener" aria-label="${key[0].toUpperCase()}${key.slice(1)}">${SOCIAL_ICONS[key]}</a>`)
    .join("");

  mount.innerHTML = `
    <div class="wrap">
      <div class="footer-col">
        <h4>Cyber Elementary</h4>
        <p style="max-width:26ch; color:rgba(255,255,255,0.75); font-size:0.9rem;">
          Cybersecurity and digital-safety learning for elementary-age kids —
          books, articles, and family-friendly picks.
        </p>
        <div class="social-row">${socialHtml}</div>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="books.html">Books</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="deals.html">Today's Savings</a></li>
          <li><a href="articles.html">Blog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Our Family of Sites</h4>
        <ul>${familyHtml}</ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:${SITE_CONFIG.contactEmail}">${SITE_CONFIG.contactEmail}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; <span id="year"></span> Baldwin Terney Press LLC. All rights reserved.</div>
      <p class="disclosure">
        As an Amazon Associate, Cyber Elementary earns from qualifying purchases.
        Some links on this site are affiliate links, which means we may earn a
        small commission at no extra cost to you.
      </p>
    </div>
  `;
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------------- Small render helpers ---------------- */

function starString(rating) {
  const full = Math.round(rating * 2) / 2;
  let out = "";
  for (let i = 1; i <= 5; i++) {
    if (full >= i) out += "★";
    else if (full >= i - 0.5) out += "⯪";
    else out += "☆";
  }
  return out;
}

function mediaBlock(imagePath, icon, altText) {
  if (imagePath) {
    return `<img src="${imagePath}" alt="${altText}" loading="lazy" />`;
  }
  return `<span aria-hidden="true">${icon || "🛡️"}</span>`;
}

/* ---------------- Books ---------------- */

function renderBooks() {
  const mount = document.getElementById("books-grid");
  if (!mount || typeof BOOKS === "undefined") return;

  if (BOOKS.length === 0) {
    mount.innerHTML = `<div class="empty-state">No books added yet — add your first title in assets/js/data/books.js.</div>`;
    return;
  }

  mount.innerHTML = BOOKS.map((b) => `
    <article class="card book-card">
      <div class="card-media">
        ${b.badge ? `<span class="card-badge">${b.badge}</span>` : ""}
        ${b.freePromo ? `<img class="free-stamp" src="assets/images/badges/free-stamp.svg" alt="Free for a limited time" />` : ""}
        ${mediaBlock(b.cover, b.icon, b.title)}
      </div>
      <div class="card-body">
        <h3>${b.title}</h3>
        ${b.subtitle ? `<p class="card-subtitle">${b.subtitle}</p>` : ""}
        ${(b.grade || b.audience) ? `<div class="card-meta">${[b.grade, b.audience].filter(Boolean).join(" · ")}</div>` : ""}
        <p class="card-desc">${b.description}</p>
        ${b.formats ? `<div class="card-meta">📕 ${b.formats}</div>` : ""}
        <div class="card-actions">
          <a class="btn btn-amazon btn-sm btn-block" href="${buildAmazonLink(b.amazon)}" target="_blank" rel="nofollow sponsored noopener">
            🛒 Buy on Amazon
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------------- Videos ---------------- */

function renderVideos() {
  const mount = document.getElementById("videos-grid");
  if (!mount || typeof VIDEOS === "undefined") return;

  if (VIDEOS.length === 0) {
    mount.innerHTML = `<div class="empty-state">No videos added yet — add your first video in assets/js/data/videos.js.</div>`;
    return;
  }

  mount.innerHTML = VIDEOS.map((v) => `
    <article class="card video-card" id="${v.id}-${slugify(v.title)}">
      <div class="card-media">
        ${v.badge ? `<span class="card-badge">${v.badge}</span>` : ""}
        <iframe
          src="https://www.youtube-nocookie.com/embed/${v.id}"
          title="${v.title}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <div class="card-body">
        <h3>${v.title}</h3>
        <p class="card-desc">${v.description}</p>
        <div class="card-actions">
          <button class="btn btn-outline btn-sm" onclick="copyShareLink('${v.id}-${slugify(v.title)}', this)">
            🔗 Copy share link
          </button>
        </div>
      </div>
    </article>
  `).join("");

  // If the page was opened with a #hash matching a video, scroll to and
  // highlight it — this is what makes social-media "link in bio" style
  // links jump straight to one video.
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      target.style.outline = "3px solid var(--teal)";
      target.style.outlineOffset = "4px";
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
    }
  }
}

function slugify(text) {
  return (text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function copyShareLink(anchorId, btn) {
  const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
  navigator.clipboard.writeText(url).then(() => {
    const original = btn.textContent;
    btn.textContent = "✅ Link copied!";
    setTimeout(() => (btn.textContent = original), 1800);
  }).catch(() => {
    prompt("Copy this link:", url);
  });
}

/* ---------------- Reviews ---------------- */

function renderReviews() {
  const mount = document.getElementById("reviews-grid");
  if (!mount || typeof REVIEWS === "undefined") return;

  if (REVIEWS.length === 0) {
    mount.innerHTML = `<div class="empty-state">No reviews added yet — add your first review in assets/js/data/reviews.js.</div>`;
    return;
  }

  mount.innerHTML = REVIEWS.map((r) => {
    const href = r.linkType === "amazon" ? buildAmazonLink(r.linkTarget) : r.linkTarget;
    const relAttr = r.linkType === "amazon" ? 'rel="nofollow sponsored noopener"' : 'rel="noopener"';
    return `
    <article class="card review-card">
      <div class="card-media">
        ${r.badge ? `<span class="card-badge">${r.badge}</span>` : ""}
        ${mediaBlock(r.image, r.icon, r.productName)}
      </div>
      <div class="card-body">
        <h3>${r.productName}</h3>
        <div class="stars" aria-label="${r.rating} out of 5 stars">${starString(r.rating)} <span class="card-meta">${r.rating}/5</span></div>
        <p class="card-desc">${r.summary}</p>
        <div class="card-actions">
          <a class="btn ${r.linkType === "amazon" ? "btn-amazon" : "btn-primary"} btn-sm" href="${href}" target="_blank" ${relAttr}>
            ${r.linkType === "amazon" ? "🛒" : "🔗"} ${r.linkLabel || "Learn More"}
          </a>
        </div>
      </div>
    </article>
  `;
  }).join("");
}

/* ---------------- Deals ---------------- */

function renderDeals() {
  const mount = document.getElementById("deals-grid");
  if (!mount || typeof DEALS === "undefined") return;

  if (DEALS.length === 0) {
    mount.innerHTML = `<div class="empty-state">No deals posted right now — add one in assets/js/data/deals.js.</div>`;
    return;
  }

  mount.innerHTML = DEALS.map((d) => `
    <article class="card deal-card">
      <div class="card-media">
        ${d.badge ? `<span class="card-badge">${d.badge}</span>` : ""}
        ${mediaBlock(d.image, d.icon, d.title)}
      </div>
      <div class="card-body">
        <h3>${d.title}</h3>
        ${
          d.dealType === "time-bound"
            ? `<span class="deal-expiry">⏳ ${d.expires || "Limited time"}</span>`
            : `<span class="deal-evergreen">🔁 Always available</span>`
        }
        <p class="card-desc">${d.description}</p>
        <div class="card-actions">
          <a class="btn btn-amazon btn-sm" href="${buildAmazonLink(d.amazon)}" target="_blank" rel="nofollow sponsored noopener">
            🛒 Shop This Deal
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------------- Articles / Blog ---------------- */

function renderArticles() {
  const mount = document.getElementById("articles-grid");
  if (!mount || typeof ARTICLES === "undefined") return;

  if (ARTICLES.length === 0) {
    mount.innerHTML = `<div class="empty-state">No articles posted yet — add your first one in assets/js/data/articles.js.</div>`;
    return;
  }

  mount.innerHTML = ARTICLES.map((a) => {
    const isExternal = /^https?:\/\//i.test(a.url);
    const linkAttrs = isExternal ? ` target="_blank" rel="noopener"` : "";
    const linkLabel = isExternal ? "🔗 Visit Resource" : "📖 Read Article";
    return `
    <article class="card article-card">
      <div class="card-media">
        ${a.badge ? `<span class="card-badge">${a.badge}</span>` : ""}
        ${isExternal ? `<span class="card-badge card-badge-external">EXTERNAL RESOURCE</span>` : ""}
        ${mediaBlock(a.image, a.icon || "📝", a.title)}
      </div>
      <div class="card-body">
        <h3>${a.title}</h3>
        <div class="card-meta">By ${a.author} · ${a.date}</div>
        <p class="card-desc">${a.excerpt}</p>
        <div class="card-actions">
          <a class="btn btn-primary btn-sm" href="${a.url}"${linkAttrs}>${linkLabel}</a>
        </div>
      </div>
    </article>
  `;
  }).join("");
}

/* ---------------- Kindle Unlimited plans ---------------- */

function renderKindle() {
  const mount = document.getElementById("kindle-grid");
  if (!mount || typeof KINDLE_PLANS === "undefined") return;

  mount.innerHTML = KINDLE_PLANS.map((k) => `
    <article class="card kindle-card">
      <div class="card-media">
        ${k.badge ? `<span class="card-badge">${k.badge}</span>` : ""}
        ${mediaBlock(k.image, k.icon, k.title)}
      </div>
      <div class="card-body">
        <h3>${k.title}</h3>
        <p class="card-desc">${k.description}</p>
        <div class="card-actions">
          <a class="btn btn-amazon btn-sm btn-block" href="${k.url}" target="_blank" rel="nofollow sponsored noopener">
            ✅ Get Started
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------------- Kindle teaser (home page "Today's Savings") ---------------- */
/* Home page only shows the single most important thing: the free Kindle
   trial (always KINDLE_PLANS[0]), centered, so it doesn't compete with the
   book series for attention. The full list of plans + other deals lives on
   deals.html — see renderKindle() above. */

function renderKindleTeaser() {
  const mount = document.getElementById("kindle-teaser");
  if (!mount || typeof KINDLE_PLANS === "undefined" || !KINDLE_PLANS[0]) return;

  const k = KINDLE_PLANS[0];
  mount.innerHTML = `
    <article class="card kindle-card" style="max-width:340px; margin:0 auto;">
      <div class="card-media">
        ${k.badge ? `<span class="card-badge">${k.badge}</span>` : ""}
        ${mediaBlock(k.image, k.icon, k.title)}
      </div>
      <div class="card-body">
        <h3>${k.title}</h3>
        <p class="card-desc">${k.description}</p>
        <div class="card-actions">
          <a class="btn btn-amazon btn-sm btn-block" href="${k.url}" target="_blank" rel="nofollow sponsored noopener">
            ✅ Get Started
          </a>
        </div>
      </div>
    </article>
  `;
}

/* ---------------- Sticky cross-page promo bar ---------------- */
/* Shown fixed to the bottom of every page so visitors can always find the
   "no Kindle app / no Amazon account yet?" path into the book series,
   without hunting for it on each page. Uses the same BOOKS/KINDLE_PLANS
   data — nothing to edit here to keep it current. */

function renderStickyBar() {
  const mount = document.getElementById("sticky-bar");
  if (!mount) return;

  const kindleUrl = typeof KINDLE_PLANS !== "undefined" && KINDLE_PLANS[0] ? KINDLE_PLANS[0].url : "#";
  const booksHref = currentPage() === "books.html" ? "#books-grid" : "books.html";

  const message = "🦕 New here? No Kindle app or Amazon account yet? Grab a free Kindle Unlimited trial, then dive into the Cyber Elementary book series. &nbsp;&nbsp;&nbsp;&nbsp;";

  mount.innerHTML = `
    <div class="sticky-bar" role="complementary" aria-label="Quick links to Kindle sign-up and the book series">
      <div class="sticky-bar-marquee">
        <div class="sticky-bar-track">
          <span>${message}</span><span>${message}</span>
        </div>
      </div>
      <div class="sticky-bar-actions">
        <a class="btn btn-amazon btn-sm" href="${kindleUrl}" target="_blank" rel="nofollow sponsored noopener">📱 Free Kindle Trial</a>
        <a class="btn btn-primary btn-sm" href="${booksHref}">📚 Shop the Books</a>
        <button class="sticky-bar-close" aria-label="Hide this bar" onclick="document.getElementById('sticky-bar').style.display='none'; document.body.classList.remove('has-sticky-bar');">✕</button>
      </div>
    </div>
  `;
  document.body.classList.add("has-sticky-bar");
}

/* ---------------- Init ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderBooks();
  renderVideos();
  renderReviews();
  renderDeals();
  renderArticles();
  renderKindle();
  renderStickyBar();
});
