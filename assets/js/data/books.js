
/* =========================================================================
   BOOKS DATA — Cyber Elementary School curriculum (9 real titles)
   =========================================================================
   Amazon links verified against the publisher's ISBN/link table on
   2026-07-30 — each "amazon" field below points at the confirmed correct
   title.
 
   Titles, subtitles, and descriptions came from your KDP metadata files
   (final versions/<grade>/KDP_Metadata_*.docx). Covers came from the
   matching *_eBook_Cover images, resized for web. Every title is available
   in both Kindle eBook and paperback on Amazon, so the "amazon" link
   should point at whichever page shows both format options.
 
   HOW TO ADD ANOTHER BOOK
   --------------------------
   Copy one of the entries below (including the { and }), paste it above
   the closing "];", and edit the fields.
 
   FIELD GUIDE
   -----------
   title       - Book title
   subtitle    - Subtitle / tagline
   grade       - e.g. "Grade 3" or "Grades 3-6"
   audience    - Who it's for, e.g. "For Teachers & Homeschool Parents"
   cover       - Path to a cover image in assets/images/books/
   icon        - Emoji fallback if cover is blank
   description - 1-2 sentence description for shoppers
   formats     - e.g. "Kindle eBook & Paperback"
   amazon      - Your amzn.to link (already tagged — used as-is), a full
                 Amazon URL, or a bare ASIN
   badge       - Optional ribbon text, e.g. "TEACHER RESOURCE"
   freePromo   - Set to true to show the round "FREE / limited time" stamp
                 next to the cover (assets/images/badges/free-stamp.svg).
                 Only turn this on for books actually running a real,
                 currently-active free promo — set back to false once it
                 ends so the site never shows a false "free" claim.
   ========================================================================= */
 
const BOOKS = [
  {
    title: "Cyber Elementary School: Complete Lesson Plan Book",
    subtitle: "The Complete Teacher Lesson Plan Book — 36 Lessons for Grades 3-6",
    grade: "Grades 3-6",
    audience: "For Teachers & Homeschool Co-ops",
    cover: "assets/images/books/complete-lesson-plan.jpg",
    icon: "🦕",
    description:
      "One volume covering all four grade levels — 36 lessons with grade-differentiated talking points for 3rd through 6th grade, plus full assessments and answer keys for every grade.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/3TxrOQM",
    badge: "ALL GRADES",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 3rd Grade Lesson Plan Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Lessons for 3rd Grade",
    grade: "Grade 3",
    audience: "For Teachers & Homeschool Parents",
    cover: "assets/images/books/grade3-lesson-plan.jpg",
    icon: "🦕",
    description:
      "A full foundation in cyber security, online safety, and AI safety — 36 ready-to-teach lessons with guided practice, independent practice, and a full assessment with answer key.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/4wrUsRR",
    badge: "TEACHER RESOURCE",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 3rd Grade Student Worksheet & Quiz Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Practice Worksheets and Quizzes for 3rd Graders",
    grade: "Grade 3",
    audience: "For Students (Ages 8-9)",
    cover: "assets/images/books/grade3-worksheet-quiz.jpg",
    icon: "🦕",
    description:
      "Hands-on practice with the skills every kid needs today — one worksheet and one quiz per lesson, from strong passwords and spotting phishing to understanding AI chatbots.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/4ftJwxd",
    badge: "STUDENT WORKBOOK",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 4th Grade Lesson Plan Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Lessons for 4th Grade",
    grade: "Grade 4",
    audience: "For Teachers & Homeschool Parents",
    cover: "assets/images/books/grade4-lesson-plan.jpg",
    icon: "🦕",
    description:
      "A full foundation in cyber security, online safety, and AI safety — 36 ready-to-teach lessons with guided practice, independent practice, and a full assessment with answer key.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/44WrHAU",
    badge: "TEACHER RESOURCE",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 4th Grade Student Worksheet & Quiz Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Practice Worksheets and Quizzes for 4th Graders",
    grade: "Grade 4",
    audience: "For Students (Ages 9-10)",
    cover: "assets/images/books/grade4-worksheet-quiz.jpg",
    icon: "🦕",
    description:
      "Hands-on practice with the skills every kid needs today — one worksheet and one quiz per lesson, from strong passwords and spotting phishing to understanding AI chatbots.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/3TnVsbf",
    badge: "STUDENT WORKBOOK",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 5th Grade Lesson Plan Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Lessons for 5th Grade",
    grade: "Grade 5",
    audience: "For Teachers & Homeschool Parents",
    cover: "assets/images/books/grade5-lesson-plan.jpg",
    icon: "🦕",
    description:
      "A full foundation in cyber security, online safety, and AI safety — 36 ready-to-teach lessons with guided practice, independent practice, and a full assessment with answer key.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/4pX9MDF",
    badge: "TEACHER RESOURCE",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 5th Grade Student Worksheet & Quiz Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Practice Worksheets and Quizzes for 5th Graders",
    grade: "Grade 5",
    audience: "For Students (Ages 10-11)",
    cover: "assets/images/books/grade5-worksheet-quiz.jpg",
    icon: "🦕",
    description:
      "Hands-on practice with the skills every kid needs today — one worksheet and one quiz per lesson, from strong passwords and spotting phishing to understanding AI chatbots.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/4fGFX5p",
    badge: "STUDENT WORKBOOK",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 6th Grade Lesson Plan Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Lessons for 6th Grade",
    grade: "Grade 6",
    audience: "For Teachers & Homeschool Parents",
    cover: "assets/images/books/grade6-lesson-plan.jpg",
    icon: "🦕",
    description:
      "A full foundation in cyber security, online safety, and AI safety — 36 ready-to-teach lessons with guided practice, independent practice, and a full assessment with answer key.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/4g1meim",
    badge: "TEACHER RESOURCE",
    freePromo: false,
  },
  {
    title: "Cyber Elementary School: 6th Grade Student Worksheet & Quiz Book",
    subtitle: "36 Cyber Security, Online Safety & AI Safety Practice Worksheets and Quizzes for 6th Graders",
    grade: "Grade 6",
    audience: "For Students (Ages 11-12)",
    cover: "assets/images/books/grade6-worksheet-quiz.jpg",
    icon: "🦕",
    description:
      "Hands-on practice with the skills every kid needs today — one worksheet and one quiz per lesson, from strong passwords and spotting phishing to understanding AI chatbots.",
    formats: "Kindle eBook & Paperback",
    amazon: "https://amzn.to/4pLa7tb",
    badge: "STUDENT WORKBOOK",
    freePromo: false,
  },
];
 
