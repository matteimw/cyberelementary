/* =========================================================================
   DEALS DATA — Amazon promotions AND other affiliate-program deals
   (Prime, Audible, Kindle promos, Outschool, etc.)
   =========================================================================
   HOW TO ADD A NEW DEAL
   ------------------------
   Copy one of the entries below, paste it above the closing "];", and edit
   the fields. Delete a deal (or set it aside in a comment) once it expires
   — the page always shows exactly what's in this list, in order. These
   show on deals.html under "More Ways to Save," below the Kindle Unlimited
   plans from kindle.js.

   FIELD GUIDE
   -----------
   title       - Deal headline, e.g. "Kindle Book Deals — Up to 50% Off"
   image       - Path to an image, or "" to use the emoji in "icon"
   icon        - Emoji shown if no image is set
   description - A sentence about the promotion
   linkType    - "amazon" (default if omitted) or "other". Use "other" for
                 non-Amazon affiliate programs (Outschool/Awin, Impact, etc.)
   amazon      - Used when linkType is "amazon": your amzn.to link (already
                 tagged — used as-is), a full Amazon URL, or a bare ASIN
   link        - Used when linkType is "other": the full tracked affiliate
                 URL to use as-is (e.g. an Awin/Impact deep link)
   linkLabel   - Optional. Button text. Defaults to "Shop This Deal" for
                 Amazon, "Check It Out" for other. e.g. "Browse Classes"
   dealType    - "time-bound" or "evergreen"
   expires     - For time-bound deals, a human-readable end date/time,
                 e.g. "Ends Aug 3, 2026". Ignored for evergreen deals.
   badge       - Optional ribbon text, e.g. "LIMITED TIME"
   ========================================================================= */

const DEALS = [
  {
    title: "Outschool — Current Promotion",
    image: "https://www.awin1.com/cshow.php?s=3627547&v=18973&q=413499&r=3062633",
    icon: "🎓",
    description:
      "Outschool's current discount or promotional offer on live, small-group online classes for kids and teens. This banner is pulled live from Outschool/Awin, so it updates automatically whenever they change the promotion -- no edits needed here.",
    linkType: "other",
    // This image + link pair both come from the same Awin "deal" banner
    // creative (s=3627547) Mark pulled from the Outschool program's creative
    // library -- using the banner's own href keeps the picture and the
    // destination in sync with whatever specific promo Outschool is running.
    link: "https://www.awin1.com/cread.php?s=3627547&v=18973&q=413499&r=3062633",
    linkLabel: "See Today's Offer",
    dealType: "evergreen",
    expires: "",
    badge: "DEAL",
  },
  {
    title: "Prime Free Trial",
    image: "",
    icon: "📦",
    description:
      "Try Amazon Prime free — fast shipping, Prime Video, and other Prime perks across Amazon.",
    amazon: "https://amzn.to/4hiT1kf",
    dealType: "evergreen",
    expires: "",
    badge: "FREE TRIAL",
  },
  {
    title: "Prime Exclusives",
    image: "",
    icon: "🎁",
    description: "Prime member-only deals and early access to select Amazon promotions.",
    amazon: "https://amzn.to/44MWEaB",
    dealType: "evergreen",
    expires: "",
    badge: "",
  },
  {
    title: "Kindle Unlimited Special Promos",
    image: "",
    icon: "⚡",
    description:
      "Amazon's current limited-time Kindle Unlimited promotions — check for today's discounted trial or membership pricing.",
    amazon: "https://amzn.to/4wsao6P",
    dealType: "evergreen",
    expires: "",
    badge: "PROMO",
  },
  {
    title: "Prime for Young Adults — Free Trial",
    image: "",
    icon: "🎓",
    description: "A free trial of Amazon's discounted Prime plan for young adults (ages 18-24).",
    amazon: "https://amzn.to/4wYyOEG",
    dealType: "evergreen",
    expires: "",
    badge: "FREE TRIAL",
  },
  {
    title: "Prime for Young Adults — Paid Membership",
    image: "",
    icon: "🎓",
    description: "Amazon Prime at a reduced rate for young adults (ages 18-24).",
    amazon: "https://amzn.to/4yHRomh",
    dealType: "evergreen",
    expires: "",
    badge: "",
  },
  {
    title: "Audible Premium Plus — Annual Membership",
    image: "",
    icon: "🎧",
    description:
      "A full year of Audible's top membership tier — one credit a month, plus unlimited access to their audiobook and podcast catalog.",
    amazon: "https://amzn.to/4fHzTd9",
    dealType: "evergreen",
    expires: "",
    badge: "BEST VALUE",
  },
  {
    title: "Audible Standard — Free Trial",
    image: "",
    icon: "🎧",
    description: "Try Audible free, including your first audiobook credit.",
    amazon: "https://amzn.to/4fEoWsO",
    dealType: "evergreen",
    expires: "",
    badge: "FREE TRIAL",
  },
  {
    title: "Audible Standard — Monthly Membership",
    image: "",
    icon: "🎧",
    description: "One audiobook credit a month, month-to-month, with no annual commitment.",
    amazon: "https://amzn.to/3RDx8RX",
    dealType: "evergreen",
    expires: "",
    badge: "",
  },
];
