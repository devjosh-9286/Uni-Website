# MDSU Website — Full Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the MDSU university website with all inner pages, working JS functionality, and a live deployment on Netlify.

**Architecture:** Static HTML/CSS/JS site with a shared `shared.css` and a new `main.js` for global interactivity. A `data/` folder holds mock JSON for search and results lookup. Shared header/footer extracted to `includes/` for single-source maintenance.

**Tech Stack:** HTML5, CSS3 (custom properties), Vanilla JS (ES6+), JSON mock data, Netlify (deployment)

**Security note:** All JS that renders JSON data into the DOM uses `innerHTML` with data sourced only from our own controlled JSON files — not user input. No user-supplied strings are ever rendered as HTML. Any future addition of user-submitted content must use `textContent` or a sanitizer (DOMPurify).

**Current State:**
- `index.html` — Homepage
- `admissions.html` — Admissions
- `exams.html` — Exams and Results
- `about.html` — About
- `shared.css` — Design tokens and shared components

---

## Phase 1 — Remaining Pages

### Task 1: Faculty Page

**Files:**
- Create: `faculty.html`
- Create: `data/faculty.json`

- [ ] **Step 1: Create `data/faculty.json`**

```json
[
  { "id": 1, "name": "Prof. Rajesh Kumar Sharma", "dept": "Mathematics", "role": "Professor & Head", "specialization": "Number Theory, Abstract Algebra", "email": "hod.maths@mdsuajmer.ac.in", "initial": "RK" },
  { "id": 2, "name": "Dr. Sunita Agarwal", "dept": "Physics", "role": "Associate Professor", "specialization": "Quantum Mechanics, Spectroscopy", "email": "sunita.physics@mdsuajmer.ac.in", "initial": "SA" },
  { "id": 3, "name": "Prof. Mahesh Chandra Gupta", "dept": "Chemistry", "role": "Professor & Head", "specialization": "Organic Chemistry, Drug Synthesis", "email": "hod.chem@mdsuajmer.ac.in", "initial": "MC" },
  { "id": 4, "name": "Dr. Priya Singh", "dept": "Economics", "role": "Assistant Professor", "specialization": "Macroeconomics, Development Economics", "email": "priya.eco@mdsuajmer.ac.in", "initial": "PS" },
  { "id": 5, "name": "Prof. Vinod Kumar Joshi", "dept": "Management Studies", "role": "Professor & Director", "specialization": "Strategic Management, Finance", "email": "director.mba@mdsuajmer.ac.in", "initial": "VK" },
  { "id": 6, "name": "Dr. Kavita Meena", "dept": "Botany", "role": "Associate Professor", "specialization": "Plant Ecology, Ethnobotany", "email": "kavita.botany@mdsuajmer.ac.in", "initial": "KM" },
  { "id": 7, "name": "Prof. Anil Verma", "dept": "Law", "role": "Professor & Dean", "specialization": "Constitutional Law, IPR", "email": "dean.law@mdsuajmer.ac.in", "initial": "AV" },
  { "id": 8, "name": "Dr. Seema Rajput", "dept": "Pharmacy", "role": "Associate Professor", "specialization": "Pharmaceutics, Drug Delivery", "email": "seema.pharmacy@mdsuajmer.ac.in", "initial": "SR" },
  { "id": 9, "name": "Prof. Deepak Sharma", "dept": "Computer Science", "role": "Professor & Head", "specialization": "Machine Learning, Distributed Systems", "email": "hod.cs@mdsuajmer.ac.in", "initial": "DS" },
  { "id": 10, "name": "Dr. Anita Yadav", "dept": "Environmental Sciences", "role": "Assistant Professor", "specialization": "Climate Change, Pollution Control", "email": "anita.env@mdsuajmer.ac.in", "initial": "AY" },
  { "id": 11, "name": "Prof. Ramesh Chand Pareek", "dept": "History", "role": "Professor & Head", "specialization": "Medieval Indian History, Rajasthan Studies", "email": "hod.history@mdsuajmer.ac.in", "initial": "RC" },
  { "id": 12, "name": "Dr. Nirmala Suthar", "dept": "Education", "role": "Associate Professor", "specialization": "Curriculum Design, Educational Psychology", "email": "nirmala.edu@mdsuajmer.ac.in", "initial": "NS" }
]
```

- [ ] **Step 2: Create `faculty.html`** — copy header/footer/util-bar from `admissions.html`. Page hero: "Faculty Directory". Layout: filter chips (one per department, dynamically built from JSON) + search input + 3-col card grid.

Card structure per faculty member:
```
[avatar circle][name + role]
[dept tag]
[specialization text]
[email link]
```

