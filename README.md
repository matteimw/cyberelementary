# Cyber Elementary — Website

A plain HTML/CSS/JavaScript site for **www.cyberelementary.com**, built to run on GitHub Pages
(no build tools, no server, no frameworks — just files).

## What's in here

```
index.html          Home page — book series first under the hero, then reviews/blog/savings teasers
books.html           The 9-book Cyber Elementary School series
videos.html          YouTube video gallery — built and working, but NOT currently linked from
                      the site (removed at the owner's request, saved for future video ads)
reviews.html         Product reviews with affiliate links
deals.html           "Today's Savings" — Kindle sign-up, then the book series, then other deals
articles.html         Blog index — cards linking to each full article page
blog-*.html            One full article page per post (e.g. blog-ai-and-teen-mental-health.html)
CNAME                 Tells GitHub Pages this site should answer to www.cyberelementary.com
assets/css/style.css  All site styling — colors/fonts are CSS variables at the top
assets/js/config.js   Your Amazon affiliate tag, contact email, mascot image, other-site links
assets/js/main.js     Renders every card + the sticky bottom promo bar from the data files below
assets/js/data/
  books.js            <- Add/edit the 9-book series here
  videos.js           <- Add/edit YouTube videos here
  reviews.js           <- Add/edit product reviews here
  deals.js             <- Add/edit other Amazon promotions here (Kindle Daily Deal, Prime Student, etc.)
  kindle.js             <- Add/edit Kindle Unlimited trial/membership options here
  articles.js            <- Add/edit blog post listings here (title, byline, date, excerpt, link)
assets/images/         Put your own book covers / product photos / mascot art here (see below)
```

## Adding content (the 90% you'll do most often)

Every list on the site — books, reviews, deals, articles (and videos, once relinked) — is just a JavaScript array in
`assets/js/data/*.js`. Each file has a comment block at the top explaining every field.
To add something new: **copy an existing entry, paste it into the list, edit the text.**
No HTML editing required.

### Adding a book
Edit `assets/js/data/books.js`. Set `amazon` to your amzn.to link (already tagged — used
as-is), a full Amazon URL, or a bare ASIN. New entries append after the original 9, and
whatever's in this file — in this order — is what shows on the home page and at the top of
`books.html`.

**The real 9 titles are wired up** — titles, subtitles, descriptions, and cover images all
came from your `KDP_Metadata_*.docx` files and `*_eBook_Cover.jpg` images in
`final versions/<grade>/`. One thing to verify: you sent the 9 amzn.to links without saying
which book each one is for, so I matched them in the order you pasted them (Grade 3 Lesson
Plan → Grade 3 Worksheet → Grade 4 Lesson Plan → Grade 4 Worksheet → Grade 5 Lesson Plan →
Grade 5 Worksheet → Grade 6 Lesson Plan → Grade 6 Worksheet → Complete book). If any link
actually points to a different book, swap the `amazon` values between the two entries in
`books.js` — nothing else needs to change.

### Adding a blog article
Two steps, since a full article has too much unique content to template like the other
sections:
1. Copy an existing `blog-*.html` file (e.g. `blog-ai-and-teen-mental-health.html`), rename
   it `blog-your-slug-here.html`, and replace the title, byline, date, and body content
   between the `<!-- ARTICLE CONTENT START -->` and `<!-- ARTICLE CONTENT END -->` comments.
   Keep the header/footer/sticky-bar markup as-is — that's shared chrome, not part of the
   article.
2. Edit `assets/js/data/articles.js` and add an entry pointing `url` at your new file. That
   entry is what makes the post show up as a card on `articles.html` and in the "From the
   Blog" teaser on the home page.

### Adding a Kindle Unlimited plan
Edit `assets/js/data/kindle.js`. These show on the "Today's Savings" page as the "Step 1"
options and feed the free-trial link in the sticky bottom bar (it always uses the first
entry in this file).

### Adding a YouTube video (currently unpublished)
The Videos page and its nav link, footer link, and home page section are all removed for
now (saved for future video ads) — but `videos.html` and `assets/js/data/videos.js` still
work exactly as built. Edit `assets/js/data/videos.js` the same way as the other data files
(you only need the video ID from the YouTube URL — `youtube.com/watch?v=`**`THIS_PART`**),
then to bring the section back live: add `{ href: "videos.html", label: "Videos" }` to
`NAV_LINKS` in `assets/js/main.js`, and restore the Videos section + hero button +
`videos.js` `<script>` tag in `index.html` (there's an HTML comment marking exactly where
they were removed). Once it's back, each video automatically gets its own shareable link in
the form `videos.html#video-id-slug` — click "Copy share link" under any video on the live
site to grab it for Instagram/Facebook/etc.

