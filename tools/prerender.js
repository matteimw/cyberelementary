#!/usr/bin/env node
/* =========================================================================
   PRERENDER — makes the site readable by AI chat crawlers & search engines
   =========================================================================
   WHY THIS EXISTS
   ---------------
   The book, video, review, deal and article cards are drawn by JavaScript
   from the files in assets/js/data/. Google runs that JavaScript, but most
   AI crawlers (ChatGPT, Claude, Perplexity) do not — they only see the raw
   HTML, which used to contain empty grids.

   This script runs the site's own render code (main.js + each page's inline
   script) inside Node and writes the finished cards straight into the HTML
   files. It also adds a <script type="application/ld+json"> block to each
   page's <head> describing the books, videos, reviews and articles in
   schema.org terms that search engines and AI tools understand.

   HOW TO USE IT
   -------------
   You keep editing the data files exactly as before. Then, before you
   publish, run this from inside the cyberelementary-site folder:

       node tools/prerender.js

   ...and then the usual  git add . && git commit -m "..." && git push

   If you forget to run it, nothing breaks: visitors still see the latest
   data (the JavaScript re-draws every card on page load). Only crawlers
   would see the previous version until the next run.

   Safe to run as often as you like — it only replaces the content between
   its own <!--prerender:start--> / <!--prerender:end--> and
   <!--jsonld:start--> / <!--jsonld:end--> markers.
   ========================================================================= */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://www.cyberelementary.com";

// Optional per-site facts used in the structured data.
const DEFAULT_BOOK_AUTHOR = "Mark W. Mattei";
const PUBLISHER_NAME = "Baldwin Terney Press LLC";
const PUBLISHER_URL = "https://www.baldwinterneypress.com";

// Elements that should NOT be pre-rendered (need JS-only side effects).
const SKIP_IDS = new Set(["sticky-bar", "year"]);

/* ---------------- Fake browser for running the site's own JS ---------------- */

function makeEl(id) {
  return {
    id,
    _html: null,
    get innerHTML() { return this._html || ""; },
    set innerHTML(v) { this._html = String(v); },
    textContent: "",
    style: {},
    dataset: {},
    classList: { add() {}, remove() {}, contains() { return false; } },
    appendChild() {}, insertBefore() {}, setAttribute() {}, scrollIntoView() {},
    parentNode: { insertBefore() {} },
    querySelector() { return null; },
    querySelectorAll() { return []; },
  };
}

function makeContext(pageName) {
  const els = new Map();
  const ready = [];
  const document = {
    getElementById(id) {
      if (!els.has(id)) els.set(id, makeEl(id));
      return els.get(id);
    },
    addEventListener(type, fn) { if (type === "DOMContentLoaded") ready.push(fn); },
    createElement() { return makeEl(null); },
    getElementsByTagName() { return [makeEl(null)]; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    head: makeEl("head"),
    body: makeEl("body"),
  };
  const ctx = {
    document,
    location: { pathname: "/" + pageName, hash: "", origin: SITE, href: SITE + "/" + pageName },
    navigator: { clipboard: { writeText: () => Promise.resolve() } },
    setTimeout() {}, clearTimeout() {},
    console, URL, Date, Math, JSON, Promise,
    prompt() {}, alert() {},
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  return { ctx, els, ready };
}

function run(ctx, code, label) {
  try {
    vm.runInContext(code, ctx, { filename: label });
  } catch (e) {
    console.warn(`  ! skipped ${label}: ${e.message}`);
  }
}

/* ---------------- HTML helpers ---------------- */

function stripTags(s) {
  return String(s || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\s+/g, " ").trim();
}
function abs(p) {
  if (!p) return undefined;
  return /^https?:\/\//i.test(p) ? p : `${SITE}/${p.replace(/^\//, "")}`;
}
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function slugify(t) {
  return (t || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// In the pre-rendered copy, swap each YouTube player for a thumbnail that
// links to the video. Crawlers get a real link + image, and the browser
// doesn't load 40 players twice (the JavaScript swaps the real players in).
function iframesToThumbnails(html) {
  return html.replace(
    /<iframe\b[^>]*?src="https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/([\w-]+)"[^>]*?title="([^"]*)"[^>]*>\s*<\/iframe>/g,
    (_, id, title) =>
      `<a href="https://www.youtube.com/watch?v=${id}" style="display:block;width:100%;height:100%" target="_blank" rel="noopener">` +
      `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${title}" loading="lazy" /></a>`
  );
}

// Put `content` inside the element with this id. First run: element must be
// empty. Later runs: replace what's between our markers.
function injectById(html, id, content) {
  const open = new RegExp(`<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*\\sid="${escapeRe(id)}"[^>]*>`);
  const m = open.exec(html);
  if (!m) return { html, ok: false };
  const tag = m[1];
  const start = m.index + m[0].length;
  const rest = html.slice(start);
  const block = `<!--prerender:start-->${content}<!--prerender:end-->`;

  const marked = /^\s*<!--prerender:start-->[\s\S]*?<!--prerender:end-->/.exec(rest);
  if (marked) {
    return { html: html.slice(0, start) + block + rest.slice(marked[0].length), ok: true };
  }
  const empty = new RegExp(`^\\s*(?=</${tag}>)`).exec(rest);
  if (empty) {
    return { html: html.slice(0, start) + block + rest.slice(empty[0].length), ok: true };
  }
  console.warn(`  ! #${id} already has hand-written content — left alone`);
  return { html, ok: false };
}

function injectJsonLd(html, graph) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2)
    .replace(/</g, "\\u003c");
  const block = `<!--jsonld:start-->\n<script type="application/ld+json">\n${json}\n</script>\n<!--jsonld:end-->`;
  if (/<!--jsonld:start-->[\s\S]*?<!--jsonld:end-->/.test(html)) {
    return html.replace(/<!--jsonld:start-->[\s\S]*?<!--jsonld:end-->/, () => block);
  }
  return html.replace(/<\/head>/i, () => `${block}\n</head>`);
}