JS: fetch `data/faculty.json` → build dept filter buttons → render cards → re-render on filter/search change.

- [ ] **Step 3: Verify in browser**
```bash
open "faculty.html"
```
Department filter chips appear, search filters cards live.

- [ ] **Step 4: Commit**
```bash
git add faculty.html data/faculty.json
git commit -m "feat: add faculty directory with dept filter and live search"
```

---

### Task 2: Downloads Page

**Files:**
- Create: `downloads.html`
- Create: `data/downloads.json`

- [ ] **Step 1: Create `data/downloads.json`**

```json
[
  { "id": 1, "title": "Admission Form 2026-27 (UG)", "category": "Admissions", "size": "245 KB", "format": "PDF", "date": "2026-05-01", "url": "#" },
  { "id": 2, "title": "Admission Form 2026-27 (PG)", "category": "Admissions", "size": "248 KB", "format": "PDF", "date": "2026-05-01", "url": "#" },
  { "id": 3, "title": "Scholarship Application Form", "category": "Admissions", "size": "180 KB", "format": "PDF", "date": "2026-04-10", "url": "#" },
  { "id": 4, "title": "Re-evaluation Application Form", "category": "Examinations", "size": "120 KB", "format": "PDF", "date": "2026-04-15", "url": "#" },
  { "id": 5, "title": "Migration Certificate Request Form", "category": "Examinations", "size": "95 KB", "format": "PDF", "date": "2026-03-01", "url": "#" },
  { "id": 6, "title": "Mark Sheet Correction Form", "category": "Examinations", "size": "88 KB", "format": "PDF", "date": "2026-03-01", "url": "#" },
  { "id": 7, "title": "Anti-Ragging Affidavit (Student)", "category": "Student Welfare", "size": "75 KB", "format": "PDF", "date": "2026-04-01", "url": "#" },
  { "id": 8, "title": "Grievance Submission Form", "category": "Student Welfare", "size": "90 KB", "format": "PDF", "date": "2026-04-01", "url": "#" },
  { "id": 9, "title": "Hostel Allotment Form 2026-27", "category": "Student Welfare", "size": "135 KB", "format": "PDF", "date": "2026-05-05", "url": "#" },
  { "id": 10, "title": "Affiliation Application Form (New College)", "category": "Affiliation", "size": "320 KB", "format": "PDF", "date": "2026-02-01", "url": "#" },
  { "id": 11, "title": "Affiliation Renewal Form", "category": "Affiliation", "size": "290 KB", "format": "PDF", "date": "2026-02-01", "url": "#" },
  { "id": 12, "title": "RTI Application Form", "category": "Administration", "size": "65 KB", "format": "PDF", "date": "2026-01-10", "url": "#" },
  { "id": 13, "title": "Annual Report 2024-25", "category": "Reports", "size": "4.2 MB", "format": "PDF", "date": "2026-03-15", "url": "#" },
  { "id": 14, "title": "NIRF Data Submission Report 2025", "category": "Reports", "size": "1.8 MB", "format": "PDF", "date": "2026-01-20", "url": "#" },
  { "id": 15, "title": "UG Syllabus 2025-26 (Science)", "category": "Syllabus", "size": "2.1 MB", "format": "PDF", "date": "2025-07-01", "url": "#" },
  { "id": 16, "title": "PG Syllabus 2025-26 (Arts)", "category": "Syllabus", "size": "1.9 MB", "format": "PDF", "date": "2025-07-01", "url": "#" },
  { "id": 17, "title": "MBA Syllabus 2025-26", "category": "Syllabus", "size": "1.4 MB", "format": "PDF", "date": "2025-07-01", "url": "#" }
]
```

- [ ] **Step 2: Create `downloads.html`** — layout: sticky category sidebar (left, 220px) + main content (right). One section per category. Each section has a `table` with columns: Document, Format, Size, Date, Download button. Search input above the table filters rows across all sections.

JS: fetch `data/downloads.json` → group by category → build sidebar nav + render sections → search filters `tr` rows by hiding non-matching ones → scroll-spy highlights sidebar item.

- [ ] **Step 3: Verify**
```bash
open "downloads.html"
```
Category sidebar scrolls with page. Clicking category smooth-scrolls. Search hides non-matching rows.

- [ ] **Step 4: Commit**
```bash
git add downloads.html data/downloads.json
git commit -m "feat: add downloads page with category sidebar and search"
```

---

### Task 3: Contact Page

**Files:**
- Create: `contact.html`

