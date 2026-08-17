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
    id: "FvLKpZYwfKs",
    title: "Pause, Think, Then Post! 🥥📱 | Cyber Elementary Lesson 10",
    description:
      "Lesson 10 from the Cyber Elementary video series — a kid-friendly look at why it's important to pause and think before posting online, and how to make smart choices on social media.",
    badge: "NEW",
  },
];
