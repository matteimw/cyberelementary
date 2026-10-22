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
  { href: "curriculum.html", label: "Curriculum" },
  { href: "videos.html", label: "Videos" },
  { href: "reviews.html", label: "Reviews" },
  { href: "deals.html", label: "Today's Savings" },
  { href: "articles.html", label: "Blog" },
  { href: "about.html", label: "About" },
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
      <div class="nav-right">
        <nav class="main-nav" aria-label="Main navigation">${navHtml}</nav>
        <button type="button" class="share-btn" data-share-open aria-haspopup="dialog" aria-label="Share this site">📤<span class="share-label"> Share</span></button>
      </div>
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
        <button type="button" class="share-btn footer-share" data-share-open aria-haspopup="dialog">📤 Share this site</button>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="books.html">Books</a></li>
          <li><a href="curriculum.html">Curriculum</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="deals.html">Today's Savings</a></li>
          <li><a href="articles.html">Blog</a></li>
          <li><a href="about.html">About</a></li>
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
      <div>&copy; <span id="year"></span> Baldwin Terney Press LLC. All rights reserved.
        · <a href="privacy-policy.html">Privacy Policy</a> · <a href="terms-and-conditions.html">Terms</a></div>
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

// White pill "Buy on IngramSpark" button shown under the Amazon button
// when a book in books.js has an "ingram" link. Used by the Books page,
// the home page, and renderBooks() below.
function ingramButton(b) {
  if (!b.ingram) return "";
  return `
          <a class="btn btn-ingram btn-sm btn-block" href="${b.ingram}" target="_blank" rel="noopener">
            📦 Buy on IngramSpark
          </a>`;
}

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
        <div class="card-actions card-actions-top">
          <a class="btn btn-amazon btn-sm btn-block" href="${buildAmazonLink(b.amazon)}" target="_blank" rel="nofollow sponsored noopener">
            🛒 Buy on Amazon
          </a>
          ${ingramButton(b)}
        </div>
        <h3>${b.title}</h3>
        ${b.subtitle ? `<p class="card-subtitle">${b.subtitle}</p>` : ""}
        ${(b.grade || b.audience) ? `<div class="card-meta">${[b.grade, b.audience].filter(Boolean).join(" · ")}</div>` : ""}
        <p class="card-desc">${b.description}</p>
        ${b.formats ? `<div class="card-meta">📕 ${b.formats}</div>` : ""}
      </div>
    </article>
  `).join("");
}

/* ---------------- Teachers Pay Teachers (TPT) digital downloads ---------------- */
/* Data lives in assets/js/data/tpt.js (TPT_PRODUCTS). Two layouts:
   renderTptGrades(mountId)        - home page: one tile per grade, with both
                                     products (Lessons + Slides, Workbook +
                                     Quizzes) as buttons.
   renderTptProducts(mountId, type) - Books page: one full card per product,
                                     filtered by type ("lessons"/"workbook").
   Pages that don't load tpt.js or don't have the mount just skip it. */

const GRADE_LABEL = { "3": "3rd Grade", "4": "4th Grade", "5": "5th Grade", "6": "6th Grade" };

function tptButton(p, label) {
  return `<a class="btn btn-tpt btn-sm btn-block" href="${p.url}" target="_blank" rel="noopener">${label}</a>`;
}

function renderTptGrades(mountId) {
  const mount = document.getElementById(mountId);
  if (!mount || typeof TPT_PRODUCTS === "undefined") return;
  const grades = [...new Set(TPT_PRODUCTS.map((p) => p.grade))];
  mount.innerHTML = grades.map((g) => {
    const lessons = TPT_PRODUCTS.find((p) => p.grade === g && p.type === "lessons");
    const workbook = TPT_PRODUCTS.find((p) => p.grade === g && p.type === "workbook");
    const cover = (lessons || workbook).cover;
    return `
      <article class="card tpt-grade-card">
        <div class="card-media tpt-media">
          ${mediaBlock(cover, "📄", `${GRADE_LABEL[g] || g} Cyber & AI Safety digital lessons on Teachers Pay Teachers`)}
        </div>
        <div class="card-body">
          <h3>${GRADE_LABEL[g] || g + " Grade"}</h3>
          <div class="card-actions tpt-actions">
            ${lessons ? tptButton(lessons, `📘 Lessons + Slides${lessons.price ? ` · ${lessons.price}` : ""}`) : ""}
            ${workbook ? tptButton(workbook, `✏️ Workbook + Quizzes${workbook.price ? ` · ${workbook.price}` : ""}`) : ""}
          </div>
        </div>
      </article>`;
  }).join("");
}

function renderTptProducts(mountId, type) {
  const mount = document.getElementById(mountId);
  if (!mount || typeof TPT_PRODUCTS === "undefined") return;
  const items = TPT_PRODUCTS.filter((p) => !type || p.type === type);
  mount.innerHTML = items.map((p) => `
    <article class="card tpt-card">
      <div class="card-media tpt-media">
        ${p.badge ? `<span class="card-badge card-badge-tpt">${p.badge}</span>` : ""}
        ${mediaBlock(p.cover, "📄", p.title)}
      </div>
      <div class="card-body">
        <div class="card-actions card-actions-top">
          ${tptButton(p, `🍎 Get it on TPT${p.price ? ` · ${p.price}` : ""}`)}
        </div>
        <h3>${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        ${p.includes && p.includes.length ? `<ul class="tpt-includes">${p.includes.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}
        <div class="card-meta">📄 Instant PDF download</div>
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
    <article class="card video-card${v.featured ? " video-card-featured" : ""}" id="${v.id}-${slugify(v.title)}">
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
          ${SITE_CONFIG.youtubeChannelId ? `
          <span class="ytsubscribe-wrap">
            <span class="ytsubscribe-label">Subscribe:</span>
            <div class="g-ytsubscribe" data-channelid="${SITE_CONFIG.youtubeChannelId}" data-layout="default" data-count="default" data-theme="default"></div>
          </span>
          ` : ""}
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
          <a class="btn ${r.linkType === "amazon" ? "btn-amazon" : "btn-primary"} btn-sm" href="${href}" target="_blank" ${relAttr}${r.linkType === "amazon" ? "" : ' data-track="other-link"'}>
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

  mount.innerHTML = DEALS.map((d) => {
    const isOther = d.linkType === "other";
    const href = isOther ? d.link : buildAmazonLink(d.amazon);
    const defaultLabel = isOther ? "Check It Out" : "Shop This Deal";
    const trackAttr = isOther ? ' data-track="other-link"' : "";
    return `
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
          <a class="btn ${isOther ? "btn-primary" : "btn-amazon"} btn-sm" href="${href}" target="_blank" rel="nofollow sponsored noopener"${trackAttr}>
            ${isOther ? "🔗" : "🛒"} ${d.linkLabel || defaultLabel}
          </a>
        </div>
      </div>
    </article>
  `;
  }).join("");
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

/* ---------------- Share button + popup ---------------- */
/* The "Share" button in the header (and the "Share this site" button in the
   footer) opens a popup with Facebook, X, LinkedIn, Instagram, TikTok,
   WhatsApp, Email and Copy Link. Wording and the site address come from
   SITE_CONFIG.share in config.js — edit them there.

   Instagram and TikTok don't offer a web "share this link" page like
   Facebook/X/LinkedIn do. So on phones, those buttons open the phone's own
   share sheet (where the Instagram/TikTok apps appear); on computers, they
   copy the link and open Instagram/TikTok in a new tab so the visitor can
   paste it into a post, story, bio or message.

   Every shared link gets UTM tags (utm_source=facebook, etc.) so Google
   Analytics shows which platform each visitor came from, and every click
   fires a GA4 "share" event. */

const SHARE_PLATFORMS = [
  { key: "facebook",  label: "Facebook",  icon: "📘", url: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  { key: "x",         label: "X",         icon: "✖️", url: (u, t) => `https://x.com/intent/post?url=${u}&text=${t}` },
  { key: "linkedin",  label: "LinkedIn",  icon: "💼", url: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  { key: "instagram", label: "Instagram", icon: "📸", app: "https://www.instagram.com/" },
  { key: "tiktok",    label: "TikTok",    icon: "🎵", app: "https://www.tiktok.com/" },
  { key: "whatsapp",  label: "WhatsApp",  icon: "💬", url: (u, t) => `https://wa.me/?text=${t}%20${u}` },
  { key: "email",     label: "Email",     icon: "✉️", url: (u, t, s) => `mailto:?subject=${s}&body=${t}%0A%0A${u}` },
  { key: "copy",      label: "Copy link", icon: "🔗" },
];

function shareConfig() {
  const c = SITE_CONFIG.share || {};
  return {
    siteUrl: (c.siteUrl || "https://www.cyberelementary.com").replace(/\/$/, ""),
    siteText: c.siteText || "Free cyber safety video lessons and books for kids in grades 3-6 from Cyber Elementary",
    hashtags: c.hashtags || "",
  };
}

// Address being shared: the whole site, or the page the visitor is on.
function shareTarget(scope) {
  const c = shareConfig();
  const page = currentPage();
  const onHome = !page || page === "index.html";
  if (scope === "site" || onHome) return { url: c.siteUrl + "/", text: c.siteText };
  const title = (document.title || "").replace(/\s+[—|-]\s+Cyber Elementary.*$/i, "").trim();
  return { url: c.siteUrl + "/" + page, text: (title ? title + " — " : "") + "Cyber Elementary" };
}

function withUtm(url, source) {
  try {
    const u = new URL(url);
    u.searchParams.set("utm_source", source);
    u.searchParams.set("utm_medium", "social");
    u.searchParams.set("utm_campaign", "share_button");
    return u.toString();
  } catch (e) {
    return url;
  }
}

function copyText(text) {
  // Synchronous copy first (works everywhere, keeps the click "user gesture"
  // intact so the Instagram/TikTok tab can still open right after).
  let ok = false;
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    ok = document.execCommand("copy");
    document.body.removeChild(ta);
  } catch (e) { ok = false; }
  if (!ok && navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {});
    ok = true;
  }
  return ok;
}

