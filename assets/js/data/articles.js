/* =========================================================================
   ARTICLES DATA — Cyber Elementary blog / article index
   =========================================================================
   This drives the card grid on articles.html (and the "From the Blog"
   teaser on the home page). Each entry just points at a full article page
   that lives at the site root, e.g. blog-ai-and-teen-mental-health.html.

   HOW TO ADD A NEW ARTICLE
   ---------------------------
   1. Copy an existing article page (e.g. blog-ai-and-teen-mental-health.html),
      rename it "blog-your-slug-here.html", and replace the title/byline/
      date/body content inside <div class="article-body">. Keep the same
      <head>, header, footer, and sticky-bar markup — just swap the content
      between the "ARTICLE CONTENT START" and "ARTICLE CONTENT END" comments.
   2. Copy one of the entries below, paste it above the closing "];", and
      edit the fields to match.

   FIELD GUIDE
   -----------
   title    - Article title
   author   - Byline
   date     - Human-readable publish date, e.g. "July 30, 2026"
   url      - Path to the article's own HTML page
   excerpt  - 1-2 sentence teaser shown on the card
   icon     - Emoji shown on the card (no cover images yet)
   badge    - Optional ribbon text, e.g. "NEW"
   ========================================================================= */

const ARTICLES = [
  {
    title: "AI and Teen Mental Health",
    author: "Mark Mattei",
    date: "July 30, 2026",
    url: "blog-ai-and-teen-mental-health.html",
    excerpt:
      "AI is now part of everyday teen life — from study apps to chatbots and social feeds. Here's how it affects emotional well-being, and practical steps for teens, parents, and schools to use it more safely.",
    icon: "🧠",
    badge: "NEW",
  },
];
