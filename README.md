# Piyush Kumar Singh — Portfolio

A premium, conversion-focused portfolio site built with React, TypeScript, Tailwind CSS, and Framer Motion, designed to deploy for free on GitHub Pages.

**Design direction:** dark, precise, "engineering ops dashboard" aesthetic — Space Grotesk for headlines, Inter for body copy, JetBrains Mono for data/labels, a violet primary accent with a cyan "signal" accent reserved for live data and metrics. The hero features a live-updating telemetry panel (fake but realistic inference metrics/logs) instead of a generic AI-brain graphic, since it literally shows the kind of system this portfolio is arguing you can build.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit `src/data/content.ts` and the page hot-reloads.

---

## 2. Edit your content

**Everything you'll routinely want to change lives in one file: `src/data/content.ts`.**
Name, contact info, hero stats, about copy, projects, experience, skills, certifications — all in one place, typed, with comments. You should rarely need to touch a component file just to update copy.

To swap the **resume**, replace `public/resume.pdf` with your own file (keep the filename, or update `profile.resumeFile` in `content.ts` to match).

To add **real project screenshots** (recommended — this matters more than almost anything else for credibility with senior engineers), drop images into `public/projects/` and swap the `<ProjectVisual kind={p.kind} />` call in `src/components/Projects.tsx` for an `<img>` tag. The current abstract visuals are intentional placeholders, not fake screenshots — they're there so the site never claims to show something it doesn't.

---

## 3. Contact form (GitHub Pages has no backend)

GitHub Pages only serves static files, so the contact form is wired to [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Create a free form at formspree.io and grab your form ID.
2. Open `src/components/Contact.tsx` and replace:
   ```ts
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
   with your real endpoint.

Until you do this, the form will show an error message on submit — email and phone links work regardless.

---

## 4. Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`.

### One-time setup

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The first run creates your live site.

### Important: set the correct base path

Open `vite.config.ts`:

- **User/organization page** (`https://<username>.github.io`) — the repo must be named exactly `<username>.github.io`. Keep:
  ```ts
  base: '/'
  ```
- **Project page** (`https://<username>.github.io/<repo-name>`) — change to:
  ```ts
  base: '/<repo-name>/'
  ```
  matching your actual repo name exactly (case-sensitive, with leading and trailing slashes).

Getting this wrong is the most common reason a React app deploys "successfully" on GitHub Pages but shows a blank white page — the browser requests assets from the wrong path. If that happens, check this first.

### Custom domain (optional)

Add a `public/CNAME` file containing just your domain (e.g. `piyushkumarsingh.dev`), and point your domain's DNS at GitHub Pages per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## 5. Performance notes

- The build is a single static bundle — no server, no database, nothing to maintain.
- Images you add should be compressed and ideally WebP; large uncompressed screenshots are the most common way a fast static site becomes a slow one.
- Run `npm run build && npm run preview` locally before pushing if you want to sanity-check the production build.

---

## 6. Project structure

```
src/
  data/content.ts        ← all site copy, one file
  components/
    Nav.tsx
    Hero.tsx
    TelemetryPanel.tsx    ← the animated hero signature element
    About.tsx
    Experience.tsx
    Projects.tsx
    ProjectVisual.tsx      ← placeholder visuals, swap for real screenshots
    Skills.tsx
    Credentials.tsx        ← certifications + education
    Contact.tsx
    Footer.tsx
  App.tsx
public/
  resume.pdf              ← replace with your current resume
  favicon.svg
.github/workflows/deploy.yml
```

---

## 7. Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · lucide-react icons · Formspree (contact form) · GitHub Actions (CI/CD) · GitHub Pages (hosting)
