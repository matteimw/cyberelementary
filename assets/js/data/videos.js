/* =========================================================================
   VIDEOS DATA — YouTube video gallery
   =========================================================================
   HOW TO ADD A NEW VIDEO
   ------------------------
   1. Upload/publish the video on YouTube as usual.
   2. Copy the video ID from its URL — the part after "v=".
      Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
   3. Copy one of the entries below, paste it above the closing "];", and
      edit the fields.

   SHARING A SPECIFIC VIDEO ON SOCIAL MEDIA
   ------------------------------------------
   Every video gets its own link you can post anywhere:
       https://www.cyberelementary.com/videos.html#VIDEO_ID
   Replace VIDEO_ID with the "id" you set below. The page will automatically
   scroll to and highlight that video when someone clicks the link — handy
   for Instagram/Facebook bios or "link in comments" posts.

   FIELD GUIDE
   -----------
   id          - The YouTube video ID (required)
   title       - Video title shown under the player
   description - Short caption/description
   badge       - Optional ribbon text, e.g. "NEW"
   featured    - Optional. Set to true to give this video its own full-width
                 row in the grid (nothing shares its row, and whatever comes
                 next starts a fresh row) — handy for compilation/marathon
                 videos that recap a batch of lessons.
   ========================================================================= */

const VIDEOS = [
  {
    id: "bL60rozsDes",
    title: "Creating Strong Passwords for Kids — Cyber Elementary Lesson 1",
    description:
      "Lesson 1 from the Cyber Elementary video series — a kid-friendly walkthrough of what makes a password strong and how to build one that's hard to crack.",
  },
  {
    id: "vB8WUq3meU8",
    title: "Software Updates for Kids 🔧️ | CyberElementary Lesson 2",
    description:
      "Lesson 2 from the Cyber Elementary video series — a kid-friendly look at why software updates matter and how they help keep devices and information safe.",
  },
  {
    id: "h36O5gQCwbw",
    title: "Phishing Awareness — Cyber Elementary Lesson 3",
    description:
      "Lesson 3 from the Cyber Elementary video series — a kid-friendly look at how to spot sneaky phishing tricks and stay safe from scams online.",
  },
  {
    id: "76epQrjoQmg",
    title: "Understanding Malware — Cyber Elementary Lesson 4",
    description:
      "Lesson 4 from the Cyber Elementary video series — a kid-friendly look at what malware is and how kids can help keep their devices safe from it.",
  },
  {
    id: "Fh5Bv3lvcSo",
    title: "Is Your Wi-Fi Safe? — Cyber Elementary Lesson 5",
    description:
      "Lesson 5 from the Cyber Elementary video series — a kid-friendly look at how to keep your home Wi-Fi secure and avoid common wireless network risks.",
  },
  {
    id: "eieoshxBO-U",
    title: "Protect Your Personal Info! 🔒💎 | CyberElementary Lesson 6",
    description:
      "Lesson 6 from the Cyber Elementary video series — a kid-friendly look at what personal information is and why it's important to keep it private online.",
  },
  {
    id: "OfIGCn51gMQ",
    title: "Set Up 2FA! 🔒🔒 | Cyber Elementary Lesson 7",
    description:
      "Lesson 7 from the Cyber Elementary video series — a kid-friendly introduction to two-factor authentication and how it adds an extra layer of protection to online accounts.",
  },
  {
    id: "dlthYrrApY8",
    title: "Back It Up! 💾🚫 | Cyber Elementary Lesson 8",
    description:
      "Lesson 8 from the Cyber Elementary video series — a kid-friendly look at why backing up your data matters and how to make sure important files are never lost.",
  },
  {
    id: "EUKhgwl8tJY",
    title: "Lock It, Track It, Protect It! 🔐📱 | CyberElementary Lesson 9",
    description:
      "Lesson 9 from the Cyber Elementary video series — a kid-friendly look at locking devices, using tracking features, and protecting them if they're ever lost or stolen.",
  },
  {
    id: "eRb1zp_yjSY",
    title: "Cyber Security Basics for Kids: All 9 Lessons 🔒 | CyberElementary Compilation",
    description:
      "All 9 Cyber Security Basics lessons back-to-back in one video — Choco, Nacho & Strawberry cover passwords, updates, phishing, malware, Wi-Fi, personal info, 2FA, backups, and device security in a single 22-minute watch, perfect for catching up on the whole unit at once.",
    featured: true,
  },
  {
    id: "FvLKpZYwfKs",
    title: "Pause, Think, Then Post! 🥥📱 | Cyber Elementary Lesson 10",
    description:
      "Lesson 10 from the Cyber Elementary video series — a kid-friendly look at why it's important to pause and think before posting online, and how to make smart choices on social media.",
  },
  {
    id: "1fNha2KvRUA",
    title: "Digital Footprints Don't Wash Away! 👣💻 | Cyber Elementary Lesson 11",
    description:
      "Lesson 11 from the Cyber Elementary video series — a kid-friendly look at how everything we do online leaves a digital footprint, and why it's important to think about the trail we leave behind.",
  },
  {
    id: "u4vE2WWqTEE",
    title: "You Can't Un-Crumple Hurtful Words! 📝💔 | CyberElementary Lesson 12",
    description:
      "Lesson 12 from the Cyber Elementary video series — a kid-friendly look at how hurtful words online can't be taken back, and why it's important to think before typing something unkind.",
  },
  {
    id: "Kd_CvhWjM-w",
    title: "A Private Account Is Like a Guest List! 🔒🎉 | CyberElementary Lesson 13",
    description:
      "Lesson 13 from the Cyber Elementary video series — a kid-friendly look at how a private account works like a guest list, so only approved people can see what you share online.",
  },
  {
    id: "UkcqdvdYk6Q",
    title: "Online Strangers Could Be Wearing a Mask! 🎭 | CyberElementary Lesson 14",
    description:
      "Lesson 14 from the Cyber Elementary video series — a kid-friendly look at why online strangers might not be who they say, the warning signs of catfishing, and the one rule that never changes: never share personal info, and never agree to meet an online stranger in person.",
  },
  {
    id: "Nh9nlbkphmo",
    title: "Not Everything Online Is True! ✅ | CyberElementary Lesson 15",
    description:
      "Lesson 15 from the Cyber Elementary video series — a kid-friendly look at why not everything online is true, the 3 questions to ask before trusting a website (who wrote it, why, and does it match other trusted sources), and \"lateral reading,\" the trick real fact-checkers use to double-check surprising claims.",
  },
  {
    id: "tlXw9pJX0Yo",
    title: "What If Every Meal Was Just Dessert? 🍨 | CyberElementary Lesson 16",
    description:
      "Lesson 16 from the Cyber Elementary video series — a kid-friendly look at digital balance: why screens are great but shouldn't be the only thing on your plate, the difference between active and passive screen time, and simple habits like taking breaks and keeping screens out of the bedroom at bedtime.",
  },
  {
    id: "Im6zhIvI3TM",
    title: "Play Smart, Play Kind! 🎮 | Cyber Elementary Lesson 17",
    description:
      "Lesson 17 from the Cyber Elementary video series — a kid-friendly look at being a good sport in online games: playing fair, staying kind to other players, and knowing what to do if a game stops being fun.",
  },
  {
    id: "oofPTBFC62w",
    title: "Speaking Up the Right Way! 🚩 | CyberElementary Lesson 18",
    description:
      "Lesson 18 from the Cyber Elementary video series — a kid-friendly look at spotting the red flags of something wrong online and speaking up the right way: telling a trusted adult instead of handling it alone.",
  },
  {
    id: "xjfcIpFKk9I",
    title: "Online Safety for Kids: All 9 Lessons 🛡️ | Cyber Elementary Compilation Lessons 10-18",
    description:
      "All 9 lessons from the second unit back-to-back in one video — pausing before you post, digital footprints, choosing kind words, private accounts, online strangers, spotting misinformation, digital balance, good sportsmanship, and speaking up about red flags, perfect for catching up on the whole unit at once.",
    featured: true,
  },
  {
    id: "g6ZYZZ29Qh4",
    title: "The Golden Rule Goes Digital! 💛 | CyberElementary Lesson 19",
    description:
      "Lesson 19 from the Cyber Elementary video series — a kid-friendly look at how the Golden Rule applies online too: treating others the way you'd want to be treated, even behind a screen.",
  },
  {
    id: "LX7ykpBKDPc",
    title: "Copyright & Plagiarism Explained! 📝 | Cyber Elementary Lesson 20",
    description:
      "Lesson 20 from the Cyber Elementary video series — a kid-friendly look at copyright and plagiarism: why it matters to give credit for others' work online and how to do it the right way.",
  },
  {
    id: "us5pO4KlqCk",
    title: "Email & Messaging Etiquette! ✉️ | CyberElementary Lesson 21",
    description:
      "Lesson 21 from the Cyber Elementary video series — a kid-friendly look at email and messaging etiquette: how to write clearly, stay polite, and communicate respectfully online.",
  },
  {
    id: "ON0X0xPQ2Ww",
    title: "Video Chat & Webcam Safety! 📹 | Cyber Elementary Lesson 22",
    description:
      "Lesson 22 from the Cyber Elementary video series — a kid-friendly look at video chat and webcam safety: smart habits for staying safe and comfortable on camera.",
  },
  {
    id: "eMSKSP3mDyg",
    title: "Cookies & Trackers Explained! 🍪 | Cyber Elementary Lesson 23",
    description:
      "Lesson 23 from the Cyber Elementary video series — a kid-friendly look at cookies and trackers: what they are, how websites use them, and simple habits for protecting your privacy online.",
  },
  {
    id: "vU6oEhZB2wA",
    title: "Public vs. Private Info! 🔒 | Cyber Elementary Lesson 24",
    description:
      "Lesson 24 from the Cyber Elementary video series — a kid-friendly look at the difference between public and private information, and how to keep personal details safe online.",
    badge: "NEW",
  },
];
