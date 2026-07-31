/* =========================================================================
   REVIEWS DATA — Reviews of products, with affiliate links
   =========================================================================
   HOW TO ADD A NEW REVIEW
   --------------------------
   Copy one of the entries below, paste it above the closing "];", and edit
   the fields. Works for Amazon products AND products/sites that use a
   different affiliate program — just set "linkType" accordingly.

   FIELD GUIDE
   -----------
   productName - Name of the item you're reviewing
   image       - Path to an image (e.g. "assets/images/reviews/item.jpg"),
                 or leave "" to use the emoji placeholder in "icon"
   icon        - Emoji shown if no image is set
   rating      - A number 1-5 (can use .5, e.g. 4.5)
   summary     - Your short review / why you recommend it
   linkType    - "amazon" or "other"
   linkTarget  - If linkType is "amazon": an ASIN or full Amazon URL.
                 If linkType is "other": the full affiliate URL to use as-is.
   linkLabel   - Button text, e.g. "See it on Amazon" or "Visit site"
   badge       - Optional ribbon text, e.g. "EDITOR'S PICK"
   ========================================================================= */

const REVIEWS = [
  {
    productName: "The Fallacy Detective: Thirty-Eight Lessons on How to Recognize Bad Reasoning",
    image: "",
    icon: "🧠",
    rating: 5,
    summary:
      "I used The Fallacy Detective: Thirty-Eight Lessons on How to Recognize Bad Reasoning to help my children build online safety skills and think more carefully about what they see on the internet. The book made it easier to teach them how to spot weak arguments, misleading claims, and logical fallacies in online content. It also helped introduce basic logic in a way that was simple and engaging for them to understand. Overall, it was a valuable resource for protecting my children online while strengthening their critical thinking.",
    linkType: "amazon",
    linkTarget: "https://amzn.to/4g3JnRe",
    linkLabel: "See it on Amazon",
    badge: "",
  },
  {
    productName: "Santa and Me: The SCADA Before Christmas",
    image: "",
    icon: "🎄",
    rating: 5,
    summary:
      "Being in the critical infrastructure cyber field, I found this book helpful for explaining my work to my children in a simple, engaging way. It gave me a shared language to talk about online safety, logic, and how to think carefully about information they see every day. The lessons made it easier to connect my job to real-world examples they could understand. Overall, it was a useful book for turning a complex career into something my children could relate to.",
    linkType: "amazon",
    linkTarget: "https://amzn.to/4yQcleH",
    linkLabel: "See it on Amazon",
    badge: "",
  },
];