- [ ] **Step 1: Create `contact.html`** — 2-column layout. Left: contact form (Name, Email, Category dropdown, Message textarea, Submit). Right: key phone numbers list + address block + map placeholder div.

Key contacts (hard-coded inline):
```
Vice Chancellor's Office: +91-145-2787056
Registrar:               +91-145-2787001
Controller of Examinations: +91-145-2787010
Admissions Cell:         +91-145-2787020
Affiliation Cell:        +91-145-2787030
Central Library:         +91-145-2787040
Address: Maharshi Dayanand Saraswati University,
         Pushkar Road, Ajmer - 305009, Rajasthan
```

Form submission JS: `e.preventDefault()` → replace form with a success message paragraph: "Your message has been submitted. We will respond within 3 working days." No backend needed.

Category options: General Enquiry, Admissions, Examinations, Affiliation, Grievance, RTI, Other.

- [ ] **Step 2: Commit**
```bash
git add contact.html
git commit -m "feat: add contact page with grievance form and dept directory"
```

---

### Task 4: Affiliation Page

**Files:**
- Create: `affiliation.html`
- Create: `data/colleges.json`

- [ ] **Step 1: Create `data/colleges.json`**

```json
[
  { "id": 1, "name": "Government College, Ajmer", "district": "Ajmer", "type": "Government", "programmes": ["BA", "BSc", "BCom"] },
  { "id": 2, "name": "Sophia Girls College, Ajmer", "district": "Ajmer", "type": "Private", "programmes": ["BA", "BCom", "BEd"] },
  { "id": 3, "name": "MDS College of Engineering", "district": "Ajmer", "type": "Private", "programmes": ["BTech", "MTech"] },
  { "id": 4, "name": "Government College, Beawar", "district": "Ajmer", "type": "Government", "programmes": ["BA", "BCom"] },
  { "id": 5, "name": "Government PG College", "district": "Nagaur", "type": "Government", "programmes": ["BA", "BSc", "BCom"] },
  { "id": 6, "name": "Shaheed Bhagat Singh College", "district": "Bhilwara", "type": "Private", "programmes": ["BA", "BCom", "BCA"] },
  { "id": 7, "name": "Government PG College, Tonk", "district": "Tonk", "type": "Government", "programmes": ["MA", "MSc", "MCom"] },
  { "id": 8, "name": "Rajputana Law College", "district": "Ajmer", "type": "Private", "programmes": ["LLB"] },
  { "id": 9, "name": "Subodh College of Commerce", "district": "Nagaur", "type": "Private", "programmes": ["BCom", "MCom", "MBA"] },
  { "id": 10, "name": "Modern College of Education", "district": "Bhilwara", "type": "Private", "programmes": ["BEd", "MEd"] },
  { "id": 11, "name": "Aravali College of Law", "district": "Bhilwara", "type": "Private", "programmes": ["LLB", "LLM"] },
  { "id": 12, "name": "Sai College of Commerce", "district": "Tonk", "type": "Private", "programmes": ["BCom", "MBA"] },
  { "id": 13, "name": "Rajasthan College of Pharmacy", "district": "Ajmer", "type": "Private", "programmes": ["DPharm", "BPharm"] },
  { "id": 14, "name": "Government Girls College, Ajmer", "district": "Ajmer", "type": "Government", "programmes": ["BA", "BSc", "BCom"] },
  { "id": 15, "name": "Vivekananda College", "district": "Nagaur", "type": "Private", "programmes": ["BA", "BCom", "BCA"] },
  { "id": 16, "name": "Green Valley College of Education", "district": "Tonk", "type": "Private", "programmes": ["BEd"] },
  { "id": 17, "name": "Rajputana Institute of Technology", "district": "Ajmer", "type": "Private", "programmes": ["BTech", "MCA"] },
  { "id": 18, "name": "Maharana Pratap College", "district": "Bhilwara", "type": "Government", "programmes": ["BA", "BCom", "BSc"] },
  { "id": 19, "name": "Sunrise College of Science", "district": "Ajmer", "type": "Private", "programmes": ["BSc", "MSc"] },
  { "id": 20, "name": "Sunrise Law College", "district": "Nagaur", "type": "Private", "programmes": ["LLB"] }
]
```

- [ ] **Step 2: Create `affiliation.html`** — layout: 3 info cards at top (New Affiliation, Renewal, Extension) + filter row (District select, Type select, search input) + college table. Columns: College Name, District, Type, Programmes.

JS: fetch `data/colleges.json` → render table rows → re-render on any filter change. Programmes shown as comma-separated text.

- [ ] **Step 3: Commit**
```bash
git add affiliation.html data/colleges.json
git commit -m "feat: add affiliation page with college directory and filters"
```