### Adding a review
Edit `assets/js/data/reviews.js`. Works for Amazon products (`linkType: "amazon"`) or any
other affiliate program (`linkType: "other"`, paste the full URL).

### Adding/updating an Amazon deal
Edit `assets/js/data/deals.js`. Use `dealType: "time-bound"` for things like a Kindle Daily
Deal (set `expires` to a human-readable note), or `dealType: "evergreen"` for things like
Prime Student that don't expire. Delete or comment out a deal once it's no longer running.

## Your Amazon affiliate tag

Open `assets/js/config.js` and set `amazonTag` to your real Associates tracking ID
(looks like `yourname-20`). Every "Buy on Amazon" button site-wide uses it automatically —
you never have to paste it into individual links. amzn.to links (the kind SiteStripe
generates, already tagged) are left exactly as you paste them in, since they carry their own
tracking — only bare ASINs and full amazon.com URLs get the default tag appended.

## Contact email

Also in `config.js`: `contactEmail` is the single source for the address used in the footer,
the Contact section's "Email Us" button, and anywhere else on the site. It's currently set
to `support@baldwinterneypress.com`.

## Images: what actually works with Amazon

Two options were considered for showing Amazon products — the answer depends on what you want:

1. **True Amazon `<iframe>` product embeds** — Amazon does not allow you to iframe an
   arbitrary product page yourself (their pages send an `X-Frame-Options`/CSP header that
   blocks it, and their Associates policy restricts this too). The only iframes Amazon
   supports are ones **they generate for you** — banner/native shopping ad widgets from
   SiteStripe or the Product Advertising API, which pull a live image, price, and title.
   These work, but they require Product Advertising API approval (which itself requires
   a sales history) and add a layer of Amazon-hosted JavaScript to your page.

2. **Preview cards (what this site uses)** — a small styled box with a title, your own
   short description/review, a star rating (for reviews), and a "Buy on Amazon" button
   that links out with your affiliate tag. This is simpler, loads faster, works with zero
   approvals, and is what most affiliate sites — including large ones — actually use for
   book and product promotion.

**Do you need a picture of every item?** Not to launch — every card falls back to a big
colorful emoji placeholder if you leave `cover`/`image` blank in the data file. When you're
ready to add real photos: for your **own books**, use your own cover art (you own the
rights) — drop the file in `assets/images/books/` and set `cover: "assets/images/books/yourfile.jpg"`
in `books.js`. For **other people's products** you're reviewing, the safest options are (a) a
photo you took yourself, (b) a stock/purchased photo, or (c) an image pulled from Amazon's
official SiteStripe "image + text" widget (which is licensed for that use) rather than
right-clicking and saving a product photo directly from the listing.

Recommended image size: roughly 800×600px (4:3), JPG or WebP, kept under ~300KB so pages
load quickly.

## Mascot art — Choco & Nacho

Your two dino mascots are live across the site: **Choco** (red, the "CE" shield guardian) is
the header logo and appears in the hero art, and **Nacho** (green, holds a phone — the
password/account mascot) appears in the hero art and next to the Kindle sign-up section on
"Today's Savings," since he's already carrying keys and a fingerprint-lock phone in the
artwork. Both images had their white backgrounds converted to transparency so they drop
cleanly onto any background color. Files live in `assets/images/mascot/choco.png` and
`nacho.png`; swap in new art anytime by replacing those files or updating `mascotImage` /
`mascotImage2` in `config.js`.

## The sticky bottom bar

Every page now has a bar fixed to the bottom of the screen with a scrolling message plus two
buttons: a free Kindle Unlimited trial link and a "Shop the Books" link. It always pulls the
free-trial link from the first entry in `kindle.js`, so updating that file updates the bar
too. Visitors can dismiss it with the ✕ button (it reappears on the next page load). If
you'd rather have this as a side rail instead of a bottom bar, let me know and I'll rebuild
it that way.

## YouTube embeds

Videos are embedded using YouTube's standard `<iframe>` embed (via `youtube-nocookie.com`,
the privacy-enhanced mode that doesn't set cookies until someone actually plays the video —
good practice on a kids' site). This is the officially supported way to embed YouTube videos
and requires nothing from you except the video ID — no API key, no approval.

## Local preview

Because this is a static site, you can preview it by just opening `index.html` in a browser,
or, for the most accurate preview (matches how GitHub Pages serves it), run a tiny local
server from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000` in your browser.

## Publishing & DNS

See the step-by-step guide provided in chat for: creating the GitHub repo, pushing this
code, enabling GitHub Pages, previewing the live `github.io` URL, and pointing
`www.cyberelementary.com` at it via DNS.
