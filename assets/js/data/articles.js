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
   url      - Path to the article's own HTML page, OR a full external URL
              (https://...) to link out to an outside resource — external
              links automatically open in a new tab.
   excerpt  - 1-2 sentence teaser shown on the card
   icon     - Emoji shown on the card if no image is set
   image    - Optional path to a cover image (e.g. "assets/images/blog/thing.svg");
              leave "" to use the emoji in "icon" instead
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
    image: "assets/images/blog/ai-and-teen-mental-health.svg",
    badge: "NEW",
  },
  {
    title: "NOVA Labs: Cybersecurity Lab",
    author: "PBS NOVA",
    date: "Recommended Resource",
    url: "https://www.pbs.org/wgbh/nova/labs/lab/cyber/",
    excerpt:
      "A free, interactive game from PBS NOVA where kids defend a company from cyber attacks — cracking passwords, writing code, and outsmarting hackers along the way. A fun, hands-on intro to how cybersecurity really works.",
    icon: "🛡️",
    image: "",
    badge: "",
  },
  {
    title: "Wall of Sheep: Learn Why Encryption Matters",
    author: "Packet Hacking Village",
    date: "Recommended Resource",
    url: "https://www.phvillage.io/pages/wall-of-lambs/",
    excerpt:
      "An eye-opening cybersecurity exhibit that uses packet-capture tools and forensics games to show how easily unencrypted logins can be exposed on a network — a memorable, real-world lesson in why encryption and strong passwords matter.",
    icon: "🐑",
    image: "",
    badge: "",
  },
  {
    title: "AI: What Should Parents, Caregivers & Educators Know?",
    author: "Anti-Defamation League",
    date: "Recommended Resource",
    url: "https://www.adl.org/resources/tools-and-strategies/artificial-intelligence-what-do-parents-caregivers-and-educators",
    excerpt:
      "A practical guide from the ADL on helping kids navigate AI safely and critically — covering AI literacy, bias and misinformation, and conversation starters for building digital resilience at home and in the classroom.",
    icon: "🤖",
    image: "",
    badge: "",
  },
];