---

## Phase 2 — JS Functionality

### Task 5: `main.js` — Mobile Nav, Dark Mode, Counter Animations

**Files:**
- Create: `main.js`
- Modify: `shared.css` (drawer styles + dark mode variables)
- Modify: All HTML files (add `<script src="main.js">`, add dark mode button, add `data-count` attrs, remove inline tab JS)

- [ ] **Step 1: Create `main.js`**

```javascript
/* main.js — MDSU shared site JS */

// Mobile nav drawer
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  const drawer = document.createElement('div');
  drawer.id = 'mobile-drawer';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-label', 'Navigation menu');

  const navClone = document.querySelector('.primary-nav').cloneNode(true);
  navClone.className = 'drawer-nav-list';
  // Make all dropdown submenus visible in drawer
  navClone.querySelectorAll('.dropdown').forEach(d => {
    d.style.cssText = 'position:static;opacity:1;visibility:visible;transform:none;box-shadow:none;border:none;border-radius:0;';
  });

  drawer.appendChild(createEl('div', { className: 'drawer-inner' }, [
    createEl('div', { className: 'drawer-head' }, [
      createEl('span', { className: 'drawer-logo-name', textContent: 'MDS University' }),
      createEl('button', { className: 'drawer-close', 'aria-label': 'Close menu' },
        ['<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 2l14 14M16 2L2 16"/></svg>'])
    ]),
    createEl('nav', { 'aria-label': 'Mobile navigation' }, [navClone])
  ]));
  drawer.appendChild(createEl('div', { className: 'drawer-backdrop' }));
  document.body.appendChild(drawer);

  const closeBtn = drawer.querySelector('.drawer-close');
  const backdrop = drawer.querySelector('.drawer-backdrop');

  function openDrawer() {
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function closeDrawer() {
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }

  toggle.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
}

// Helper: create DOM element with props and children (strings treated as innerHTML for SVG/HTML literals from our own templates only)
function createEl(tag, props, children) {
  const el = document.createElement(tag);
  Object.entries(props || {}).forEach(([k, v]) => {
    if (k === 'textContent') el.textContent = v;
    else el.setAttribute(k.replace(/([A-Z])/g, '-$1').toLowerCase(), v);
  });
  (children || []).forEach(child => {
    if (typeof child === 'string') el.insertAdjacentHTML('beforeend', child);
    else el.appendChild(child);
  });
  return el;
}

// Stats counter animation
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString('en-IN') + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// Dark mode toggle
function initDarkMode() {
  const btn = document.getElementById('dark-mode-toggle');
  if (!btn) return;
  const stored = localStorage.getItem('mdsu-theme');
  if (stored === 'dark') document.documentElement.dataset.theme = 'dark';
  const icon = btn.querySelector('.dm-icon');

  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('mdsu-theme', dark ? 'dark' : 'light');
    btn.setAttribute('aria-pressed', String(dark));
    if (icon) icon.textContent = dark ? '☀' : '☾';
  }

  setTheme(stored === 'dark');
  btn.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme !== 'dark');
  });
}

// Shared tab switching (works for any [role="tab"])
function initTabs() {
  const tabs = document.querySelectorAll('[role="tab"]');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('[role="tablist"]');
      const allTabs = group ? group.querySelectorAll('[role="tab"]') : tabs;
      allTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('[role="tabpanel"]').forEach(p => { p.classList.remove('active'); p.hidden = true; });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) { panel.classList.add('active'); panel.hidden = false; }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCounters();
  initDarkMode();
  initTabs();
});
```

- [ ] **Step 2: Add drawer + dark mode CSS to `shared.css`**