function isPhone() {
  return !!(navigator.share && window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
}

function trackShare(method, url) {
  if (window.gtag) window.gtag("event", "share", { method, content_type: "page", item_id: url, page_path: window.location.pathname });
}

function buildShareModal() {
  const page = currentPage();
  const onHome = !page || page === "index.html";
  const wrap = document.createElement("div");
  wrap.id = "share-modal";
  wrap.className = "share-modal";
  wrap.hidden = true;
  wrap.innerHTML = `
    <div class="share-backdrop" data-share-close></div>
    <div class="share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-title">
      <button class="share-close" type="button" aria-label="Close" data-share-close>✕</button>
      <h3 id="share-title">Share Cyber Elementary</h3>
      <p class="share-sub">Help other parents and teachers find free cyber safety lessons for kids.</p>
      ${onHome ? "" : `
      <div class="share-scope" role="radiogroup" aria-label="What to share">
        <label><input type="radio" name="share-scope" value="page" checked> This page</label>
        <label><input type="radio" name="share-scope" value="site"> Whole site</label>
      </div>`}
      <div class="share-grid">
        ${SHARE_PLATFORMS.map((p) => `
          <button type="button" class="share-opt share-${p.key}" data-share="${p.key}">
            <span class="share-ico" aria-hidden="true">${p.icon}</span>${p.label}
          </button>`).join("")}
      </div>
      <div class="share-url-row">
        <input type="text" class="share-url" readonly aria-label="Link to share">
      </div>
      <p class="share-msg" role="status" aria-live="polite"></p>
    </div>`;
  document.body.appendChild(wrap);

  const urlBox = wrap.querySelector(".share-url");
  const msg = wrap.querySelector(".share-msg");
  const scope = () => (wrap.querySelector('input[name="share-scope"]:checked') || {}).value || "page";
  const refresh = () => { urlBox.value = shareTarget(scope()).url; msg.textContent = ""; };
  wrap.addEventListener("change", refresh);
  urlBox.addEventListener("focus", () => urlBox.select());

  wrap.addEventListener("click", (e) => {
    if (e.target.closest("[data-share-close]")) { closeShareModal(); return; }
    const btn = e.target.closest("[data-share]");
    if (!btn) return;
    const p = SHARE_PLATFORMS.find((x) => x.key === btn.dataset.share);
    const t = shareTarget(scope());
    const link = withUtm(t.url, p.key);
    const tags = shareConfig().hashtags;
    const text = t.text + (tags && (p.key === "x") ? " " + tags.split(",").map((h) => "#" + h.trim()).join(" ") : "");
    trackShare(p.key, t.url);

    if (p.key === "copy") {
      copyText(link);
      msg.textContent = "✅ Link copied — paste it anywhere.";
      return;
    }
    if (p.app) {
      if (isPhone()) {
        navigator.share({ title: "Cyber Elementary", text: t.text, url: link }).catch(() => {});
        return;
      }
      copyText(link);
      msg.textContent = `✅ Link copied! Paste it into your ${p.label} post, story, bio or message.`;
      window.open(p.app, "_blank", "noopener");
      return;
    }
    const href = p.url(encodeURIComponent(link), encodeURIComponent(text), encodeURIComponent(t.text));
    if (p.key === "email") { window.location.href = href; return; }
    window.open(href, "_blank", "noopener,width=640,height=600");
  });

  wrap._refresh = refresh;
  return wrap;
}

let shareReturnFocus = null;
function openShareModal() {
  const m = document.getElementById("share-modal") || buildShareModal();
  m._refresh();
  shareReturnFocus = document.activeElement;
  m.hidden = false;
  document.body.classList.add("share-open");
  const first = m.querySelector(".share-opt");
  if (first) first.focus();
}

function closeShareModal() {
  const m = document.getElementById("share-modal");
  if (!m || m.hidden) return;
  m.hidden = true;
  document.body.classList.remove("share-open");
  if (shareReturnFocus && shareReturnFocus.focus) shareReturnFocus.focus();
}

function initShare() {
  document.addEventListener("click", (e) => {
    if (e.target.closest && e.target.closest("[data-share-open]")) { e.preventDefault(); openShareModal(); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeShareModal(); });
}

/* ---------------- Analytics (Google Analytics 4) ---------------- */
/* Loads GA4 automatically on every page, past and future, once you paste a
   real Measurement ID into SITE_CONFIG.gaMeasurementId (assets/js/config.js)
   — nothing else to edit. Until you paste a real ID, this does nothing.

   Besides ordinary pageviews, this also fires a custom "affiliate_click"
   event any time someone clicks a Buy on Amazon / Shop This Deal / Kindle
   trial button (anything linking to amazon.* or amzn.to), tagged with which
   item and which page it happened on — that's what lets you see clicks
   toward a purchase in GA4, not just visits. It also tags outbound clicks to
   your other sites (Baldwin Terney Press, Rachel Mattei, Baldwin Terney
   Consulting) as "family_site_click" events, clicks to your YouTube
   channel link as "youtube_click", and clicks on any non-Amazon affiliate
   button (reviews/deals with linkType "other" — Outschool/Awin, Impact,
   HackerDNA, etc.) as "other_click", and clicks to Teachers Pay Teachers
   (assets/js/data/tpt.js) as "tpt_click", so you can see which cross-promotion is
   actually working. */

function loadAnalytics() {
  const id = SITE_CONFIG.gaMeasurementId;
  if (!id || id === "G-XXXXXXXXXX") return; // not configured yet — no-op

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id);

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link || !link.href) return;

    const isAmazon = /amazon\.[a-z.]+|amzn\.to/i.test(link.href);
    const isYouTube = /youtube\.com/i.test(link.href);
    const isIngram = /ingramspark\.com/i.test(link.href);
    const isTpt = /teacherspayteachers\.com/i.test(link.href);
    const familySite = SITE_CONFIG.familySites.find((s) => link.href.startsWith(s.url));

    if (isAmazon) {
      const card = link.closest(".card");
      const itemName = card ? (card.querySelector("h3")?.textContent || "") : "";
      gtag("event", "affiliate_click", {
        link_url: link.href,
        item_name: itemName,
        page_path: window.location.pathname,
      });
    } else if (isIngram) {
      const card = link.closest(".card");
      const itemName = card ? (card.querySelector("h3")?.textContent || "") : "";
      gtag("event", "ingram_click", {
        link_url: link.href,
        item_name: itemName,
        page_path: window.location.pathname,
      });
    } else if (isTpt) {
      const card = link.closest(".card");
      const itemName = card ? (card.querySelector("h3")?.textContent || "") : "";
      gtag("event", "tpt_click", {
        link_url: link.href,
        item_name: itemName,
        page_path: window.location.pathname,
      });
    } else if (familySite) {
      gtag("event", "family_site_click", {
        site_name: familySite.name,
        page_path: window.location.pathname,
      });
    } else if (isYouTube) {
      gtag("event", "youtube_click", {
        link_url: link.href,
        page_path: window.location.pathname,
      });
    } else if (link.dataset.track === "other-link") {
      const card = link.closest(".card");
      const itemName = card ? (card.querySelector("h3")?.textContent || "") : "";
      gtag("event", "other_click", {
        link_url: link.href,
        item_name: itemName,
        page_path: window.location.pathname,
      });
    }
  });
}

/* ---------------- YouTube Subscribe button widget ---------------- */
/* Renders Google's official embeddable "Subscribe" button (with live
   subscriber count) on every video card on the Videos page — a real
   one-click subscribe, not just a link to the channel. Configured once via
   SITE_CONFIG.youtubeChannelId (config.js); does nothing if that's blank.

   renderVideos() already wrote a <div class="g-ytsubscribe" ...> into each
   card before this runs. We set parsetags to "explicit" (instead of
   Google's default "onload" auto-scan) so the widget only renders once we
   explicitly call gapi.ytsubscribe.go() below — that avoids any race with
   exactly when the async platform.js script finishes loading relative to
   when the video cards get injected. */

function loadYouTubeSubscribeWidget() {
  if (!SITE_CONFIG.youtubeChannelId) return; // not configured yet — no-op
  if (!document.querySelector(".g-ytsubscribe")) return; // not on this page

  window.___gcfg = { parsetags: "explicit" };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://apis.google.com/js/platform.js";
  script.onload = () => {
    if (window.gapi && window.gapi.ytsubscribe) {
      window.gapi.ytsubscribe.go();
    }
  };
  document.head.appendChild(script);
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
  loadAnalytics();
  loadYouTubeSubscribeWidget();
  initShare();
});
