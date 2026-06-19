# Uprise Analytics — Website Standard Operating Procedure (SOP)
**Last Updated:** 19 June 2026
**Author:** Juan-Lee Meyer
**Website:** https://www.upriseanalytics.co.za

---

## TABLE OF CONTENTS

1. [Overview & Tech Stack](#1-overview--tech-stack)
2. [GitHub — Version Control](#2-github--version-control)
3. [Vercel — Deployment](#3-vercel--deployment)
4. [File & Folder Structure](#4-file--folder-structure)
5. [Contact Form — Web3Forms](#5-contact-form--web3forms)
6. [SEO Setup](#6-seo-setup)
7. [Google Search Console](#7-google-search-console)
8. [Google Business Profile](#8-google-business-profile)
9. [Google Analytics 4](#9-google-analytics-4)
10. [Cookie Consent Banner](#10-cookie-consent-banner)
11. [Privacy Policy](#11-privacy-policy)
12. [Keywords Master List](#12-keywords-master-list)
13. [SEO Audit Schedule](#13-seo-audit-schedule)
14. [Blog Posts — Planned](#14-blog-posts--planned)
15. [Ongoing Maintenance Checklist](#15-ongoing-maintenance-checklist)

---

## 1. Overview & Tech Stack

| Item | Detail |
|---|---|
| **Live URL** | https://www.upriseanalytics.co.za |
| **Business** | Uprise Analytics — Power BI & Data Analytics Consulting |
| **Location** | Johannesburg & Pretoria, Gauteng, South Africa |
| **Phone** | 062 131 7657 |
| **Email** | info@upriseanalytics.co.za |
| **Type** | Static HTML/CSS/JS website — no CMS, no WordPress |
| **Hosting** | Vercel (free tier) |
| **Domain registrar** | Purchased separately, DNS pointed to Vercel |
| **Version control** | GitHub |

**Tech stack:**
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Poppins (headings), Inter (body)
- Web3Forms (contact form submissions)
- Google Analytics 4 (tracking)
- Schema.org JSON-LD (structured data)

---

## 2. GitHub — Version Control

**Repository:** https://github.com/Uprise-Analytics/uprise-analytics-website.git
**Branch:** `main` (production branch — everything pushed here goes live)

### How to make changes and push live

```bash
# 1. Make your changes to the files
# 2. Open terminal / Git Bash in the Website folder
# 3. Stage the changed files
git add filename.html

# 4. Commit with a message
git commit -m "Describe what you changed"

# 5. Push to GitHub (this triggers Vercel auto-deploy)
git push origin main
```

### Important rules
- Never delete the `google685a724e72f0b47f.html` file — this is Google Search Console verification. Deleting it loses GSC ownership.
- Always push to `main` branch — other branches do NOT auto-deploy.
- Vercel deploys within 30–60 seconds after a push.

---

## 3. Vercel — Deployment

**Dashboard:** https://vercel.com (log in with GitHub account)
**Project:** uprise-analytics-website
**Auto-deploy:** Every push to `main` branch automatically deploys to live.

### How deployment works
1. You push code to GitHub (`main` branch)
2. Vercel detects the push automatically
3. Vercel builds and deploys within ~60 seconds
4. Live site updates at https://www.upriseanalytics.co.za

### Domain setup (already done)
- Domain purchased separately and DNS pointed to Vercel
- Both `upriseanalytics.co.za` (without www) and `www.upriseanalytics.co.za` work
- `www` is the canonical (preferred) version
- Non-www redirects to www automatically via Vercel

### If something breaks after a push
1. Go to vercel.com → your project → Deployments
2. Find the last working deployment
3. Click the three dots → "Promote to Production" to roll back

---

## 4. File & Folder Structure

```
Website/
│
├── index.html                          ← Main homepage (only page, single-page site)
├── privacy-policy.html                 ← POPIA privacy policy page
├── sitemap.xml                         ← Tells Google what pages exist
├── robots.txt                          ← Tells Google how to crawl the site
├── google685a724e72f0b47f.html         ← Google Search Console verification (DO NOT DELETE)
│
├── css/
│   └── styles.css                      ← All styling for the website
│
├── js/
│   └── main.js                         ← All JavaScript (navbar, form, cookie consent, animations)
│
├── Images/
│   ├── logo-white.png                  ← White logo (used on dark navbar)
│   ├── logo-dark.png                   ← Dark logo (used on scrolled navbar)
│   └── favcon.png                      ← Favicon (browser tab icon)
│
└── SOP Standard operating procedure/
    └── Website SOP.md                  ← This document
```

---

## 5. Contact Form — Web3Forms

**Provider:** Web3Forms (https://web3forms.com)
**Access key:** Stored in `index.html` as a hidden input field
**Submissions go to:** info@upriseanalytics.co.za

### How it works
1. User fills in the form and clicks "Book Free Consultation"
2. JavaScript sends the form data to the Web3Forms API
3. Web3Forms forwards it to your email
4. User sees green "Message Sent ✓" confirmation
5. Google Analytics fires `contact_form_submitted` event

### Anti-spam
- Honeypot field is included (hidden from users, traps bots)
- Web3Forms has server-side spam filtering

### If you stop receiving form submissions
1. Check your spam/junk folder first
2. Log in to web3forms.com and verify the access key is still active
3. Check the Web3Forms dashboard for submission logs

---

## 6. SEO Setup

### 6.1 Page Title
```
Power BI & Data Analytics Consulting Johannesburg | Uprise Analytics
```
- Location (Johannesburg) in title = critical for local SEO
- Primary keyword at the front
- Brand name at the end

### 6.2 Meta Description
```
Power BI dashboards, data analytics consulting and business intelligence reporting
for manufacturing and engineering SMEs in Johannesburg and Gauteng.
No full-time analyst needed — Uprise Analytics.
```
- Under 160 characters
- Contains primary keywords + location + value proposition

### 6.3 Canonical Tag
```html
<link rel="canonical" href="https://www.upriseanalytics.co.za/">
```
Prevents duplicate content issues. Always points to the www version.

### 6.4 Open Graph Tags (Social Sharing)
Set in `index.html` — controls how the site looks when shared on LinkedIn, Facebook, WhatsApp:
- `og:title` — headline
- `og:description` — summary
- `og:image` — logo image
- `og:url` — canonical URL
- `og:locale` — `en_ZA`

### 6.5 Schema.org JSON-LD (Structured Data)
Two schema blocks are in `index.html`:
1. **Organization** — name, URL, logo, email, phone, address, LinkedIn
2. **LocalBusiness / ProfessionalService** — full address, GPS coordinates, service area, services offered, price range

Key schema fields set:
- `PostalAddress`: Johannesburg, Gauteng, ZA
- `GeoCoordinates`: -26.2041, 28.0473
- `areaServed`: Johannesburg (City), Pretoria (City), Gauteng (AdministrativeArea)
- `serviceType`: 16 services listed (Power BI, KPI dashboards, reporting automation, etc.)
- `sameAs`: LinkedIn company page URL

### 6.6 Sitemap
**File:** `sitemap.xml`
**URL:** https://www.upriseanalytics.co.za/sitemap.xml
**Submitted to:** Google Search Console

Current pages in sitemap:
| URL | Priority | Update frequency |
|---|---|---|
| https://www.upriseanalytics.co.za/ | 1.0 | Monthly |
| https://www.upriseanalytics.co.za/privacy-policy.html | 0.3 | Yearly |

**When you add a new page (e.g. blog post), update sitemap.xml** and add the new URL. Then go to Google Search Console → Sitemaps → re-submit.

### 6.7 Robots.txt
**File:** `robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://www.upriseanalytics.co.za/sitemap.xml
```
Allows all search engines to crawl everything.

### 6.8 Favicon
**File:** `Images/favcon.png`
Linked in `<head>` of both `index.html` and `privacy-policy.html`.

---

## 7. Google Search Console

**URL:** https://search.google.com/search-console
**Property:** https://www.upriseanalytics.co.za/
**Verification method:** HTML file (`google685a724e72f0b47f.html` in root folder — DO NOT DELETE)

### What it does
- Shows which Google searches your site appears in
- Shows how many clicks and impressions you get
- Shows your average ranking position per keyword
- Alerts you to crawl errors or indexing issues

### What was set up
1. Ownership verified via HTML file method
2. Sitemap submitted: https://www.upriseanalytics.co.za/sitemap.xml
3. Site indexed by Google (takes 3–14 days after submission)

### What to check monthly (see Section 13)
- Performance → Queries (which keywords get impressions)
- Coverage → any indexing errors
- Sitemaps → confirm sitemap is showing "Success"

---

## 8. Google Business Profile

**URL:** https://business.google.com
**Profile name:** Uprise Analytics
**Category:** IT Consultant (primary) — "Data Analyst" not available in GBP's fixed category list
**Phone:** 062 131 7657 (must match website — NAP consistency)
**Website:** https://www.upriseanalytics.co.za

### What was set up
- Business name, phone, website, address
- Service areas: Johannesburg, Pretoria, Gauteng
- Business description (written to include keywords)
- Services listed
- Business hours
- Logo (square 720x720px, navy background)
- Cover photo (1332x750px, 16:9 ratio)

### NAP Consistency Rule
**NAP = Name, Address, Phone.** These must be identical across:
- Website (contact section)
- Google Business Profile
- Any directories you list on

If they differ, Google penalises your local ranking.

### How to get more Google reviews (critical for ranking)
1. Log into Google Business Profile
2. Click "Ask for reviews"
3. Copy the review link
4. Send it directly to a contact, asking them to leave a review
5. The more reviews (and higher rating), the higher you rank on Google Maps

---

## 9. Google Analytics 4

**Property:** Uprise Analytics
**Measurement ID:** G-B9ZDE1XXMC
**Stream URL:** upriseanalytics.co.za
**Stream ID:** 10363830711
**Dashboard:** https://analytics.google.com

### How the tag is installed
The GA4 tag is added directly in `<head>` of both `index.html` and `privacy-policy.html`:
```html
<!-- Disable GA if user opted out -->
<script>if (localStorage.getItem('analyticsConsent') === 'false') { window['ga-disable-G-B9ZDE1XXMC'] = true; }</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-B9ZDE1XXMC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-B9ZDE1XXMC');
</script>
```
The first script disables GA if the user declined analytics cookies.

### Events tracked automatically (Enhanced Measurement)
| Event | What it tracks |
|---|---|
| `page_view` | Every page load |
| `session_start` | Each new visit |
| `first_visit` | New visitor (first ever visit) |
| `scroll` | User scrolls 90% down the page |
| `user_engagement` | Active time on page |
| `form_start` | User starts filling the contact form |

### Custom event (added manually in `js/main.js`)
| Event | When it fires |
|---|---|
| `contact_form_submitted` | Contact form submitted successfully |

### Key events (conversions)
Go to Admin → Events → Key events to see starred conversions.
- `contact_form_submitted` ← most important — mark this as a key event once it appears in Recent events

### What to check monthly
- Reports → Acquisition → Traffic acquisition (where visitors come from)
- Reports → Engagement → Events (what users do on the site)
- Reports → Realtime (live visitors)
- Key events count (how many contact form submissions this month)

---

## 10. Cookie Consent Banner

**Governed by:** POPIA (Protection of Personal Information Act, South Africa)

### How it works
1. First-time visitor sees a banner at the bottom of the page
2. Two options: **"Accept All"** or **"Manage Cookies"**
3. "Manage Cookies" opens a modal with two toggles:
   - **Essential Cookies** — always on, cannot be disabled
   - **Analytics Cookies** — Google Analytics, on by default, can be toggled off
4. User saves preference → stored in `localStorage`
5. Banner never shows again on that device

### localStorage keys
| Key | Values | Meaning |
|---|---|---|
| `cookieConsent` | `accepted` / `customized` | Whether the user has made a choice |
| `analyticsConsent` | `true` / `false` | Whether analytics cookies are allowed |

### How GA is disabled if user declines analytics
The following script runs BEFORE the GA tag loads:
```javascript
if (localStorage.getItem('analyticsConsent') === 'false') {
    window['ga-disable-G-B9ZDE1XXMC'] = true;
}
```
This tells GA to not collect data for that user.

### Where the cookie banner code lives
- **HTML:** `index.html` and `privacy-policy.html` (before `</body>`)
- **CSS:** `css/styles.css` (Cookie Consent Banner and Cookie Settings Modal sections)
- **JS:** `js/main.js` (Cookie Consent section) and inline in `privacy-policy.html`

---

## 11. Privacy Policy

**URL:** https://www.upriseanalytics.co.za/privacy-policy.html
**File:** `privacy-policy.html`
**Governed by:** POPIA (Protection of Personal Information Act, 4 of 2013)

### What it covers
1. Who we are (contact details)
2. What information we collect (contact form + Google Analytics)
3. How we use it (respond to enquiries, improve website)
4. Who we share it with (Web3Forms, Google Analytics, Vercel)
5. Cookies (Google Analytics 4, opt-in/opt-out)
6. Data retention
7. User rights under POPIA (access, correction, deletion, objection, complaint)
8. Security (HTTPS)
9. Changes to the policy
10. Contact for data requests

### Links to Privacy Policy
- Cookie banner "Learn more" link → `/privacy-policy.html`
- Footer navigation on both pages → `Privacy Policy`

### When to update
- If you add a new third-party tool that processes data (new CRM, email tool, etc.)
- If you change how you use contact form data
- Update the "Last updated" date at the top when any changes are made

---

## 12. Keywords Master List

### Current meta keywords (in `index.html`)
```
Power BI consultant Johannesburg
data analytics consulting Gauteng
business intelligence consulting South Africa
business intelligence consultant Johannesburg
data analytics consulting Johannesburg
data visualisation consultant South Africa
KPI dashboard South Africa
KPI dashboard Johannesburg
management reporting consultant Johannesburg
reporting automation South Africa
Excel to Power BI South Africa
freelance data analyst Johannesburg
analytics consultant South Africa
Power BI consulting South Africa
BI consulting Johannesburg
data analytics SME South Africa
reporting consultant Gauteng
Power BI dashboard South Africa
manufacturing analytics Johannesburg
manufacturing KPI dashboard South Africa
operational dashboard South Africa
month-end reporting South Africa
SME business intelligence South Africa
Power BI specialist Johannesburg
data analyst Johannesburg
outsource data analytics South Africa
```

### Where keywords appear on the page
| Location | Keyword used |
|---|---|
| `<title>` | Power BI & Data Analytics Consulting Johannesburg |
| `<meta description>` | data analytics consulting, business intelligence, Johannesburg, Gauteng |
| Hero badge | Data Analytics & Business Intelligence |
| Hero subtitle | Johannesburg and Gauteng |
| Services section | Power BI dashboards, KPI reporting, management reporting, data visualisation, Excel to Power BI, month-end reporting automation |
| About section | small and medium businesses across Johannesburg and Gauteng |
| Contact section | Johannesburg & Pretoria, Gauteng |
| Schema serviceType | 16 services listed |
| Schema areaServed | Johannesburg, Pretoria, Gauteng |

### Keywords to target next (via blog posts)
| Keyword | Blog post title |
|---|---|
| `Power BI manufacturing South Africa` | "How Johannesburg manufacturers are replacing Excel with Power BI" |
| `month-end reporting automation South Africa` | "How to automate your month-end reporting with Power BI" |
| `Excel vs Power BI South Africa` | "Excel vs Power BI: Which one does your Gauteng business actually need?" |
| `KPI dashboard manufacturing South Africa` | "The 5 KPIs every Johannesburg manufacturer should track on a dashboard" |
| `SME business intelligence South Africa` | "Why SA SMEs don't need a full-time analyst — and what to do instead" |

---

## 13. SEO Audit Schedule

### Monthly (first Monday of every month — 30 minutes)

**Google Search Console:**
- [ ] Go to Performance → Queries — note top 10 keywords by clicks
- [ ] Check if impressions are growing month over month
- [ ] Check Coverage tab — fix any "Excluded" or "Error" pages
- [ ] Check Core Web Vitals — ensure no new issues

**Google Analytics:**
- [ ] Check total sessions vs previous month (is traffic growing?)
- [ ] Check Traffic acquisition — where are visitors coming from?
- [ ] Check key events — how many contact form submissions this month?
- [ ] Check which pages get the most views

**Google Business Profile:**
- [ ] Check profile views and search impressions
- [ ] Respond to any new reviews
- [ ] Add a new GBP post (update, offer, or tip)
- [ ] Verify all information is still accurate (phone, hours, website)

---

### Quarterly (every 3 months — 2 hours)

**Keyword ranking check:**
- [ ] Go to Search Console → Performance → Queries
- [ ] Export your top 20 keywords and their average positions
- [ ] Compare to last quarter — are you moving up?
- [ ] Identify any keywords that dropped — investigate why

**Competitor check:**
- [ ] Google your top 5 keywords (e.g. "Power BI consultant Johannesburg")
- [ ] Note who is ranking above you
- [ ] Visit competitor sites — have they added new content or pages?
- [ ] Check if they have blog posts or pages you don't

**Content & keyword update:**
- [ ] Are there new services you offer that aren't on the website?
- [ ] Are there new keywords people are searching? (use Google Search Console suggestions)
- [ ] Update meta keywords if needed
- [ ] Update schema serviceType if new services added

**Technical check:**
- [ ] Test all pages load correctly (index.html, privacy-policy.html)
- [ ] Test contact form — submit a test message and confirm you receive it
- [ ] Test cookie banner — clear localStorage and reload to confirm banner appears
- [ ] Check all links in footer and navigation work
- [ ] Run site through https://pagespeed.web.dev/ — check performance score

---

### Annually (once a year — half day)

**Full SEO audit:**
- [ ] Review and update Privacy Policy (add any new tools or data practices)
- [ ] Update sitemap.xml `lastmod` date for all pages
- [ ] Review all on-page content — is it still accurate and competitive?
- [ ] Review all 26 keywords — are they still relevant? Have search trends changed?
- [ ] Check if new blog posts are needed
- [ ] Review Google Business Profile — update description, services, photos
- [ ] Check local directory listings (yellosa.co.za, cylex.co.za) — are they still accurate?
- [ ] Review Google Analytics data for the full year — what worked?
- [ ] Check if any tools have changed (Web3Forms, Vercel pricing, Google products)
- [ ] Update "Last Updated" date in Privacy Policy and this SOP

**When to do an urgent audit (outside schedule):**
- Traffic drops by more than 30% in a month
- Contact form stops receiving submissions
- Google Search Console sends an alert email
- A major Google algorithm update is announced (check searchengineland.com)
- You add a new service or change your target market

---

## 14. Blog Posts — Planned

Blog posts live in the root Website folder as separate HTML pages. Each page:
- Targets one specific keyword
- Is at least 600 words
- Links back to the homepage contact section
- Must be added to `sitemap.xml` after creation

| # | File name | Target keyword | Status |
|---|---|---|---|
| 1 | `blog-power-bi-manufacturing.html` | Power BI manufacturing South Africa | Not started |
| 2 | `blog-month-end-reporting.html` | month-end reporting automation South Africa | Not started |
| 3 | `blog-excel-vs-power-bi.html` | Excel vs Power BI South Africa | Not started |
| 4 | `blog-kpi-dashboard-manufacturing.html` | KPI dashboard manufacturing South Africa | Not started |
| 5 | `blog-sme-business-intelligence.html` | SME business intelligence South Africa | Not started |

After each blog post is added:
1. Add it to `sitemap.xml`
2. Push to GitHub
3. Go to Google Search Console → URL Inspection → request indexing for the new page

---

## 15. Ongoing Maintenance Checklist

### When you change a service or price
- [ ] Update the Services section in `index.html`
- [ ] Update `serviceType` in the JSON-LD schema
- [ ] Update meta keywords if a new keyword applies
- [ ] Push to GitHub

### When you get a new phone number or email
- [ ] Update `index.html` contact section
- [ ] Update `privacy-policy.html` contact details
- [ ] Update JSON-LD schema (`telephone`, `email` fields)
- [ ] Update Google Business Profile
- [ ] Update all local directory listings
- [ ] Push to GitHub

### When you add a new page
- [ ] Add the page to `sitemap.xml`
- [ ] Add a link to it in the footer nav (both `index.html` and `privacy-policy.html`)
- [ ] Add the cookie banner + modal HTML to the new page
- [ ] Add the GA disable check + GA tag to the new page head
- [ ] Push to GitHub
- [ ] Submit updated sitemap in Google Search Console

### When a Google algorithm update happens
- Check Google Search Console → Performance for any ranking drops
- Check Search Engine Land (searchengineland.com) for details on what changed
- Adjust content if needed — usually means making content more helpful and specific

---

*This SOP was created June 2026. Review and update annually or whenever significant changes are made to the website or tools.*