Append to end of `shared.css`:
```css
/* ── Mobile drawer ── */
#mobile-drawer {
  position: fixed; inset: 0; z-index: 500;
  pointer-events: none; visibility: hidden;
}
#mobile-drawer.open { pointer-events: all; visibility: visible; }
.drawer-backdrop {
  position: absolute; inset: 0; background: rgba(0,0,0,0.5);
  opacity: 0; transition: opacity 0.3s;
}
#mobile-drawer.open .drawer-backdrop { opacity: 1; }
.drawer-inner {
  position: absolute; top: 0; left: 0; bottom: 0; width: 300px;
  background: var(--white); overflow-y: auto;
  transform: translateX(-100%); transition: transform 0.3s ease;
  display: flex; flex-direction: column;
}
#mobile-drawer.open .drawer-inner { transform: translateX(0); }
.drawer-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-4) var(--space-5); background: var(--navy); flex-shrink: 0;
}
.drawer-logo-name {
  font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--white);
}
.drawer-close {
  background: none; border: none; cursor: pointer; color: rgba(255,255,255,0.7);
  padding: 6px; border-radius: var(--radius-sm); min-width: 44px; min-height: 44px;
  display: flex; align-items: center; justify-content: center; transition: color 0.15s;
}
.drawer-close:hover { color: var(--white); }
.drawer-nav-list { list-style: none; padding: var(--space-4) 0; }
.drawer-nav-list > li > a {
  display: flex; align-items: center; padding: 12px var(--space-5);
  font-size: 15px; font-weight: 500; color: var(--ink);
  border-bottom: 1px solid var(--rule); min-height: 48px;
  transition: background 0.15s, color 0.15s;
}
.drawer-nav-list > li > a:hover, .drawer-nav-list > li > a.active {
  background: var(--cream); color: var(--navy);
}
.drawer-nav-list .dropdown a {
  padding-left: var(--space-8); font-size: 13px; background: var(--cream);
}

/* ── Dark mode ── */
[data-theme="dark"] {
  --navy:       #5B8FCC;
  --navy-dark:  #1A2744;
  --navy-mid:   #4A7AB8;
  --saffron:    #F5A732;
  --saffron-lt: #FFBE55;
  --saffron-bg: #2A2010;
  --cream:      #1A1A2A;
  --white:      #141420;
  --ink:        #E8E8F0;
  --ink-mid:    #A8B4C8;
  --ink-lt:     #6B7A8D;
  --rule:       #2A2A3A;
  --rule-dark:  #3A3A4A;
}
```

- [ ] **Step 3: Add dark mode button to all HTML files**

In `.header-actions`, before `.btn-login`, add:
```html
<button id="dark-mode-toggle" aria-label="Toggle dark mode" aria-pressed="false" style="background:none;border:1.5px solid var(--rule);border-radius:20px;padding:8px 12px;cursor:pointer;font-size:16px;min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;color:var(--ink-mid);transition:border-color 0.2s;">
  <span class="dm-icon">&#9790;</span>
</button>
```

- [ ] **Step 4: Add `data-count` to homepage stats in `index.html`**

Replace the 4 `.hero-stat-value` elements:
```html
<div class="hero-stat-value" data-count="600" data-suffix="+">600+</div>
<div class="hero-stat-value" data-count="65" data-suffix="+">65+</div>
<div class="hero-stat-value">NIRF</div>
<div class="hero-stat-value">1987</div>
```

- [ ] **Step 5: Replace inline tab JS in `exams.html`, `about.html`, `index.html`**

Remove the `<script>` block at bottom of each page and replace with:
```html
<script src="main.js"></script>
```

- [ ] **Step 6: Add `<script src="main.js"></script>` to `admissions.html`, `faculty.html`, `downloads.html`, `contact.html`, `affiliation.html`**

- [ ] **Step 7: Verify all 8 pages**
```bash
open "index.html"
```
- Resize to mobile: hamburger appears, click opens slide-in drawer
- Desktop: dark mode button toggles, refreshing same page keeps theme
- Homepage: scroll to stats — numbers count up from 0

- [ ] **Step 8: Commit**
```bash
git add main.js shared.css *.html
git commit -m "feat: shared main.js with mobile drawer, dark mode, stats counter"
```

---

### Task 6: Global Search Page

**Files:**
- Create: `search.html`
- Create: `data/search-index.json`

- [ ] **Step 1: Create `data/search-index.json`**

