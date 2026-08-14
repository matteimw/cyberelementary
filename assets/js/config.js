/* =========================================================================
   CYBER ELEMENTARY — SITE CONFIG
   =========================================================================
   Change the values below and the whole site updates. This is the only
   file where you should need to put your real Amazon Associates tag.

   HOW TO ADD YOUR AMAZON AFFILIATE TAG
   -------------------------------------
   1. Log into https://affiliate-program.amazon.com
   2. Your tracking ID looks like "yourname-20". You can find it under
      Account Settings, or it's already appended to any link SiteStripe
      gives you (look for "?tag=yourname-20" at the end of the URL).
   3. Paste it below, replacing "cyberelementary-20".
   4. Every "Buy on Amazon" button on every page will automatically use it.

   You can also use a *different* tag for a specific link if you ever need
   to (e.g. tracking a specific campaign) — every data file (books.js,
   reviews.js, deals.js) lets you set a "tag" field per item that overrides
   this default.
   ========================================================================= */

const SITE_CONFIG = {
  // Your Amazon Associates tracking ID (the "?tag=" part of every link)
  amazonTag: "cyberelementary-20",

  // Amazon marketplace domain — change if you affiliate-market outside the US
  amazonDomain: "amazon.com",

  // Your other properties — shown in the header/footer "Our Sites" strip
  familySites: [
    { name: "Baldwin Terney Press", url: "https://www.baldwinterneypress.com" },
    { name: "Rachel Mattei", url: "https://www.rachelmattei.com" },
    { name: "Baldwin Terney Consulting", url: "https://www.baldwinterneyconsulting.com" },
  ],

  // Social links shown in the footer. Instagram points at Cyber
  // Elementary's own account; Facebook and LinkedIn still point at
  // Baldwin Terney Press's accounts. YouTube is left out for now — add it
  // back with { youtube: "..." } and it'll reappear in the footer
  // automatically.
  social: {
    facebook: "https://www.facebook.com/baldwinterneypress",
    instagram: "https://www.instagram.com/cyberelementary",
    linkedin: "https://www.linkedin.com/company/baldwin-terney-press-llc/",
  },

  // Contact / suggestions email shown on the Contact section, footer, and
  // every mailto: link site-wide. Change it once here.
  contactEmail: "support@baldwinterneypress.com",

  // Mascot images — Choco (red, the "CE" shield guardian) and Nacho (green,
  // holds a phone — the digital-identity/password mascot). Used in the
  // header logo, hero art, and the Kindle sign-up section. Change these
  // paths if you swap in new artwork; leave a value blank to fall back to
  // the emoji.
  mascotImage: "assets/images/mascot/choco.png",
  mascotImage2: "assets/images/mascot/nacho.png",
  mascotEmoji: "🦕",

  // Google Analytics 4 Measurement ID — this is what lets you see visitor
  // counts, traffic sources, and Amazon-link clicks for the site.
  // HOW TO GET ONE: go to https://analytics.google.com > Admin (gear icon,
  // bottom left) > Create Property > name it "Cyber Elementary" > add a
  // "Web" data stream with URL https://www.cyberelementary.com > it will
  // show you a Measurement ID that looks like "G-XXXXXXXXXX". Paste it
  // below, replacing "G-XXXXXXXXXX". Analytics stays off (no script loads,
  // nothing to worry about privacy-wise) until you paste a real ID here.
  gaMeasurementId: "G-VNRNG6XJ7V",
};

/**
 * Build a compliant Amazon affiliate link.
 * Pass either a bare ASIN ("B0CXXXXX"), a full Amazon URL you copied from
 * SiteStripe, or an already-tagged amzn.to short link.
 *
 * amzn.to short links (the kind SiteStripe generates) already have your
 * affiliate tag baked in server-side, so they're used exactly as given —
 * we don't touch them. Full amazon.com/... URLs and bare ASINs get your
 * default tag from SITE_CONFIG.amazonTag appended automatically.
 */
function buildAmazonLink(asinOrUrl, overrideTag) {
  const tag = overrideTag || SITE_CONFIG.amazonTag;

  if (/^https?:\/\/amzn\.to\//i.test(asinOrUrl)) {
    return asinOrUrl; // pre-tagged SiteStripe short link — leave it alone
  }

  if (/^https?:\/\//i.test(asinOrUrl)) {
    try {
      const url = new URL(asinOrUrl);
      url.searchParams.set("tag", tag);
      return url.toString();
    } catch (e) {
      return asinOrUrl;
    }
  }
  // Otherwise treat it as a bare ASIN and build a clean /dp/ link.
  return `https://www.${SITE_CONFIG.amazonDomain}/dp/${asinOrUrl}?tag=${tag}`;
}
