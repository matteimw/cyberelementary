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
    badge: "NEW",
  },
];