```json
[
  { "title": "Admissions 2026-27", "desc": "Apply for UG and PG programmes at MDSU", "url": "admissions.html", "category": "Admissions", "keywords": "admission apply form 2026 pg ug" },
  { "title": "MBA Business Economics", "desc": "Postgraduate programme, Dept of Economics", "url": "admissions.html", "category": "Admissions", "keywords": "mba economics pg postgraduate management" },
  { "title": "Exams and Results", "desc": "Exam schedules, admit cards, result notifications", "url": "exams.html", "category": "Exams", "keywords": "result exam schedule admit card marksheet" },
  { "title": "Re-evaluation Form", "desc": "Apply for re-evaluation of answer sheets", "url": "downloads.html", "category": "Downloads", "keywords": "re-evaluation recheck answer sheet form download" },
  { "title": "About MDSU", "desc": "History, vision, mission, and administration", "url": "about.html", "category": "About", "keywords": "about history established 1987 naac accreditation" },
  { "title": "Faculty Directory", "desc": "Search academic staff by department", "url": "faculty.html", "category": "Faculty", "keywords": "faculty professor staff department teacher" },
  { "title": "Affiliation", "desc": "College affiliation process and list of colleges", "url": "affiliation.html", "category": "Affiliation", "keywords": "affiliation college new renewal extension" },
  { "title": "Downloads", "desc": "Forms, reports, syllabi and official documents", "url": "downloads.html", "category": "Downloads", "keywords": "download form pdf syllabus report document" },
  { "title": "Contact Us", "desc": "Department contacts, address and grievance form", "url": "contact.html", "category": "Contact", "keywords": "contact phone address grievance helpdesk" },
  { "title": "Scholarship and Fellowship", "desc": "Available scholarships for eligible students", "url": "admissions.html", "category": "Students", "keywords": "scholarship fellowship financial aid merit" },
  { "title": "NIRF Ranking", "desc": "MDSU ranked 51-100 in State Public Universities", "url": "about.html", "category": "About", "keywords": "nirf ranking national institutional framework" },
  { "title": "NAAC Accreditation", "desc": "MDSU is NAAC accredited university", "url": "about.html", "category": "About", "keywords": "naac accreditation quality assessment" },
  { "title": "Fee Structure", "desc": "Programme-wise fee structure for all courses", "url": "#", "category": "Academics", "keywords": "fee structure tuition charges programme" },
  { "title": "Academic Calendar", "desc": "Academic schedule, holidays and important dates", "url": "#", "category": "Academics", "keywords": "academic calendar schedule semester holiday" },
  { "title": "Hostel", "desc": "Hostel allotment and accommodation for students", "url": "#", "category": "Students", "keywords": "hostel accommodation residence allotment" },
  { "title": "Anti-Ragging Cell", "desc": "Report ragging incidents and university policy", "url": "#", "category": "Student Welfare", "keywords": "anti ragging complaint report cell" },
  { "title": "Grievance Portal", "desc": "Submit academic and administrative grievances", "url": "contact.html", "category": "Student Welfare", "keywords": "grievance complaint portal submit" },
  { "title": "RTI", "desc": "Right to Information requests and forms", "url": "downloads.html", "category": "Administration", "keywords": "rti right information transparency" }
]
```

- [ ] **Step 2: Create `search.html`** — page hero "Search Results". Search input pre-filled from `?q=` URL param. Results rendered as a list (category label, title as link, description). "X results for Y" count shown. Empty state: "No results found for... Try a different term."

JS:
```javascript
async function initSearch() {
  const params = new URLSearchParams(window.location.search);
  let q = params.get('q') || '';

  const input = document.getElementById('search-page-input');
  const label = document.getElementById('result-count');
  const container = document.getElementById('search-results');
  input.value = q;

  const res = await fetch('data/search-index.json');
  const index = await res.json();

  function runSearch(query) {
    if (!query.trim()) return index;
    const terms = query.toLowerCase().split(/\s+/);
    return index.filter(item =>
      terms.every(t =>
        item.title.toLowerCase().includes(t) ||
        item.desc.toLowerCase().includes(t) ||
        item.keywords.toLowerCase().includes(t)
      )
    );
  }

  function render(results, query) {
    label.textContent = query
      ? results.length + ' result' + (results.length !== 1 ? 's' : '') + ' for "' + query + '"'
      : results.length + ' documents indexed';

    if (results.length === 0) {
      // Use textContent for user-supplied query string to prevent XSS
      const noResult = document.createElement('p');
      noResult.style.cssText = 'color:var(--ink-lt);font-size:16px;padding:48px 0;';
      noResult.textContent = 'No results found for "' + query + '". Try a different search term.';
      container.replaceChildren(noResult);
      return;
    }

    container.replaceChildren();
    results.forEach(r => {
      const article = document.createElement('article');
      article.style.cssText = 'padding:20px 0;border-bottom:1px solid var(--rule);';

      const cat = document.createElement('div');
      cat.style.cssText = 'font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--saffron);margin-bottom:4px;';
      cat.textContent = r.category;

      const heading = document.createElement('h2');
      heading.style.cssText = 'font-family:var(--font-display);font-size:20px;font-weight:600;margin-bottom:4px;';
      const link = document.createElement('a');
      link.href = r.url;
      link.textContent = r.title;
      link.style.cssText = 'color:var(--navy);transition:color 0.15s;';
      heading.appendChild(link);

      const desc = document.createElement('p');
      desc.style.cssText = 'font-size:14px;color:var(--ink-lt);';
      desc.textContent = r.desc;

      article.append(cat, heading, desc);
      container.appendChild(article);
    });
  }

  render(runSearch(q), q);

  input.addEventListener('input', e => {
    const newQ = e.target.value;
    const url = new URL(window.location.href);
    url.searchParams.set('q', newQ);
    window.history.replaceState({}, '', url);
    render(runSearch(newQ), newQ);
  });
}
initSearch();
```