function bodyScripts(html) {
  const body = html.slice(html.search(/<body\b/i));
  const out = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(body))) {
    const attrs = m[1];
    if (/type\s*=\s*["']application\/ld\+json/i.test(attrs)) continue;
    const src = /\bsrc\s*=\s*["']([^"']+)["']/i.exec(attrs);
    if (src) {
      if (/^(https?:)?\/\//i.test(src[1])) continue; // external — skip
      const file = path.join(ROOT, src[1]);
      if (fs.existsSync(file)) out.push({ label: src[1], code: fs.readFileSync(file, "utf8") });
    } else if (m[2].trim()) {
      out.push({ label: "inline script", code: m[2] });
    }
  }
  return out;
}

/* ---------------- Structured data (schema.org JSON-LD) ---------------- */

function loadData() {
  const { ctx } = makeContext("index.html");
  for (const f of ["config.js", "data/books.js", "data/videos.js", "data/reviews.js", "data/articles.js"]) {
    const p = path.join(ROOT, "assets/js", f);
    if (fs.existsSync(p)) run(ctx, fs.readFileSync(p, "utf8"), f);
  }
  const get = (n) => vm.runInContext(`typeof ${n} !== "undefined" ? ${n} : undefined`, ctx);
  return {
    config: get("SITE_CONFIG") || {},
    books: get("BOOKS") || [],
    videos: get("VIDEOS") || [],
    reviews: get("REVIEWS") || [],
    articles: get("ARTICLES") || [],
    amazonLink: (x) => vm.runInContext(`buildAmazonLink(${JSON.stringify(x)})`, ctx),
  };
}

const ID = {
  publisher: `${SITE}/#publisher`,
  brand: `${SITE}/#organization`,
  founder: `${SITE}/#founder`,
  website: `${SITE}/#website`,
};

function baseGraph(D) {
  const social = D.config.social || {};
  const clean = (u) => (u ? u.split("?")[0] : u);
  return [
    {
      "@type": "Organization",
      "@id": ID.publisher,
      name: PUBLISHER_NAME,
      url: PUBLISHER_URL,
      sameAs: [social.facebook, social.linkedin].filter(Boolean),
    },
    {
      "@type": "EducationalOrganization",
      "@id": ID.brand,
      name: "Cyber Elementary",
      url: `${SITE}/`,
      logo: abs(D.config.mascotImage),
      description:
        "Cybersecurity, online safety, digital citizenship and AI safety lessons for elementary-age kids (grades 3-6), with lesson plan books, skills workbooks and free video lessons for teachers and homeschool families.",
      parentOrganization: { "@id": ID.publisher },
      founder: { "@id": ID.founder },
      email: D.config.contactEmail,
      sameAs: [clean(social.youtube), social.instagram].filter(Boolean),
    },
    {
      "@type": "Person",
      "@id": ID.founder,
      name: "Mark W. Mattei",
      url: `${SITE}/about.html`,
      worksFor: { "@id": ID.publisher },
    },
    {
      "@type": "WebSite",
      "@id": ID.website,
      url: `${SITE}/`,
      name: "Cyber Elementary",
      inLanguage: "en-US",
      publisher: { "@id": ID.brand },
    },
  ];
}

function bookNode(D, b) {
  const node = {
    "@type": "Book",
    "@id": `${SITE}/books.html#${slugify(b.title)}`,
    name: b.title,
    alternativeHeadline: b.subtitle || undefined,
    description: stripTags(b.description),
    image: abs(b.cover),
    author: { "@type": "Person", name: b.author || DEFAULT_BOOK_AUTHOR },
    publisher: { "@id": ID.publisher },
    inLanguage: "en",
    isbn: b.isbn || undefined,
    educationalLevel: b.grade || undefined,
    audience: b.audience
      ? { "@type": "Audience", audienceType: b.audience.replace(/^For\s+/i, "") }
      : undefined,
    url: `${SITE}/books.html`,
    sameAs: b.amazon ? D.amazonLink(b.amazon) : undefined,
  };
  if (/^Cyber Elementary School\b/i.test(b.title)) {
    node.isPartOf = { "@type": "BookSeries", name: "Cyber Elementary School" };
  }
  return node;
}

function videoNode(v) {
  return {
    "@type": "VideoObject",
    "@id": `${SITE}/videos.html#${v.id}-${slugify(v.title)}`,
    name: v.title,
    description: stripTags(v.description) || v.title,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    url: `${SITE}/videos.html#${v.id}-${slugify(v.title)}`,
    sameAs: `https://www.youtube.com/watch?v=${v.id}`,
    uploadDate: v.uploadDate || undefined,
    isFamilyFriendly: true,
    inLanguage: "en",
    publisher: { "@id": ID.brand },
  };
}

function reviewNode(D, r) {
  const href = r.linkType === "amazon" ? D.amazonLink(r.linkTarget) : r.linkTarget;
  return {
    "@type": "Review",
    itemReviewed: {
      "@type": r.itemType || "Product",
      name: r.productName,
      image: abs(r.image),
      url: href || undefined,
    },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    reviewBody: stripTags(r.summary),
    author: { "@id": ID.brand },
  };
}

function isoDate(s) {
  const d = new Date(s);
  return isNaN(d) ? undefined : d.toISOString().slice(0, 10);
}

function articleNode(a) {
  const external = /^https?:\/\//i.test(a.url);
  const isMark = /mark\s+(w\.\s+)?mattei/i.test(a.author || "");
  return {
    "@type": external ? "CreativeWork" : "BlogPosting",
    headline: a.title,
    name: a.title,
    url: abs(a.url),
    description: stripTags(a.excerpt),
    author: isMark
      ? { "@id": ID.founder }
      : a.author ? { "@type": "Organization", name: a.author } : undefined,
    datePublished: isoDate(a.date),
    publisher: external ? undefined : { "@id": ID.brand },
  };
}

function itemList(name, items) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
  };
}

