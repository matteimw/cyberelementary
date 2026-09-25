/* =========================================================================
   CURRICULUM OUTLINE — drives curriculum.html
   =========================================================================
   Lesson titles only (the books' table of contents, which Amazon's
   "Look Inside" already shows). Deliberately NO objectives, activities,
   worksheets or other book text: if the Kindle editions are in KDP Select,
   Amazon limits what can appear elsewhere online to about 10% of the book.
   (Free sample PDFs in assets/pdfs also count toward that 10%.)

   The full extracted lesson data lives OUTSIDE this repo, in the parent
   folder: curriculum-FULL-lesson-data-PRIVATE-do-not-publish.js

   After editing this file, run:  node tools/prerender.js
   ========================================================================= */

const CURRICULUM = {
  "published": true,
  "duration": "30–40 minutes",
  "units": [
    {
      "name": "Cyber Security Basics",
      "summary": "The everyday habits that keep accounts and devices safe, from strong passwords and updates to spotting phishing and backing up files.",
      "lessons": "1-9"
    },
    {
      "name": "Online Safety",
      "summary": "How to share, post, play and browse safely: digital footprints, cyberbullying, online strangers, trustworthy websites, screen time and reporting problems.",
      "lessons": "10-18"
    },
    {
      "name": "Digital Citizenship & Communication",
      "summary": "Being a respectful, careful member of online communities: kindness, giving credit, messaging and webcam manners, privacy, scams and safe shopping.",
      "lessons": "19-27"
    },
    {
      "name": "AI Security & AI Safety",
      "summary": "What AI is and how chatbots work, spotting AI-generated content and misinformation, fairness, privacy with AI tools, and using AI honestly for schoolwork.",
      "lessons": "28-36"
    }
  ],
  "quizQuestions": {
    "3": 4,
    "4": 5,
    "5": 5,
    "6": 6
  },
  "lessons": [
    {
      "n": 1,
      "topic": "Creating Strong Passwords",
      "tagline": "Your Digital Lock and Key",
      "videoId": "bL60rozsDes"
    },
    {
      "n": 2,
      "topic": "Keeping Devices and Software Updated",
      "tagline": "Giving Your Digital Tools Their Checkup",
      "videoId": "vB8WUq3meU8"
    },
    {
      "n": 3,
      "topic": "Recognizing Phishing Emails and Messages",
      "tagline": "Don't Take the Bait",
      "videoId": "h36O5gQCwbw"
    },
    {
      "n": 4,
      "topic": "Understanding Malware and Viruses",
      "tagline": "Germs for Your Computer",
      "videoId": "76epQrjoQmg"
    },
    {
      "n": 5,
      "topic": "Safe Wi-Fi and Network Habits",
      "tagline": "Locking Your Digital Front Door",
      "videoId": "Fh5Bv3lvcSo"
    },
    {
      "n": 6,
      "topic": "Protecting Personal Information/Data",
      "tagline": "Your Digital Treasure Chest",
      "videoId": "eieoshxBO-U"
    },
    {
      "n": 7,
      "topic": "Two-Factor Authentication Basics",
      "tagline": "A Second Lock on Your Account",
      "videoId": "OfIGCn51gMQ"
    },
    {
      "n": 8,
      "topic": "Backing Up Important Data",
      "tagline": "Your Digital Safety Net",
      "videoId": "dlthYrrApY8"
    },
    {
      "n": 9,
      "topic": "Physical Device Security",
      "tagline": "Protecting the Hardware, Not Just the Data",
      "videoId": "EUKhgwl8tJY"
    },
    {
      "n": 10,
      "topic": "Sharing Information Safely Online",
      "tagline": "Think Before You Post",
      "videoId": "FvLKpZYwfKs"
    },
    {
      "n": 11,
      "topic": "Understanding Digital Footprints",
      "tagline": "The Trail You Leave Online",
      "videoId": "1fNha2KvRUA"
    },
    {
      "n": 12,
      "topic": "Cyberbullying",
      "tagline": "Recognizing and Responding",
      "videoId": "u4vE2WWqTEE"
    },
    {
      "n": 13,
      "topic": "Safe Social Media Habits",
      "tagline": "Using Apps the Smart Way",
      "videoId": "Kd_CvhWjM-w"
    },
    {
      "n": 14,
      "topic": "Stranger Danger Online",
      "tagline": "Not Everyone Is Who They Say They Are",
      "videoId": "UkcqdvdYk6Q"
    },
    {
      "n": 15,
      "topic": "Evaluating Trustworthy Websites",
      "tagline": "Not Everything Online Is True",
      "videoId": "Nh9nlbkphmo"
    },
    {
      "n": 16,
      "topic": "Screen Time and Digital Balance",
      "tagline": "Making Room for Everything You Love",
      "videoId": "tlXw9pJX0Yo"
    },
    {
      "n": 17,
      "topic": "Safe Online Gaming",
      "tagline": "Playing Smart with Others",
      "videoId": "Im6zhIvI3TM"
    },
    {
      "n": 18,
      "topic": "Reporting Inappropriate Content",
      "tagline": "Speaking Up the Right Way",
      "videoId": "oofPTBFC62w"
    },
    {
      "n": 19,
      "topic": "Being Kind Online (Digital Citizenship)",
      "tagline": "The Golden Rule Goes Digital",
      "videoId": "g6ZYZZ29Qh4"
    },
    {
      "n": 20,
      "topic": "Understanding Copyright and Plagiarism",
      "tagline": "Giving Credit Where It's Due",
      "videoId": "LX7ykpBKDPc"
    },
    {
      "n": 21,
      "topic": "Email and Messaging Etiquette",
      "tagline": "Writing Like a Pro",
      "videoId": "us5pO4KlqCk"
    },
    {
      "n": 22,
      "topic": "Video Chat and Webcam Safety",
      "tagline": "Mind What's in the Frame",
      "videoId": "ON0X0xPQ2Ww"
    },
    {
      "n": 23,
      "topic": "Understanding Cookies and Trackers",
      "tagline": "The Websites That Remember You",
      "videoId": "eMSKSP3mDyg"
    },
    {
      "n": 24,
      "topic": "Public vs. Private Information",
      "tagline": "Drawing the Line",
      "videoId": "vU6oEhZB2wA"
    },
    {
      "n": 25,
      "topic": "Recognizing Scams and Too-Good-To-Be-True Offers",
      "tagline": "",
      "videoId": "KY7VSOD1j0E"
    },
    {
      "n": 26,
      "topic": "Safe Online Shopping Basics",
      "tagline": "Buying Smart with a Trusted Adult",
      "videoId": "3TTaIOX7kSo"
    },
    {
      "n": 27,
      "topic": "Digital Footprint Cleanup",
      "tagline": "Tidying Up Your Online Trail",
      "videoId": "e3e8_LAj9ZU"
    },
    {
      "n": 28,
      "topic": "What Is Artificial Intelligence?",
      "tagline": "Meeting Our New Digital Helper",
      "videoId": "eVskqqdv1tA"
    },
    {
      "n": 29,
      "topic": "How AI Chatbots Work",
      "tagline": "Talking to a Very Good Guesser",
      "videoId": "qQtOcKo1nMg"
    },
    {
      "n": 30,
      "topic": "Recognizing AI-Generated Content",
      "tagline": "Is That Picture or Video Even Real?",
      "videoId": "-OH2-eC1fzI"
    },
    {
      "n": 31,
      "topic": "AI Bias and Fairness",
      "tagline": "Why AI Isn't Always Neutral",
      "videoId": "UVM67z4yBRM"
    },
    {
      "n": 32,
      "topic": "Privacy with AI Tools and Voice Assistants",
      "tagline": "Who's Listening?",
      "videoId": "94HyFYIwNRk"
    },
    {
      "n": 33,
      "topic": "Safe and Responsible AI Use for Homework",
      "tagline": "A Helper, Not a Cheat Sheet",
      "videoId": "qzjbQjpo5U0"
    },
    {
      "n": 34,
      "topic": "AI Misinformation and Fact-Checking",
      "tagline": "Don't Believe Everything You See",
      "videoId": "yy3CIMadgHI"
    },
    {
      "n": 35,
      "topic": "Protecting Personal Data from AI Systems",
      "tagline": "Guarding Your Information",
      "videoId": "Ju14d-84KHI"
    },
    {
      "n": 36,
      "topic": "Being a Responsible AI Citizen",
      "tagline": "Bringing It All Together",
      "videoId": "K0h4XLU1OUU"
    }
  ]
};