Note: user-supplied search query is always rendered via `textContent`, never `innerHTML`. Result data (titles, descriptions) comes from our controlled JSON.

- [ ] **Step 3: Update search form `action` in all pages**

In every HTML file, change `<form class="search-form" ...>` action from `#` or missing to `action="search.html"`. Input already has `name="q"`.

- [ ] **Step 4: Verify**
```bash
open "search.html?q=admission"
```
Results for "admission" appear. Typing in search box updates URL and re-renders live.

- [ ] **Step 5: Commit**
```bash
git add search.html data/search-index.json *.html
git commit -m "feat: add global search page with JSON index and live results"
```

---

### Task 7: Print Stylesheet

**Files:**
- Modify: `shared.css`

- [ ] **Step 1: Append print CSS to `shared.css`**

```css
@media print {
  .util-bar, .site-header, .notice-bar, .breadcrumb-bar,
  .page-hero, .site-footer, aside, .exam-tabs,
  .search-form, .btn-login, .nav-toggle,
  .filter-bar, .result-search-card,
  #dark-mode-toggle, #mobile-drawer { display: none !important; }

  body { font-size: 12pt; color: #000; background: #fff; }
  .container { max-width: 100%; padding: 0; }

  .notif-item, .programme-card { break-inside: avoid; }
  h1, h2, h3 { break-after: avoid; }

  a[href]:not([href="#"])::after {
    content: " (" attr(href) ")";
    font-size: 9pt; color: #666;
  }

  body::before {
    content: "Maharshi Dayanand Saraswati University, Ajmer — mdsuajmer.ac.in";
    display: block; font-size: 14pt; font-weight: bold;
    text-align: center; margin-bottom: 12pt;
    border-bottom: 2pt solid #000; padding-bottom: 8pt;
  }
}
```

- [ ] **Step 2: Verify**

Open `exams.html` → Cmd+P → Print Preview. Nav/footer hidden. University name at top. Rows don't split across pages.

- [ ] **Step 3: Commit**
```bash
git add shared.css
git commit -m "style: add print stylesheet for exam and results pages"
```

---

## Phase 3 — Cross-Linking and Shared Includes

### Task 8: Shared Header/Footer via Fetch Includes

> Without a build tool, each HTML file duplicates the header/footer. This task extracts them to `includes/` loaded by `main.js`. Requires serving via HTTP (not `file://`) — use `npx serve .` locally.

**Files:**
- Create: `includes/header.html`
- Create: `includes/footer.html`
- Create: `includes/util-bar.html`
- Modify: `main.js`
- Modify: All HTML files

- [ ] **Step 1: Create `includes/util-bar.html`**

Copy the full `<div class="util-bar">...</div>` from any page. Remove the date (will be set dynamically) or leave static.

- [ ] **Step 2: Create `includes/header.html`**

Copy the full `<header class="site-header">...</header>` from any page. Remove `.active` from all nav links — JS will add it based on current page filename.

- [ ] **Step 3: Create `includes/footer.html`**

Copy the full `<footer class="site-footer">...</footer>` from any page.

- [ ] **Step 4: Add `loadIncludes()` to `main.js`**

Add this function and call it first inside `DOMContentLoaded`:

```javascript
async function loadIncludes() {
  const slots = [
    { attr: 'data-include', value: 'util-bar', file: 'includes/util-bar.html' },
    { attr: 'data-include', value: 'header',   file: 'includes/header.html' },
    { attr: 'data-include', value: 'footer',   file: 'includes/footer.html' },
  ];

  // Resolve relative path to includes/ from any page depth
  const base = document.querySelector('base')?.href || window.location.href;

  await Promise.all(slots.map(async slot => {
    const el = document.querySelector('[' + slot.attr + '="' + slot.value + '"]');
    if (!el) return;
    const url = new URL(slot.file, base).href;
    const res = await fetch(url);
    if (!res.ok) return;
    const html = await res.text();
    el.outerHTML = html;
  }));

  // Mark active nav link based on current page filename
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Re-init mobile nav after header loads
  initMobileNav();
}
```

Update `DOMContentLoaded` handler:
```javascript
document.addEventListener('DOMContentLoaded', async () => {
  await loadIncludes();   // load header/footer first
  initCounters();
  initDarkMode();
  initTabs();
});
```

- [ ] **Step 5: Replace header/footer in all HTML files**