function pageGraph(D, page, html) {
  const title = stripTags((/<title>([\s\S]*?)<\/title>/i.exec(html) || [])[1]);
  const desc = stripTags((/<meta\s+name="description"\s+content="([^"]*)"/i.exec(html) || [])[1]);
  const url = page === "index.html" ? `${SITE}/` : `${SITE}/${page}`;
  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description: desc || undefined,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.brand },
    inLanguage: "en-US",
  };
  const graph = baseGraph(D);

  if (page === "books.html") {
    webPage["@type"] = "CollectionPage";
    webPage.mainEntity = itemList("Cyber Elementary books", D.books.map((b) => bookNode(D, b)));
  } else if (page === "videos.html") {
    webPage["@type"] = "CollectionPage";
    webPage.mainEntity = itemList("Cyber Elementary video lessons", D.videos.map(videoNode));
  } else if (page === "reviews.html") {
    webPage["@type"] = "CollectionPage";
    webPage.mainEntity = itemList("Cyber Elementary product reviews", D.reviews.map((r) => reviewNode(D, r)));
  } else if (page === "articles.html") {
    webPage["@type"] = "CollectionPage";
    webPage.mainEntity = itemList("Cyber Elementary blog and resources", D.articles.map(articleNode));
  } else if (page === "about.html") {
    webPage["@type"] = "AboutPage";
    webPage.mainEntity = { "@id": ID.founder };
  } else {
    const article = D.articles.find((a) => a.url === page);
    if (article) webPage.mainEntity = articleNode(article);
  }
  graph.push(webPage);
  return graph;
}

/* ---------------- Main ---------------- */

function main() {
  const pages = fs.readdirSync(ROOT).filter(
    (f) => f.endsWith(".html") && !/draft|backup/i.test(f)
  );
  const D = loadData();
  let changed = 0;

  for (const page of pages) {
    const file = path.join(ROOT, page);
    const original = fs.readFileSync(file, "utf8");
    let html = original;

    // 1. Run the page's own scripts in a fake browser and capture output.
    const { ctx, els, ready } = makeContext(page);
    for (const s of bodyScripts(html)) run(ctx, s.code, `${page}: ${s.label}`);
    for (const fn of ready) {
      try { fn(); } catch (e) { console.warn(`  ! ${page}: page script error: ${e.message}`); }
    }

    const filled = [];
    for (const [id, el] of els) {
      if (!id || SKIP_IDS.has(id) || el._html === null || !el._html.trim()) continue;
      const r = injectById(html, id, iframesToThumbnails(el._html));
      if (r.ok) { html = r.html; filled.push(id); }
    }

    // 2. Structured data.
    html = injectJsonLd(html, pageGraph(D, page, html));

    if (html !== original) {
      fs.writeFileSync(file, html);
      changed++;
    }
    console.log(`${html !== original ? "updated " : "unchanged"} ${page}  [${filled.join(", ")}]`);
  }
  console.log(`\nDone — ${changed} page(s) changed. Now commit and push as usual.`);
}

main();
