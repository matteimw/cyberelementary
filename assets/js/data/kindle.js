/* =========================================================================
   KINDLE DATA — Kindle Unlimited sign-up options
   =========================================================================
   Shown on the Today's Savings page as a "start here" step for visitors
   who don't have a Kindle/Amazon account yet, right above the book series
   buy buttons. Edit freely — same copy-paste-edit pattern as the other
   data files.

   FIELD GUIDE
   -----------
   title       - Plan name
   description - One line about the plan
   url         - Your affiliate link (used as-is, already tagged)
   badge       - Optional ribbon text, e.g. "MOST POPULAR"
   icon        - Emoji shown on the card
   ========================================================================= */

const KINDLE_PLANS = [
  {
    title: "Kindle Unlimited Free Trial",
    description: "New to Kindle Unlimited? Start with a free trial and read Cyber Elementary books right away.",
    url: "https://amzn.to/4vL8lcF",
    badge: "START HERE",
    icon: "🎉",
  },
  {
    title: "Kindle Unlimited — 6 Month Plan",
    description: "Lock in a semester's worth of reading for the whole family.",
    url: "https://amzn.to/4vSiogk",
    badge: "",
    icon: "📖",
  },
  {
    title: "Kindle Unlimited — 12 Month Plan",
    description: "A full year of unlimited reading, including the whole Cyber Elementary series.",
    url: "https://amzn.to/3Tm7ulu",
    badge: "MOST POPULAR",
    icon: "📚",
  },
  {
    title: "Kindle Unlimited — 24 Month Plan",
    description: "Our best value option for families who read together often.",
    url: "https://amzn.to/4fW04hk",
    badge: "BEST VALUE",
    icon: "🏆",
  },
];
