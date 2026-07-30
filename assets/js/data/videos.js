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
    id: "dQw4w9WgXcQ",
    title: "What Is a Password, Really? (Cyber Elementary Ep. 1)",
    description:
      "A 2-minute animated explainer kids can watch before picking their next password.",
    badge: "NEW",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Meet the Firewall Friends — Book Trailer",
    description: "The official trailer for our first Cyber Elementary book, read aloud.",
    badge: "",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "How the Internet Works, for Kids",
    description: "A simple visual explanation of how a message travels from your tablet to a website and back.",
    badge: "",
  },
];