In every HTML file:
- Replace `<div class="util-bar">...</div>` with `<div data-include="util-bar"></div>`
- Replace `<header class="site-header">...</header>` with `<header data-include="header"></header>`
- Replace `<footer class="site-footer">...</footer>` with `<footer data-include="footer"></footer>`

- [ ] **Step 6: Run local server to verify**

```bash
cd "/Users/joshuaphillips/Desktop/Code/Ideas/MDSU Website"
npx serve . -p 3000
open http://localhost:3000
```

Header and footer load on all pages. Active nav item highlights correctly on each page.

- [ ] **Step 7: Commit**
```bash
git add includes/ main.js *.html
git commit -m "refactor: extract shared header/footer to includes/ loaded by main.js"
```

---

## Phase 4 — Deployment

### Task 9: Deploy to Netlify

**Files:**
- Create: `netlify.toml`
- Create: `.gitignore`

- [ ] **Step 1: Initialise git repo**
```bash
cd "/Users/joshuaphillips/Desktop/Code/Ideas/MDSU Website"
git init
git add .
git commit -m "feat: complete MDSU website - all pages and functionality"
```

- [ ] **Step 2: Create `netlify.toml`**

```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[redirects]]
  from = "/admissions"
  to = "/admissions.html"
  status = 200

[[redirects]]
  from = "/exams"
  to = "/exams.html"
  status = 200

[[redirects]]
  from = "/about"
  to = "/about.html"
  status = 200

[[redirects]]
  from = "/faculty"
  to = "/faculty.html"
  status = 200

[[redirects]]
  from = "/downloads"
  to = "/downloads.html"
  status = 200

[[redirects]]
  from = "/contact"
  to = "/contact.html"
  status = 200

[[redirects]]
  from = "/affiliation"
  to = "/affiliation.html"
  status = 200

[[redirects]]
  from = "/search"
  to = "/search.html"
  status = 200
```

- [ ] **Step 3: Create `.gitignore`**
```
.DS_Store
.gstack/
node_modules/
*.log
```

- [ ] **Step 4: Push to GitHub**
```bash
gh repo create mdsu-website --public --source=. --remote=origin --push
```

- [ ] **Step 5: Deploy to Netlify**
```bash
npx netlify-cli deploy --prod --dir=.
```
If first time: `npx netlify-cli login` first (opens browser OAuth).

- [ ] **Step 6: Verify live site**
```bash
open https://YOUR-NETLIFY-URL.netlify.app
```
Checklist:
- All 9 pages load (index, about, admissions, exams, faculty, downloads, contact, affiliation, search)
- Mobile nav drawer opens
- Dark mode persists across page navigations
- Search returns results
- Stats counter animates
- Print preview on exams page is clean

- [ ] **Step 7: Commit deployment config**
```bash
git add netlify.toml .gitignore
git commit -m "chore: add Netlify config, redirects, and security headers"
git push
```

---

## Final File Structure

```
MDSU Website/
├── index.html              Homepage
├── about.html              About the university
├── admissions.html         Admissions
├── exams.html              Exams and Results
├── faculty.html            Faculty directory      [Task 1]
├── downloads.html          Downloads              [Task 2]
├── contact.html            Contact and grievance  [Task 3]
├── affiliation.html        College affiliation    [Task 4]
├── search.html             Global search          [Task 6]
├── shared.css              Design tokens + components
├── main.js                 Mobile nav, dark mode, counters, tabs [Task 5]
├── includes/
│   ├── header.html         Shared header          [Task 8]
│   ├── footer.html         Shared footer          [Task 8]
│   └── util-bar.html       Shared utility bar     [Task 8]
├── data/
│   ├── faculty.json        Faculty data           [Task 1]
│   ├── downloads.json      Downloads catalogue    [Task 2]
│   ├── colleges.json       Affiliated colleges    [Task 4]
│   └── search-index.json   Search index           [Task 6]
├── netlify.toml            Deployment config      [Task 9]
├── .gitignore
└── docs/
    └── plans/
        └── 2026-05-13-full-website.md
```

---

## Spec Coverage Check

| Feature | Task | Status |
|---------|------|--------|
| Faculty page with search/filter | 1 | Planned |
| Contact page with form | 3 | Planned |
| Downloads with categories | 2 | Planned |
| Affiliation with college search | 4 | Planned |
| Mobile nav drawer | 5 | Planned |
| Dark mode | 5 | Planned |
| Stats counter animation | 5 | Planned |
| Global search | 6 | Planned |
| Print stylesheet | 7 | Planned |
| Single-source header/footer | 8 | Planned |
| Netlify deployment | 9 | Planned |

**Total: 9 tasks, ~18 commits.**
