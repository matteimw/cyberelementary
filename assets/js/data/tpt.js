/* =========================================================================
   TEACHERS PAY TEACHERS (TPT) DIGITAL PRODUCTS
   =========================================================================
   Instant-download PDF versions of the Cyber Elementary curriculum, sold
   on Teachers Pay Teachers. Shown on the home page ("For Teachers" strip,
   grouped by grade) and on the Books page (full product cards).

   Added 2026-10-05. Prices checked on TPT 2026-10-05 ($4.99 each) — TPT
   prices are NOT pulled automatically, so if you change a price (or run a
   TPT sale) update the "price" field here too, or set it to "" to hide it.

   HOW TO ADD ANOTHER TPT PRODUCT
   ------------------------------
   Copy one entry (including the { and }), paste it above the closing "];",
   and edit the fields. Cover images live in assets/images/tpt/ — use the
   square 2000x2000 TPT cover, resized to 600x600 JPG.

   FIELD GUIDE
   -----------
   type        - "lessons" (Lesson Plans & Slides) or "workbook"
                 (Workbook & Quizzes) — controls which row it shows in
   grade       - "3", "4", "5" or "6"
   title       - Product title (short version of the TPT title)
   cover       - Path to the square cover image
   description - 1-2 sentences for teachers
   includes    - Short bullet list of what's in the download
   price       - Display price, e.g. "$4.99" ("" hides it)
   url         - The TPT product page link
   badge       - Optional ribbon text (sits on top of the cover image, so
                 keep it short, e.g. "NEW" or "SALE"; "" for none)
   ========================================================================= */

const TPT_PRODUCTS = [
  // ---- 36 Lesson Plans + Teacher Slides (PDF) ----
  {
    type: "lessons", grade: "3",
    title: "3rd Grade Cyber & AI Safety: 36 Lesson Plans + Slides",
    cover: "assets/images/tpt/grade3-lessons.jpg",
    description: "A full year of cyber safety, online safety, digital citizenship and AI safety in 30–40 minutes a week — print and go.",
    includes: ["36 one-page lesson plans", "144 classroom slides (4 per lesson)", "Pairs with the free Cyber Elementary videos"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/3rd-Grade-Cyber-AI-Security-and-Safety-36-Lessons-with-Lesson-Plans-and-Slide-17816849",
    badge: "",
  },
  {
    type: "lessons", grade: "4",
    title: "4th Grade Cyber & AI Safety: 36 Lesson Plans + Slides",
    cover: "assets/images/tpt/grade4-lessons.jpg",
    description: "A full year of cyber safety, online safety, digital citizenship and AI safety in 30–40 minutes a week — print and go.",
    includes: ["36 one-page lesson plans", "144 classroom slides (4 per lesson)", "Pairs with the free Cyber Elementary videos"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/4th-Grade-Cyber-AI-Security-and-Safety-36-Lesson-Plans-and-Slides-17816988",
    badge: "",
  },
  {
    type: "lessons", grade: "5",
    title: "5th Grade Cyber & AI Safety: 36 Lesson Plans + Slides",
    cover: "assets/images/tpt/grade5-lessons.jpg",
    description: "A full year of cyber safety, online safety, digital citizenship and AI safety in 30–40 minutes a week — print and go.",
    includes: ["36 one-page lesson plans", "144 classroom slides (4 per lesson)", "Pairs with the free Cyber Elementary videos"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/5th-Grade-Cyber-AI-Security-and-Safety-36-Lessons-and-Slides-17817032",
    badge: "",
  },
  {
    type: "lessons", grade: "6",
    title: "6th Grade Cyber & AI Safety: 36 Lesson Plans + Slides",
    cover: "assets/images/tpt/grade6-lessons.jpg",
    description: "A full year of cyber safety, online safety, digital citizenship and AI safety in 30–40 minutes a week — print and go.",
    includes: ["36 one-page lesson plans", "144 classroom slides (4 per lesson)", "Pairs with the free Cyber Elementary videos"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/6th-Grade-Cyber-AI-Security-and-Safety-36-Lessons-and-Slides-17817082",
    badge: "",
  },

  // ---- Skills Workbook & Lesson Quizzes (PDF, version 2) ----
  {
    type: "workbook", grade: "3",
    title: "3rd Grade Cyber & AI Safety: Workbook + Quizzes",
    cover: "assets/images/tpt/grade3-workbook.jpg",
    description: "Independent practice for every lesson — worksheets, vocabulary puzzles and quizzes, with a full teacher answer key.",
    includes: ["36 worksheets", "36 lesson quizzes + puzzles", "Teacher answer key"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/Cyber-Elementary-3rd-Grade-Cyber-AI-Security-and-Safety-Workbooks-and-Quizzes-17817224",
    badge: "",
  },
  {
    type: "workbook", grade: "4",
    title: "4th Grade Cyber & AI Safety: Workbook + Quizzes",
    cover: "assets/images/tpt/grade4-workbook.jpg",
    description: "Independent practice for every lesson — worksheets, vocabulary puzzles and quizzes, with a full teacher answer key.",
    includes: ["36 worksheets", "36 lesson quizzes + puzzles", "Teacher answer key"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/Cyber-Elementary-4th-Grade-Cyber-AI-Security-and-Safety-Workbooks-and-Quizzes-17817318",
    badge: "",
  },
  {
    type: "workbook", grade: "5",
    title: "5th Grade Cyber & AI Safety: Workbook + Quizzes",
    cover: "assets/images/tpt/grade5-workbook.jpg",
    description: "Independent practice for every lesson — worksheets, vocabulary puzzles and quizzes, with a full teacher answer key.",
    includes: ["36 worksheets", "36 lesson quizzes + puzzles", "Teacher answer key"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/Cyber-Elementary-5th-Grade-Cyber-AI-Security-and-Safety-Workbooks-and-Quizzes-17817398",
    badge: "",
  },
  {
    type: "workbook", grade: "6",
    title: "6th Grade Cyber & AI Safety: Workbook + Quizzes",
    cover: "assets/images/tpt/grade6-workbook.jpg",
    description: "Independent practice for every lesson — worksheets, vocabulary puzzles and quizzes, with a full teacher answer key.",
    includes: ["36 worksheets", "36 lesson quizzes + puzzles", "Teacher answer key"],
    price: "$4.99",
    url: "https://www.teacherspayteachers.com/Product/Cyber-Elementary-6th-Grade-Cyber-AI-Security-and-Safety-Workbooks-and-Quizzes-17817433",
    badge: "",
  },
];
